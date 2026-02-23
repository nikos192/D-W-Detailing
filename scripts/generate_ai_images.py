#!/usr/bin/env python3
import base64
import json
import os
import sys
import time
import urllib.request

API_URL = "https://api.openai.com/v1/images/generations"

PROMPTS = [
    {
        "out": "public/hero.jpg",
        "prompt": "Photorealistic cinematic hero image for a premium car detailing website. A glossy black sedan under soft studio lights with water reflections on polished floor, moody dark background, dramatic contrast, no text, no logos, high-end automotive photography.",
        "size": "1536x1024",
    },
    {
        "out": "public/service-exterior.jpg",
        "prompt": "Photorealistic car exterior detailing scene. Detailer using foam cannon and microfiber mitt on a luxury dark car, water beading on paint, workshop lighting, crisp and clean, no text, no logos.",
        "size": "1536x1024",
    },
    {
        "out": "public/service-interior.jpg",
        "prompt": "Photorealistic car interior detailing scene. Close-up of deep-cleaned leather seats and dashboard with steam cleaning and careful brush work, premium detailing studio, warm highlights, no text, no logos.",
        "size": "1536x1024",
    },
    {
        "out": "public/service-full.jpg",
        "prompt": "Photorealistic full car detailing transformation image. Split-style composition showing exterior shine and spotless interior in one premium automotive photo, studio environment, no text, no logos.",
        "size": "1536x1024",
    },
    {
        "out": "public/service-paint.jpg",
        "prompt": "Photorealistic paint correction scene. Detailer using dual-action polisher on dark vehicle panel, swirl-free glossy finish under inspection lights, premium workshop atmosphere, no text, no logos.",
        "size": "1536x1024",
    },
    {
        "out": "public/service-ceramic.jpg",
        "prompt": "Photorealistic ceramic coating application scene. Applicator laying ceramic coating on glossy black hood with visible hydrophobic water beads, high-end detailing bay lighting, no text, no logos.",
        "size": "1536x1024",
    },
    {
        "out": "public/thumb1.jpg",
        "prompt": "Photorealistic before-and-after car detailing composition, left side dull and dusty paint, right side mirror-gloss finish, same vehicle angle, premium auto detailing style, no text.",
        "size": "1536x1024",
    },
    {
        "out": "public/thumb2.jpg",
        "prompt": "Photorealistic side profile of a black sports sedan after exterior detail, deep reflections, clean wheels, wet-look paint, evening studio lighting, no text, no logos.",
        "size": "1536x1024",
    },
    {
        "out": "public/thumb3.jpg",
        "prompt": "Photorealistic macro shot of polished alloy wheel and tire dressing after detailing, high contrast highlights, premium automotive photography, no text.",
        "size": "1536x1024",
    },
    {
        "out": "public/thumb4.jpg",
        "prompt": "Photorealistic luxury car interior after full detail, spotless leather seats, clean stitching, refined dashboard reflections, premium detailing studio light, no text.",
        "size": "1536x1024",
    },
    {
        "out": "public/thumb5.jpg",
        "prompt": "Photorealistic close-up of water beading on freshly ceramic coated black hood, dramatic light reflections, premium automotive detail aesthetic, no text.",
        "size": "1536x1024",
    },
    {
        "out": "public/thumb6.jpg",
        "prompt": "Photorealistic hood reflection shot of a freshly detailed luxury vehicle, crisp mirror-like finish under strip lights, modern detailing bay, no text.",
        "size": "1536x1024",
    },
]


def load_api_key() -> str:
    env_key = os.getenv("OPENAI_API_KEY")
    if env_key:
        return env_key

    auth_path = os.path.expanduser("~/.codex/auth.json")
    if os.path.exists(auth_path):
        with open(auth_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        key = data.get("OPENAI_API_KEY")
        if key:
            return key

    raise RuntimeError("OPENAI_API_KEY not found in env or ~/.codex/auth.json")


def generate_one(api_key: str, item: dict) -> None:
    payload = {
        "model": "gpt-image-1",
        "prompt": item["prompt"],
        "size": item["size"],
        "quality": "medium",
        "output_format": "jpeg",
        "output_compression": 90,
    }

    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    with urllib.request.urlopen(req, timeout=240) as resp:
        body = resp.read().decode("utf-8")

    parsed = json.loads(body)
    b64 = parsed["data"][0]["b64_json"]
    image_bytes = base64.b64decode(b64)

    out_path = item["out"]
    with open(out_path, "wb") as f:
        f.write(image_bytes)

    print(f"generated {out_path} ({len(image_bytes)} bytes)")


def main() -> int:
    try:
        api_key = load_api_key()
    except Exception as e:
        print(str(e), file=sys.stderr)
        return 1

    for idx, item in enumerate(PROMPTS):
        try:
            generate_one(api_key, item)
        except Exception as e:
            print(f"failed {item['out']}: {e}", file=sys.stderr)
            return 1

        if idx < len(PROMPTS) - 1:
            time.sleep(0.35)

    print("all images generated")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
