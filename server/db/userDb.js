const db = require('./mockUserDb.json');


// async function randomDelay (min = 100, max = 300) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, Math.random() * (max - min) + min);
//   })
// }


async function getUser (id) {
  return await db.users.filter(user => user.id === id + '');

}

module.exports = {
  getUser
}