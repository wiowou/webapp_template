import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';
//import React from 'react';

const heading = new Heading();
heading.render('hello world');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
heading.render('kiwi');
const kiwiImage = new KiwiImage();
kiwiImage.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else if (process.env.NODE_ENV == 'development') {
  console.log('Development mode');
}

//helloWorldButton.methodThatDoesntExist();