import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [showData, setShowData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/shows')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setShowData(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img alt="Logo" />
        </div>
        <h1>No Favorites</h1>
      </header>

      <section className="hero band-photo">
        <h2>Band Members</h2>
        <img alt="Band Members" />
      </section>

      <section className="hero latest-single">
        <h2>Latest Single</h2>
        <div className="spotify-link">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/7cOHOLCyVwxP9yxi0atP9N?utm_source=generator&theme=0"
          width="80%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        </div>
      </section>

      <section className="split-section">
        <div className="left shows">
          <h2>Upcoming Shows</h2>
          <ul>
            {showData.map(show => (
              <li key={show.title}>
                <p>Title: {show.title}</p>
                <p>Date: {show.date}</p>
                <p>Doors Time: {show.doors_time}</p>
                <p>Band Time: {show.band_time}</p>
                <p>Address: {show.address}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="left band-bio">
          <h2>Band Bio</h2>
          <p>We are No Favorites!</p>
        </div>
        <div className="right">
          <img alt="Band or Leader" />
        </div>
      </section>

      <section className="store">
        <h2>Store</h2>
        <div className="products">
          {/* Example products, replace with dynamic data as needed */}
          <div className="product">
            <img alt="Product 1" />
            <h3>Product 1</h3>
            <p>$10.00</p>
          </div>
          <div className="product">
            <img alt="Product 2" />
            <h3>Product 2</h3>
            <p>$15.00</p>
          </div>
          <div className="product">
            <img alt="Product 3" />
            <h3>Product 3</h3>
            <p>$20.00</p>
          </div>
          {/* Add more products as needed */}
        </div>
      </section>

      <section className="pre-footer">
        <div className="left">
          <h2>Booking and Contact</h2>
          <p>Contact details and booking information go here...</p>
        </div>
        <div className="right">
          <h2>Socials</h2>
          <p>Links to your social media profiles go here...</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 No Favorites. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
