const db = require('./mockUserDb.json');

async function getUser (id) {
  return await db.users.filter(user => user.id === id.toString());

}

module.exports = {
  getUser
}