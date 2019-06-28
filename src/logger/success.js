'use strict'

const color = require('colors');


function success(text) {
    return color.bgGreen("[success]" + text);
}

module.exports = success