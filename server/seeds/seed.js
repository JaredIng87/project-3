const db = require('../config/connection');
const { Team } = require('./models');
const teamSeeds = require('./teamSeeds.json');
const { User } = require('./models');
const userSeeds = require('./UserSeeds.json')

db.once('open', async () => {
  await Team.deleteMany({});
  await Team.create(teamSeeds);

  await User.deleteMany({});
  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});