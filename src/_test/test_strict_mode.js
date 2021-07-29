/* eslint-disable */
debugger
// module.exports = {
//   bb: 22
// }
function func () {
  return this
}
// exports.func = function () {
//   return this
// }
module.exports = {
  bb: 22
}
console.log('func this', func())
console.log('exports.func this', exports.func())

// (function (global, factory) {
//   console.log('global', global)
//   global.Test = factory()
// })(this, function () {
//   'use strict';
//   return {}
// })
console.log('public', this)
console.log('exports', exports)
console.log('module.exports', module.exports)
