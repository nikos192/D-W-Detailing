import Head from 'next/head'
import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { business, services } from '../data/siteContent'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: services[0].title,
  preferredDate: '',
  message: '',
}

const highlights = [
  'Reply within business hours',
  'Package recommendation included',
  'No-obligation booking enquiry',
]

function buildMailto({ name, phone, email, service, preferredDate, message }) {
  const subject = `[Booking Enquiry] ${service} - ${name || 'New Customer'}`
  const bodyLines = [
    'Hello D&W Detailers,',
    '',
    'I would like to request a booking quote with the details below:',
    '',
    `Name: ${name || 'Not provided'}`,
    `Phone: ${phone || 'Not provided'}`,
    `Email: ${email || 'Not provided'}`,
    `Service Interested In: ${service || 'Not specified'}`,
    `Preferred Date: ${preferredDate || 'Flexible / Not specified'}`,
    '',
    'Message:',
    message || 'No additional message provided.',
    '',
    'Thank you.',
  ]

  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    bodyLines.join('\n')
  )}`
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const previewMailto = useMemo(() => buildMailto(form), [form])

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    window.location.href = buildMailto(form)
  }

  return (
    <>
      <Head>
        <title>Contact | D&amp;W Detailers</title>
        <meta
          name="description"
          content="Book your car detailing service with D&W Detailers in Moorooka, Brisbane."
        />
      </Head>

      <div className="site-shell min-h-screen">
        <Navbar />

        <main className="container-site py-12 md:py-16">
          <div className="kicker">Book A Service</div>
          <h1 className="font-display section-title mt-4">Send Your Booking Request</h1>
          <p className="text-[#b4becb] mt-4 max-w-3xl leading-relaxed">
            Complete this quick form and we open a prefilled email draft for you. Once sent, we review your details
            and reply with recommended package and timing.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {highlights.map((item) => (
              <span key={item} className="trust-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="section-space !mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <form
              onSubmit={onSubmit}
              className="lg:col-span-3 panel rounded-3xl p-5 md:p-7 grid grid-cols-1 gap-4"
            >
              <label className="text-sm text-[#ced5df]">
                Full name
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="mt-2 w-full p-3 rounded-xl border border-white/15 bg-black/35 text-white placeholder:text-[#7f8a9a] focus:outline-none focus:ring-2 focus:ring-[#e8412e]/60"
                  required
                />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="text-sm text-[#ced5df]">
                  Phone
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="0400 000 000"
                    className="mt-2 w-full p-3 rounded-xl border border-white/15 bg-black/35 text-white placeholder:text-[#7f8a9a] focus:outline-none focus:ring-2 focus:ring-[#e8412e]/60"
                  />
                </label>

                <label className="text-sm text-[#ced5df]">
                  Email
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full p-3 rounded-xl border border-white/15 bg-black/35 text-white placeholder:text-[#7f8a9a] focus:outline-none focus:ring-2 focus:ring-[#e8412e]/60"
                    required
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="text-sm text-[#ced5df]">
                  Service
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    className="mt-2 w-full p-3 rounded-xl border border-white/15 bg-black/35 text-white focus:outline-none focus:ring-2 focus:ring-[#e8412e]/60"
                  >
                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm text-[#ced5df]">
                  Preferred date
                  <input
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={onChange}
                    type="date"
                    className="mt-2 w-full p-3 rounded-xl border border-white/15 bg-black/35 text-white focus:outline-none focus:ring-2 focus:ring-[#e8412e]/60"
                  />
                </label>
              </div>

              <label className="text-sm text-[#ced5df]">
                Vehicle + notes
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Model, paint/interior condition, and anything else we should know"
                  rows="5"
                  className="mt-2 w-full p-3 rounded-xl border border-white/15 bg-black/35 text-white placeholder:text-[#7f8a9a] focus:outline-none focus:ring-2 focus:ring-[#e8412e]/60"
                />
              </label>

              <button type="submit" className="btn-primary w-full md:w-auto mt-2">
                Open Prefilled Email
              </button>
            </form>

            <aside className="lg:col-span-2 panel rounded-3xl p-5 md:p-7 space-y-5 sticky top-24">
              <div>
                <h2 className="text-xl font-semibold">Direct Contact</h2>
                <div className="mt-3 space-y-2 text-sm text-[#c7cfda]">
                  <div>{business.location}</div>
                  <a
                    className="block hover:text-white transition-colors"
                    href={`tel:${business.phone.replace(/[^+\d]/g, '')}`}
                  >
                    {business.phone}
                  </a>
                  <a className="block hover:text-white transition-colors break-all" href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                  <a
                    className="block hover:text-white transition-colors"
                    href={business.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-sm uppercase tracking-[0.14em] text-[#f6c66c]">Preset Preview</h3>
                <p className="text-sm text-[#bac3d0] mt-2 leading-relaxed">
                  This preview opens the same draft as the main button, with your current form values.
                </p>
                <a href={previewMailto} className="btn-ghost w-full mt-4 !py-2.5">
                  Open Preview Draft
                </a>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
