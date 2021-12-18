function sayHello(name: string): HTMLDivElement {
  const element = document.createElement('div');
  element.innerHTML = `Hello, ${name}!`;
  return element;
}

export default sayHello;