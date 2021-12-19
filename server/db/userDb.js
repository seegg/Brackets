const db = require('./mockUserDb.json');


function randomDelay (min, max, callback) {
  try {
    if (min > max) throw 'min value is greater than max value!'
    setTimeout(callback, Math.random() * (max - min) + min);
  } catch (err) {
    console.log(err)
  }
}


async function getUser (id) {
  const user = db.users.filter(user => user.id === id + '');
  await randomDelay(500, 1000);
  return user;
}

export { getUser, };