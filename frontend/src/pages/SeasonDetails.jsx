import React from 'react';
import { useParams } from 'react-router-dom';

const SeasonDetails = () => {
  const { year } = useParams(); // Grab the year from URL

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📅 Season {year}</h1>
      <p>Here we’ll show race results, standings, and maybe AI alternate realities.</p>
    </div>
  );
};

export default SeasonDetails;
