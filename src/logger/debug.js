'use strict'

const color = require('colors');


function debug(text) {
    return color.blue('[debug]' + text);
}

module.exports = debug