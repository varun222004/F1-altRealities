const express = require('express');
const router = express.Router();

const {
  getAllRaces,
  getSeasons,
  getCurrentDrivers,
  getCurrentTeams,
  getDriverStandings,
  getRaceByYearAndRound,
  getConstructorStandings,    // ✅ Add this
  getDriversByYear,           // ✅ Add this
  getTeamsByYear              // ✅ Add this
} = require('../controllers/f1Controller');

// Existing routes
router.get('/seasons', getSeasons);
router.get('/drivers/current', getCurrentDrivers);
router.get('/teams/current', getCurrentTeams);
router.get('/standings/drivers/:year', getDriverStandings);
router.get('/race/:year/:round', getRaceByYearAndRound);

// ✅ New routes
router.get('/standings/constructors/:year', getConstructorStandings);
router.get('/drivers/:year', getDriversByYear);
router.get('/teams/:year', getTeamsByYear);

module.exports = router;
