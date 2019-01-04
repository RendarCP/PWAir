import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js';
import store from './store/index.js';
// import axios from 'axios';

// Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router: router,
  sotre: store,
  // methods:{
  //   fetchData(){
  //     this.$axios.get();
  //   }
  // },
  render: h => h(App),
})
