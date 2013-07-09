#!/usr/bin/env node

// Test primary
var prime = function(n) {
    var i = 1;
    var answ = 1;
    for(i = 2; i <= Math.sqrt(n); i++) {
        if(i * Math.floor(n / i) == n) { answ = 0; }
    }
    return answ;
};

// Find first K prime numbers via basic while loop
var firstkprime = function(k) {
    var i = 2;
    var arr = [];
    var n = 0;
    while(n < k) {
        if(prime(i) == 1) {
            arr.push(i);
            n++;
        }
        i++;
    }
    return arr;
};

// Print to console
var fmt = function(arr) {
    return arr.join(",");
};

var k = 100;

var fs = require('fs');
var outfile = "hello.txt";
var out = fmt(firstkprime(k)) + "\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

// console.log("firstkprime(" + k + ")"); console.log(fmt(firstkprime(k)));
