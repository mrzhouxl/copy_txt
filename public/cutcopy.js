!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.copy=t():e.copy=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n){var o=void 0,r=document.createElement("textarea");t&&(o=e.search(t)),r.value=o||e,r.setAttribute("readonly",""),r.style.opacity=0,r.style.left="-9999px",r.style.fontSize="12pt",n.appendChild(r),r.select(),console.log(111);var u=n.addEventListener("click",(function(){u||(n.removeChild(r),r=null)}))||!0;try{return document.execCommand("copy")}catch(e){}}function r(e){return e.select(),document.execCommand("copy")}e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=n.target,c=void 0===u?document.body:u;if(-1!=e.indexOf("#")){var i=document.querySelector(e),l=i.innerHTML;return"INPUT"!==i.tagName&&"TEXTAREA"!==i.tagName?o(l,t,c):r(i)}return o(e,t,c)}}])}));