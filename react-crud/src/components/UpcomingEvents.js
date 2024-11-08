import React from 'react';

function UpcomingEvents() {
  return (
    <div id="upcomingEvents" className="container text-center text-white">
      {/* Google Fonts link can be placed in the public HTML or a higher-level component */}
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
        UPCOMING EVENTS
      </h2>

      <h1
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '250px',
          color: 'white',
          letterSpacing: '4px',
          textShadow: `
            1px 1px 0px #b3b3b3,  /* Layer 1 for depth */
            2px 2px 0px #999999,  /* Layer 2 for more depth */
            3px 3px 0px #7f7f7f,  /* Layer 3 for more intensity */
            4px 4px 5px rgba(0, 0, 0, 0.5) /* Final layer for strong shadow */
          `,
        }}
      >
        WHAT'S UP?!
      </h1>

      {/* Additional content for Upcoming Events can be added below */}
      <div id="react-upcoming-events"></div>
    </div>
  );
}

export default UpcomingEvents;
