import './hello-world-button.scss'

class HelloWorldButton {
  buttonCssClass = 'hello-world-button';

  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'Hello world';
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello world clicked!';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
    body.appendChild(button);
    button.classList.add(this.buttonCssClass);
  }
}

export default HelloWorldButton;