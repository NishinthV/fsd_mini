import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClubDetail = () => {
    const { clubName } = useParams();
    const [club, setClub] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/clubs/${clubName}`)
            .then(res => res.json())
            .then(data => {
                if (data.message === 'Club not found') {
                    setError('Club not found');
                } else {
                    setClub(data);
                }
            })
            .catch(() => setError('Error fetching club details'));
    }, [clubName]);

    if (error) return <div>{error}</div>;
    if (!club) return <div>Loading...</div>;

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f4f4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                maxWidth: '800px',
                width: '100%',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                textAlign: 'center'
            }}>
                <h1 style={{ color: '#333', fontSize: '2.5em', marginBottom: '20px' }}>{club.club_name}</h1>
                <p><strong>Mentors:</strong> {club.club_mentors}</p>
                <p><strong>President:</strong> {club.club_president}</p>
                <p><strong>Contact:</strong> {club.contact_number}</p>
                <p><strong>Email:</strong> {club.email_id}</p>
                <p>{club.club_description}</p>
                <a href="/" style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    backgroundColor: '#007bff',
                    color: 'white',
                    borderRadius: '5px',
                    fontSize: '1em'
                }}>Back to home</a>
            </div>
        </div>
    );
};

export default ClubDetail;
