import React, { useState } from 'react';

function TestScreen() {
    const [recommendations, setRecommendations] = useState([]);
    const [songId, setSongId] = useState('');
    const [numRecs, setNumRecs] = useState(5); // Default to 5 recommendations, adjust as needed
  
    const fetchRecommendations = async () => {
      // Ensure you replace `http://localhost:8000` with your actual backend server URL
      const url = `http://localhost:8000/recommendations/${songId}?num_recs=${numRecs}`;
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecommendations(data.recommended_songs);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={songId}
          onChange={(e) => setSongId(e.target.value)}
          placeholder="Enter Song ID"
        />
        <input
          type="number"
          value={numRecs}
          onChange={(e) => setNumRecs(e.target.value)}
          placeholder="Number of Recommendations"
        />
        <button onClick={fetchRecommendations}>Get Recommendations</button>
        {recommendations.length > 0 && (
          <ul>
            {recommendations.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default TestScreen;