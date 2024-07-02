
import blockImg from "./img/logo.png";

export default function Services() {

  return (
    <>
      <div className="contactt">
        <div className="container">
          <div className="main-heading">
            <h2>Contact Us</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt.
            </p>
          </div>
          <div className="contentt">
            <form action="">
              <input className="main-input" type="text" name="name" placeholder="Your Name" />
              <input className="main-input" type="email" name="mail" placeholder="Your Email" />
              <textarea className="main-input" name="message" placeholder="Your Message"></textarea>
              <input type="submit" value="Send Message" />
            </form>
            <div className="info">
              <h4>Get In Touch</h4>
              <span className="phone">+00 123.456.789</span>
              <span className="phone">+00 123.456.789</span>
              <h4>Where We Are</h4>
              <address>Awesome Address 17<br />New York, NYC<br />123-4567-890<br />USA</address>
            </div>
          </div>
        </div>
      </div>

      {/* Start Footer  */}
      <div className="footerr">
        <div className="container">
          <img decoding="async" src={blockImg} />
          <p>We Are Social</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fas fa-home"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <p className="copyright">&copy; 2021 <span>Kasper</span> All Right Reserved</p>
        </div>
      </div>

      {/* End Footer  */}
    </>
  )
}
