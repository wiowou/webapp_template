import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';
import 'bootstrap'; //imports the javascript from bootstrap
import './index.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
//import React from 'react';

library.add(faSpinner);
dom.watch(); //will set up an object to watch the dom and dynamically replace any i tags with fontawesome svg tags

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