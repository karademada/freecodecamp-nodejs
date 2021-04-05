// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const {salah, mohamed} = require('./4-names')
const salamAkhy = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')

salamAkhy('yousouf')
salamAkhy(salah)
salamAkhy(mohamed)

console.log(module);