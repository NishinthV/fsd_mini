import React, { useState, useEffect } from 'react';

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch clubs from the backend
    fetch('/api/clubs')
      .then((response) => response.json())
      .then((data) => setClubs(data))
      .catch((error) => console.error('Error fetching club data:', error));
  }, []);

  // Filter clubs based on search input
  const filteredClubs = clubs.filter((club) =>
    club.club_name.toLowerCase().includes(search.toLowerCase())
  );

  const styles = {
    clubHeading: {
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
      marginBottom: '20px',
    },
    searchContainer: {
      marginBottom: '20px',
    },
    tableContainer: {
      marginTop: '20px',
    },
    table: {
      width: '100%',
      color: 'white',
    },
    button: {
      color: 'white',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      padding: '5px 10px',
      textDecoration: 'none',
      borderRadius: '5px',
    },
  };

  return (
    <React.Fragment>
      <div id="clubs" className="container text-center text-white">
        <h2 style={styles.clubHeading}>CLUBS</h2>
        <div style={styles.searchContainer} className="search-container mb-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-search"></i></span>
            </div>
            <input
              type="text"
              id="searchBox"
              className="form-control"
              placeholder="Search for clubs, categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div style={styles.tableContainer}>
          <table style={styles.table} className="table table-dark table-hover mt-3">
            <thead>
              <tr>
                <th>Club Name</th>
                <th>Category</th>
                <th>Description</th>
                
              </tr>
            </thead>
            <tbody id="clubTableBody">
              {filteredClubs.map((club) => (
                <tr key={club.id}>
                  <td>{club.club_name}</td>
                  <td>{club.category || 'N/A'}</td>
                  <td>{club.club_description}</td>
                  <td>
                    <a href={`/clubs/${club.id}`} style={styles.button}>
                      Register Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav>
            <ul className="pagination" id="paginationControls">
              {/* Pagination controls will be handled here */}
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Clubs;
