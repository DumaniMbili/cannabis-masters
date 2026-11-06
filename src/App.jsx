import { useState } from "react";
import { Menu, X, MapPin, MessageCircle, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <header>
        <nav className="navbar">
          <div className="logo">
            <h1>Cannabis Masters</h1>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#products" onClick={() => setMenuOpen(false)}>
                Products
              </a>
            </li>
            <li>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                Education
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact & Locations
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">WELCOME TO CANNABIS MASTERS</p>

            <h2>Discover Cannabis Masters</h2>

            <p className="hero-description">
              Explore our world of cannabis education, product information and
              store updates.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">
                Explore Products
              </a>

              <a href="#education" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <div className="about-text">
              <p className="section-label">WHO WE ARE</p>

              <h2>More Than Just Cannabis</h2>

              <p>
                Welcome to Cannabis Masters. We are passionate about creating an
                informative and welcoming experience for our customers. Discover
                our brand, explore product information and learn more about the
                world of cannabis.
              </p>

              <a href="#education" className="btn btn-primary">
                Discover More
              </a>
            </div>

            <div className="about-highlight">
              <h3>CANNABIS MASTERS</h3>
              <p>Knowledge. Quality. Community.</p>
            </div>
          </div>
        </section>

        <section className="products" id="products">
          <div className="section-heading">
            <p className="section-label">EXPLORE OUR RANGE</p>
            <h2>Discover Our Products</h2>
            <p>
              Explore our different product categories and learn more about
              what's available at Cannabis Masters.
            </p>
          </div>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-placeholder">01</div>
              <h3>Flower</h3>
              <p>Explore our flower category.</p>
            </div>

            <div className="product-card">
              <div className="product-placeholder">02</div>
              <h3>Edibles</h3>
              <p>Discover our edibles category.</p>
            </div>

            <div className="product-card">
              <div className="product-placeholder">03</div>
              <h3>Pre-Rolls</h3>
              <p>Explore our pre-roll category.</p>
            </div>

            <div className="product-card">
              <div className="product-placeholder">04</div>
              <h3>Vape Products</h3>
              <p>Discover our vape product category.</p>
            </div>

            <div className="product-card">
              <div className="product-placeholder">05</div>
              <h3>Oils</h3>
              <p>Explore our oil category.</p>
            </div>
          </div>
        </section>

        <section className="education" id="education">
          <div className="section-heading">
            <p className="section-label">LEARN WITH US</p>
            <h2>Knowledge Is Power</h2>
            <p>
              Explore educational resources, discover useful information and
              expand your understanding of cannabis.
            </p>
          </div>

          <div className="education-grid">
            <article className="education-card">
              <div className="education-icon">
                <span>01</span>
              </div>
              <h3>Cannabis Basics</h3>
              <p>
                An introduction to cannabis, its terminology and the
                fundamentals worth understanding.
              </p>
              <a href="#contact">Explore Topics →</a>
            </article>

            <article className="education-card">
              <div className="education-icon">
                <span>02</span>
              </div>
              <h3>Understanding Products</h3>
              <p>
                Learn about different product categories and the characteristics
                that distinguish them.
              </p>
              <a href="#contact">Explore Topics →</a>
            </article>

            <article className="education-card">
              <div className="education-icon">
                <span>03</span>
              </div>
              <h3>Responsible Use</h3>
              <p>
                Explore educational resources covering safety, responsible
                decisions and harm reduction.
              </p>
              <a href="#contact">Explore Topics →</a>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-heading">
            <p className="section-label">GET IN TOUCH</p>
            <h2>Let's Connect</h2>
            <p>
              Have a question or need more information? Connect with our team or
              visit one of our branches.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="contact-grid">
            <div className="contact-card">
              <h3>WhatsApp</h3>
              <p>Chat with us for enquiries and assistance.</p>
              <a
                href="https://wa.me/27614313825?text=Hi%20Cannabis%20Masters%2C%20I%27d%20like%20to%20make%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <h3>Telephone</h3>
              <p>Give us a call for direct assistance.</p>
              <a href="tel:+27614313825" className="contact-link">
                061 431 3825
              </a>
            </div>

            <div className="contact-card">
              <h3>Instagram</h3>
              <p>Follow Cannabis Masters for updates and news.</p>
              <a
                href="https://www.instagram.com/cannabis.masterscbd/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>

          {/* Store Locations */}
          <div className="contact-locations" id="locations">
            <div className="section-heading">
              <p className="section-label">OUR BRANCHES</p>
              <h2>Find Your Nearest Store</h2>
              <p>Visit one of our three Cannabis Masters locations.</p>
            </div>

            <div className="location-grid">
              <article className="location-card">
                <div className="location-number">01</div>
                <h3>Pretoria West</h3>

                <p className="location-address">
                  20 Navigation Street,
                  <br />
                  West Park,
                  <br />
                  Pretoria, 0183
                </p>

                <div className="location-hours">
                  <strong>Opening Hours</strong>
                  <p>Monday – Sunday</p>
                  <p>11:00 – 18:00</p>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=20+Navigation+Street%2C+West+Park%2C+Pretoria%2C+0183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Get Directions
                </a>
              </article>

              <article className="location-card">
                <div className="location-number">02</div>
                <h3>Gezina</h3>

                <p className="location-address">
                  310 Steve Biko Road,
                  <br />
                  Gezina,
                  <br />
                  Pretoria, 0084
                </p>

                <div className="location-hours">
                  <strong>Opening Hours</strong>
                  <p>Monday – Sunday</p>
                  <p>10:00 – 17:00</p>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=310+Steve+Biko+Road%2C+Gezina%2C+Pretoria%2C+0084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Get Directions
                </a>
              </article>

              <article className="location-card">
                <div className="location-number">03</div>
                <h3>Wierda Park</h3>

                <p className="location-address">
                  274 Chris Hougaard Street,
                  <br />
                  Wierda Park,
                  <br />
                  Centurion, 0157
                </p>

                <div className="location-hours">
                  <strong>Opening Hours</strong>
                  <p>Monday – Sunday</p>
                  <p>10:00 – 18:00</p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=274+Chris+Hougaard+Street%2C+Wierda+Park%2C+Centurion%2C+0157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Get Directions
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h2>Cannabis Masters</h2>
            <p>Knowledge. Quality. Community.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#education">Education</a>
            <a href="#locations">
              <MapPin size={15} /> Store Locator
            </a>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Connect With Us</h3>

            <div className="footer-socials">
              <a
                href="https://wa.me/27614313825"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle size={22} />
              </a>

              <a href="tel:+27614313825" aria-label="Call Cannabis Masters">
                <Phone size={22} />
              </a>

              <a
                href="https://www.instagram.com/cannabis.masterscbd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>

            <p>We're just a message or call away.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Cannabis Masters. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
