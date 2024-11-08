import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ClubList = () => {
    const [clubs, setClubs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/clubs')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => setClubs(data))
            .catch(error => setError('Error loading clubs'));
    }, []);

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Clubs</h1>
            <ul>
                {clubs.map((club, index) => (
                    <li key={index}>
                        <Link to={`/club/${club.club_name.replace(/\s+/g, '-').toLowerCase()}`}>
                            {club.club_name}
                        </Link>
                        <p>{club.club_description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClubList;
