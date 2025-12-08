function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">get in touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="message" required></textarea>
        </div>
        <button type="submit">send message</button>
      </form>
    </section>
  )
}

export default Contact
