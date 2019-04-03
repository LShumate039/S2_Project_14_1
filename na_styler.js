"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: 
   Date:   

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.addEventListener("load", setStyles);

var styleNum = randInt(5);

var fancySheet = document.createElement("link")
fancySheet.setAttribute("rel", "stylesheet");
fancySheet.setAttribute("id", "fancySheet");
fancySheet.setAttribute("href", "na_style_num.css");

var figBox = document.createElement("figure");
figBox.setAttribute("id", "styleThumbs")
figBox.appendChild()

function randInt(size) {
      return Math.floor(size * Math.random());
}