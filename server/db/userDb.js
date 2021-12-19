const db = require('./mockUserDb.json');


async function randomDelay (min = 500, max = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, Math.random() * (max - min) + min);
  })
}


async function getUser (id) {
  const startTime = new Date().getTime();
  console.log('start', startTime);
  await randomDelay();
  console.log('end', new Date().getTime() - startTime);
  const user = db.users.filter(user => user.id === id + '');
  return user;
}

module.exports = {
  getUser
}