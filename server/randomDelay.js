function randomDelay (min = 100, max = 500) {
  return function (req, res, next) {
    const start = new Date().getTime();
    new Promise((resolve, reject) => {
      setTimeout(resolve, Math.random() * (max - min) + min);
    }).then(() => {
      console.log('delayed by', new Date().getTime() - start, 'ms');
      next();
    }).catch(err => console.error(err));
  }
}

module.exports = {
  randomDelay
}