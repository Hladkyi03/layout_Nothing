parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=document.querySelector(".menu"),t=document.querySelector(".header__burger-menu"),c=document.querySelector("html"),s=document.querySelectorAll(".nav__link"),n=document.querySelector(".contact-us__form"),l=document.querySelector(".header__logo");t.addEventListener("click",function(){t.classList.toggle("header__burger-menu--active"),e.classList.toggle("menu--active"),c.classList.toggle("block-scroll")}),s.forEach(function(s){s.addEventListener("click",function(){e.classList.contains("menu--active")&&(t.classList.toggle("header__burger-menu--active"),e.classList.toggle("menu--active"),c.classList.toggle("block-scroll"))})}),n.addEventListener("submit",function(e){e.preventDefault(),n.reset()}),l.addEventListener("click",function(){e.classList.contains("menu--active")&&(t.classList.remove("header__burger-menu--active"),e.classList.remove("menu--active"),c.classList.remove("block-scroll"))});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.efc79213.js.map