import React from 'react';

function Home() {
  return (
    <div id="home" className="container active text-center text-white">
      {/* Google Fonts link should be placed in the public HTML or a higher-level component */}
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '60px',
          color: 'white',
          letterSpacing: '2px',
          textShadow: `
            1px 1px 0px #b3b3b3,  /* Layer 1 for depth */
            2px 2px 0px #999999,  /* Layer 2 for more depth */
            3px 3px 0px #7f7f7f,  /* Layer 3 for more intensity */
            4px 4px 5px rgba(0, 0, 0, 0.5) /* Final layer for strong shadow */
          `,
          textAlign: 'left',
        }}
      >
        ABOUT MITWPU
      </h2>

      <img
        src="https://worldpeacedome.in/wp-content/uploads/2019/09/domeban1-1024x494.jpg"
        alt="MIT"
        width="700"
        height="345"
        className="center"
      />

      <p
        style={{
          fontSize: '20px',
          lineHeight: '1.6',
          color: '#f0f0f0',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        MIT World Peace University (MIT-WPU) is a prestigious world-class institution
        of higher education in India, boasting a remarkable 40-year legacy dedicated
        to fostering excellence in academics. With a global alumni network comprising
        over 1,00,000 professionals, MIT-WPU has consistently delivered outstanding
        educational outcomes. The institution offers over 150 undergraduate and
        postgraduate programmes that are thoughtfully designed to strike a balance
        between theoretical foundations and practical application. The pedagogical
        approach prioritises experiential learning, empowering students to translate
        knowledge into real-world skills. This is facilitated through immersive
        internships and invaluable mentor-mentee insights that serve as catalysts for
        personal and professional growth.
      </p>
    </div>
  );
}

export default Home;
