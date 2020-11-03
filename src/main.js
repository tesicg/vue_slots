import Vue from 'vue'
import ParentComponent from './ParentComponent';

new Vue({
  el: '#app',
	render: h => h(ParentComponent)
})
