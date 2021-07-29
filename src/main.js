import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.component('HelloWorld', function (resolve, reject) {
//   require(['./components/HelloWorld'], function (res) {
//     resolve(res)
//   })
// })
// Vue.component('app', App)

// let childComp = {
//   template: '<div>{{msg}}</div>',
//   created() {
//     console.log('child created')
//   },
//   mounted() {
//     console.log('child mounted')
//   },
//   data() {
//     return {
//       msg: 'Hello Vue'
//     }
//   }
// }

// Vue.mixin({
//   created() {
//     console.log('parent created')
//   }
// })
/* eslint-disable */
let app = new Vue({
  el: '#app',
  render(h) {
    return h(App)
  }
  // template: '<app></app>'
  // render: h => h(childComp),
})
