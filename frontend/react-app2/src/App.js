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
      </header>
      <main>
        <h1>Show Data:</h1>
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
      </main>
    </div>
  );
}

export default App;
