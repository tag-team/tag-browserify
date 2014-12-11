'use strict';

class Sort{
    sort(){
        privateSortFunction.call(this);
    }
}

function privateSortFunction(){
    var grid = this;
    console.log("sort grid", grid.getAttribute("name"));
}

module.exports = Sort.prototype;