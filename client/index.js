import hello from './hello';

document.addEventListener('DOMContentLoaded', () => {
  const helloBob = hello('Bob');
  document.getElementById('app').appendChild(helloBob);
})

console.log('Hello world');