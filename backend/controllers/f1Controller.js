const axios = require('axios');

// 1. Get all races (fallback example — optional)
const getAllRaces = async (req, res) => {
  try {
    console.log('Fetching all races from f1api.dev...');
    const response = await axios.get('https://f1api.dev/api/2024');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching races:', error.message);
    res.status(500).json({ error: 'Failed to fetch races from F1 API' });
  }
};

// 2. Get available seasons
const getSeasons = async (req, res) => {
  try {
    const response = await axios.get(`https://f1api.dev/api/seasons`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching seasons:', error.message);
    res.status(500).json({ error: 'Failed to fetch seasons' });
  }
};

// 3. Get current drivers
const getCurrentDrivers = async (req, res) => {
  try {
    const response = await axios.get(`https://f1api.dev/api/current/drivers`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching current drivers:', error.message);
    res.status(500).json({ error: 'Failed to fetch current drivers' });
  }
};

// 4. Get current teams
const getCurrentTeams = async (req, res) => {
  try {
    const response = await axios.get(`https://f1api.dev/api/current/teams`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching current teams:', error.message);
    res.status(500).json({ error: 'Failed to fetch current teams' });
  }
};

// 5. Get driver standings for a given year
const getDriverStandings = async (req, res) => {
  const { year } = req.params;
  try {
    const response = await axios.get(`https://f1api.dev/api/${year}/drivers-championship`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching driver standings:', error.message);
    res.status(500).json({ error: 'Failed to fetch driver standings' });
  }
};

// 6. Get race by year and round
const getRaceByYearAndRound = async (req, res) => {
  const { year, round } = req.params;
  try {
    const response = await axios.get(`https://f1api.dev/api/${year}/${round}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching race:', error.message);
    res.status(500).json({ error: 'Failed to fetch race data' });
  }
};


// 7. Get constructor standings for a given year
const getConstructorStandings = async (req, res) => {
  const { year } = req.params;
  try {
    const response = await axios.get(`https://f1api.dev/api/${year}/constructors-championship`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching constructor standings:', error.message);
    res.status(500).json({ error: 'Failed to fetch constructor standings' });
  }
};

// 8. Get all drivers for a given year
const getDriversByYear = async (req, res) => {
  const { year } = req.params;
  try {
    const response = await axios.get(`https://f1api.dev/api/${year}/drivers`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching drivers by year:', error.message);
    res.status(500).json({ error: 'Failed to fetch drivers by year' });
  }
};

// 9. Get all teams for a given year
const getTeamsByYear = async (req, res) => {
  const { year } = req.params;
  try {
    const response = await axios.get(`https://f1api.dev/api/${year}/teams`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching teams by year:', error.message);
    res.status(500).json({ error: 'Failed to fetch teams by year' });
  }
};


// module.exports = {
//   getAllRaces,
//   getSeasons,
//   getCurrentDrivers,
//   getCurrentTeams,
//   getDriverStandings,
//   getRaceByYearAndRound

  
// };

module.exports = {
  getAllRaces,
  getSeasons,
  getCurrentDrivers,
  getCurrentTeams,
  getDriverStandings,
  getRaceByYearAndRound,
  getConstructorStandings,
  getDriversByYear,
  getTeamsByYear
};

