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


// fancySheet was the name i chose for the var value
//randInt is the 5 pictures it turns to when reloading the website 
function setStyles() {
      var styleNum = randInt(5);
      var fancySheet = document.createElement("link");
      fancySheet.setAttribute("rel", "stylesheet");
      fancySheet.setAttribute("id", "fancySheet");
      fancySheet.setAttribute("href", "na_style_" + styleNum + ".css");

      document.head.appendChild(fancySheet);
}


var figBox = document.createElement("figure");
figBox.setAttribute("id", "styleThumbs");
figBox.setAttribute("name", "figBox");
document.getElementById("box").appendChild(figBox);
//this is looping through all the pictures 
for (var i = 0; i <= 4; i++) {
      var sheetIMG = document.createElement("img");
      sheetIMG.setAttribute("src", "na_small_" + i + ".png");
      sheetIMG.setAttribute("alt", "na_style_" + i + ".css");

      sheetIMG.onclick = function (e) {
            fancySheet.setAttribute("href", e.target.alt);
      }
      figBox.appendChild(sheetIMG);
}
var thumbStyles = document.createElement("style");
document.head.appendChild(thumbStyles);
//this moves all the elements to the bottom of the page and gives the red lines to the pictures 
document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs { \
      position: absolute;\
      left: 0px;\
      bottom: 0px;\
}"
)
document.styleSheets[document.styleSheets.length - 1].insertRule(

      "figure#styleThumbs img { \
       outline: 1px solid black;\
       cursor: pointer;\
       opacity: 0.75;\
           }"
)
document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0;\
       } "
)



function randInt(size) {
      return Math.floor(size * Math.random());
}