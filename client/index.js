document.addEventListener('DOMContentLoaded', () => {
  const element = document.createElement('div');
  element.innerHTML = "HELLO WORLD!";
  document.getElementById('app').appendChild(element);
})

console.log('Hello world');