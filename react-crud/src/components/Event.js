import { useState } from 'react';
import axios from 'axios';

function Events() {
  const [event, setEvent] = useState({
    name: '',
    description: '',
    image: null,
  });

  const [message, setMessage] = useState('');

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  // Handle file input change for image
  const handleFileChange = (e) => {
    setEvent({ ...event, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', event.name);
    formData.append('description', event.description);
    formData.append('image', event.image); // Image from file input

    // Post the form data to the server
    axios.post('http://localhost:5000/upload-event', formData)
      .then((response) => {
        setMessage(response.data.message); // Set the success message
      })
      .catch((error) => {
        console.error('Error uploading event:', error);
        setMessage('Error uploading event. Please try again.');
      });
  };

  return (
    <div className="container">
      <h2>Add Upcoming Event</h2>
      
      {/* Display success or error message */}
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            name="name"
            value={event.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Event Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Event Description</label>
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Event Description"
            required
          />
        </div>

        <div className="form-group">
          <label>Event Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="form-control-file"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Events;
