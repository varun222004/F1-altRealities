import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // ⬅ Added
import { getSeasons } from '../api/f1';

const Home = () => {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeasons = async () => {
      console.log('📡 Fetching seasons...');
      try {
        const res = await getSeasons();
        console.log('✅ Seasons response:', res.data);

        const seasonList = res.data?.championships?.map((item) => ({
          year: item.year,
          name: item.championshipName,
          wiki: item.url
        }));

        setSeasons(seasonList || []);
      } catch (err) {
        console.error('❌ Failed to fetch seasons:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSeasons();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🏁 Welcome to F1 Alternate Realities</h1>
      <h2>Available Seasons:</h2>

      {loading ? (
        <p>⏳ Loading seasons...</p>
      ) : seasons.length === 0 ? (
        <p>⚠️ No seasons found.</p>
      ) : (
        <ul>
          {seasons.map((season, index) => (
            <li key={index}>
              <Link to={`/season/${season.year}`}>
                {season.year} — {season.name}
              </Link>
              &nbsp;|&nbsp;
              <a href={season.wiki} target="_blank" rel="noopener noreferrer">
                Wikipedia
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
