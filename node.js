var express = require('express');
var app = express();
var needle = require('needle');
var fs = require('fs');
var url = '192.168.1.188:6688';
var projectUrl =_dirname + '\\static'; //dirname   

/*
 *
 * */
//num 是随机的一个数
var num = Math.random()*10;
console.log(num);

switch( num ){
    case 1 :
        console.log('我是'+num);
        break;
    case 2 :
        console.log('我是'+num);
        break;
    case 3 :
        console.log('我是'+num);
        break;
    case 4 :
        console.log('我是'+num);
        break;
    case 5 :
        console.log('我是'+num);
        break;
    case 6 :
        console.log('我是'+num);
        break;
    case 7 :
        console.log('我是'+num);
        break;
    case 8 :
        console.log('我是'+num);
        break;
    case 9 :
        console.log('我是'+num);
        break;
    case 10 :
        console.log('我是'+num);
        break;
    default :
        console.log('我是'+num);
}

function Person(name){
    this.name = name;
}

var me = new Person('xiexie');



