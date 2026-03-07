import { contact } from '../data/contact'

function ContactPage() {
  return (
    <section className="page-stack contact-page">
      <p className="eyebrow">Contact & Ordering</p>
      <h2>Have something in mind? I'd love to hear from you!</h2>
      <p>
        All orders and inquiries are handled personally through email or social media. You can
        expect a response within 24 hours.
      </p>

      <div className="contact-cards">
        <a href={`mailto:${contact.email}`} className="contact-card">
          <h3>Email</h3>
          <p>{contact.email}</p>
        </a>

        {contact.socials.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-card">
            <h3>{item.label}</h3>
            <p>Send a message</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactPage