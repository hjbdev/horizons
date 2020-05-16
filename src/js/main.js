import Vue from 'vue';
import Horizons from './index'

Vue.use(Horizons);

const app = new Vue({
    el: '#app'
});

window.app = app;