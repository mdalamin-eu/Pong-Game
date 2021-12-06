var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d")
var width= 640;
var height = 640;
var blocksize = width/8;
var white= 0;
var black= 1;
var board= [
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,white,black,-1,-1,-1],
    [-1,-1,-1,black,white,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1]
];
var turn = 0;
var totalBlack=2;
var totalWhite= 2;
