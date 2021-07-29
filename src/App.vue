<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <!-- <ol>
        <li v-for="(item, index) in ary" :key="index">{{ item }}</li>
      </ol> -->
      <span>{{ obj.c }}</span>
    </div>
    <!-- <button @click="change">change</button>
    <button @click="changeLast">change last name</button> -->
    <button @click="change1">change1</button>
  </div>
</template>

<script>
// import Vue from 'vue'
/* eslint-disable */
// var res = require('es6-promise')
// var test = require('./_test/test_strict_mode.js')
// var res = require('../node_modules/es6-promise/dist/es6-promise')
// var res = require('./lib/es6-promise/promise-polyfill')
module.exports = {
  name: 'app',
  data() {
    return {
      ary: [0, { name: 'aa' }, 2, 3],
      obj: {
        a: 1
      },
      // firstName: 'Yi',
      // lastName: 'Huang',
      // useless: 0,
      // nested: {
      //   a: {
      //     b: 1
      //   }
      // }
    }
  },
  mounted() {
    // console.log(this.res)
    // console.log('res', res)
    console.log('test', test)
    // let promise = new Promise(function() {})
    // console.log(promise)
  },
  computed: {
    // name() {
    //   if (this.useless > 0) {
    //     return this.firstName + ',' + this.lastName
    //   }
    //   return 'please click change'
    // }
  },
  watch: {
    // useless(newVal) {
    //   console.log('useless:', newVal)
    // },
    // name: {
    //   immediate: true,
    //   handler(newVal) {
    //     console.log('name:', newVal)
    //   }
    // },
    // nested: {
    //   deep: true,
    //   handler(newVal) {
    //     console.log('nested:', newVal.a.b)
    //   }
    // }
  },
  methods: {
    change1() {
      // Object.assign(this.obj, { b:2, c:3 })
      // this.obj = Object.assign({}, this.obj, { b:2, c:3 })
      this.obj = {
        ...this.obj,
        b: 2,
        c: 3
      }
      // this.obj.c = 33
      // Vue.set(this.$data, 'obj', {
      //   age: 22
      // })
      // Vue.set(this.ary, 1, {
      //   name: 'bb'
      // })
      // this.ary[1] = {
      //   name: 'bb'
      // }
    }
    // change() {
    //   this.useless++
    //   this.nested.a.b = 2
    // },
    // changeLast() {
    //   this.lastName = 'Zhang'
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
