import React from 'react';

function Contact() {
  const styles = {
    container: {
      color: 'white',
      textAlign: 'center',
    },
    heading: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: '60px',
      color: 'white',
      letterSpacing: '2px',
      textShadow: `
          1px 1px 0px #b3b3b3, 
          2px 2px 0px #999999, 
          3px 3px 0px #7f7f7f, 
          4px 4px 5px rgba(0, 0, 0, 0.5)
      `,
      textAlign: 'left',
      marginBottom: '30px',
    },
    form: {
      marginTop: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    button: {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '20px',
    },
  };

  return (
    <div id="contact" className="container" style={styles.container}>
      <h2 style={styles.heading}>CONTACT US</h2>
      <div className="row">
        <div className="col-md-6 mt-4">
          <h4>Reach Out to Us!</h4>
          <form style={styles.form}>
            <div className="form-group" style={styles.formGroup}>
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="form-group" style={styles.formGroup}>
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="form-group" style={styles.formGroup}>
              <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn" style={styles.button}>Send Message</button>
          </form>
        </div>
        <div className="col-md-6 mt-4">
          <h4>Follow Us</h4>
          <div className="social-icons" style={styles.socialIcons}>
            <a href="https://www.facebook.com/mitwpu" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f fa-2x" style={{ color: 'white' }}></i>
            </a>
            <a href="https://twitter.com/mitwpu" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter fa-2x" style={{ color: 'white' }}></i>
            </a>
            <a href="https://www.instagram.com/mitwpu/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-2x" style={{ color: 'white' }}></i>
            </a>
            <a href="https://www.linkedin.com/school/mitwpu/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in fa-2x" style={{ color: 'white' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
