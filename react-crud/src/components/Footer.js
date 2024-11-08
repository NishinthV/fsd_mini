// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={footerStyles}>
      <div style={footerInfoStyles}>
        <div style={infoSectionStyles}>
          <i className="fas fa-map-marker-alt"></i>
          <p><strong>ADDRESS</strong><br />
            S.No.124, Paud Road, Kothrud, Pune, Maharashtra 411038
          </p>
        </div>
        <div style={infoSectionStyles}>
          <i className="fas fa-phone-alt"></i>
          <p><strong>PHONE</strong><br />
            +91 7020107558 / 9551165281
          </p>
        </div>
        <div style={infoSectionStyles}>
          <i className="fas fa-envelope"></i>
          <p><strong>EMAIL</strong><br />
            <a href="mailto:karnavatneel@mitwpu.edu.in">karnavatneel@mitwpu.edu.in</a><br />
            <a href="mailto:nishinthvenkatesh@gmail.com">nishinthvenkatesh@gmail.com</a>
          </p>
        </div>
      </div>
      <div style={socialIconsStyles}>
        <a href="https://www.facebook.com/mitwpu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/mitwpu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/mitwpu/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/school/mitwpu/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div style={copyrightStyles}>
        &copy; 2024 MIT-WPU. All Rights Reserved.
      </div>
    </footer>
  );
}

// Inline CSS styles
const footerStyles = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  marginTop: 'auto',
};

const footerInfoStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  paddingBottom: '10px',
};

const infoSectionStyles = {
  maxWidth: '200px',
};

const socialIconsStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  fontSize: '20px',
  marginTop: '10px',
};

const copyrightStyles = {
  marginTop: '10px',
  fontSize: '0.9em',
};

export default Footer;
