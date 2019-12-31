import Vue from 'vue';
import App from './components/App.vue';
import 'bootstrap'; //imports the javascript from bootstrap
import './index.scss';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
export const eventBus = new Vue();

new Vue({
	el: '#app',
	render: h => h(App)
});
