'use strict';

class Base extends HTMLTableElement{
    createdCallback() {
        console.log("tag-grid basic initialized");
    }
}

module.exports = Base.prototype;