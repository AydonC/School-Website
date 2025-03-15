import "../../public/css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
         {/* Social Media Icons */}
         <div className="footer-social-icons">
            <a href="https://www.instagram.com/kleinnederburgss/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/knsekonder" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        <div className="footer-info">
          <div className="footer-address">
            <h3>Address</h3>
            <br />
            <p>Newman Street</p>
            <p>Paarl</p>
            <p>7646</p>
            <p>Western Cape</p>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <br />
            <p>021 862 2720</p>
            <a href="mailto:info@example.com">info@knhigh.co.za</a>
          </div>
        </div>
        <div className="footer-bottom" style={{ textAlign: 'center' }}>
          <p>&copy; 2025 Klein Nederburg Senior Secondary. All rights reserved.</p>
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a> | Web Design by <strong>Aydon Cupido</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
