!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["tapcart-dashboard-components"]=e():r["tapcart-dashboard-components"]=e()}(window,(function(){return function(r){var e={};function a(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=r,a.c=e,a.d=function(r,e,t){a.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},a.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,e){if(1&e&&(r=a(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)a.d(t,o,function(e){return r[e]}.bind(null,o));return t},a.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(e,"a",e),e},a.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},a.p="/",a(a.s=18)}({15:function(r,e,a){"use strict";var t,o,i,n;function l(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}Object.defineProperty(e,"__esModule",{value:!0}),e.marginLeft=e.marginRight=e.gradientOverlay=e.border=e.circular=e.inputBorder=e.borderRadius=e.margin=e.boxShadow=e.sofia=e.colors=void 0;var b={blue:"#373aaf",blue10:"#f6faff",blue15:"#CBCFDD",blue25:"#DBE1EF",blue50:"#BAC4E0",blue75:"#738EDA",lightpurple:"#7574EF",darkBlue:"#02018C",offwhite:"#FCFEFF",bgGray:"#F3F3F7",lightestGray:"#fcfcfc",lightestGrayBorder:"#f4f4f4",gray:"#BDBDBD",gray10:"#F8F7F8",gray25:"#F0F2F5",gray50:"#e9e9e9",gray75:"#D8D8D8",darkgray:"#8A888A",grayText:"#a1a8b9",coolBgGray:"#f9fbfe",green:"#1BDFBA",bluegray:"#a1a8b9",black:"#000000",highlightblue:"#E3EFFD",yellow:"#F6B343",red:"#D94747",gold:"#d5a83e"};e.colors=b;e.sofia={sofiaSemiBold:{fontFamily:"SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",fontWeight:600,fontStyle:"normal"},sofiaMedium:{fontFamily:"SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",fontWeight:500,fontStyle:"normal"},sofiaRegular:{fontFamily:"SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",fontWeight:300,fontStyle:"normal"},sofiaLight:{fontFamily:"SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",fontWeight:200,fontStyle:"normal"},sofiaItalic:{fontFamily:"SofiaPro, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif",fontWeight:"normal",fontStyle:"italic"}};e.boxShadow={small:"0 2px 5px 0 rgba(0, 0, 0, 0.05),\n  0 2px 10px 0 rgba(0, 0, 0, 0.025),\n  0 2px 20px 0 rgba(0, 0, 0, 0.025)",medium:"0 2px 10px 0 rgba(0, 0, 0, 0.05),\n  0 2px 20px 0 rgba(0, 0, 0, 0.025),\n  0 2px 30px 0 rgba(0, 0, 0, 0.025)",large:"0 2px 30px 0 rgba(0, 0, 0, 0.05),\n  0 2px 50px 0 rgba(0, 0, 0, 0.025),\n  0 2px 70px 0 rgba(0, 0, 0, 0.025)"};e.margin={margin:"30px auto"};var c={borderRadius:"4px"};e.borderRadius=c;var d={borderRadius:c.borderRadius,backgroundColor:b.offwhite,borderColor:b.bluegray,bordeRadius:"3px",borderStyle:"solid",borderWidth:"1px",outline:"0px !important"};e.inputBorder=d;e.circular={circularBook:{fontFamily:"CircularStd-Book, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"},circularBold:{fontFamily:"CircularStd-Bold, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"},circularMedium:{fontFamily:"CircularStd-Medium, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"},circularBlack:{fontFamily:"CircularStd-Black, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"},circularBookItalic:{fontFamily:"CircularStd-BookItalic, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif"}};var g={lightblue:{borderRadius:"2px",border:"1px solid ".concat(b.blue25)},lightgray:{borderRadius:"3px",border:"1px solid ".concat(b.gray25)},divider:{borderBottom:"1px solid ".concat(b.gray25)},dotted:{border:"1px dashed ".concat(b.blue25)}};e.border=g;var s={leftToRight:(t={background:"-moz-linear-gradient(left,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)"},l(t,"background","-webkit-linear-gradient(left,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"),l(t,"background","linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"),t),rightToLeft:(o={background:"-moz-linear-gradient(left,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)"},l(o,"background","-webkit-linear-gradient(left,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"),l(o,"background","linear-gradient(to right,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"),o),bottomToTop:(i={background:"-moz-linear-gradient(top,  rgba(238,238,238,0) 0%, rgba(255,255,255,1) 100%)"},l(i,"background","-webkit-linear-gradient(top,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"),l(i,"background","linear-gradient(to bottom,  rgba(238,238,238,0) 0%,rgba(255,255,255,1) 100%)"),i),topToBottom:(n={background:" -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(238,238,238,0) 100%)"},l(n,"background","-webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"),l(n,"background","linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(238,238,238,0) 100%)"),n)};e.gradientOverlay=s;e.marginRight={marginRight:"10px"};e.marginLeft={marginLeft:"10px"}},18:function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.gradient=e.offWhite=e.scrollingNav=e.topNav=e.neutral=e.invert=e.base=void 0;var t=a(15),o={fg:t.colors.blue,bg:"#FFFFFF",header:t.colors.black,subtext:t.colors.black,body:t.colors.blue};e.base=o;e.invert=function(r){var e=r.fg;return{fg:r.bg,bg:e,header:"#FFFFFF",subtext:"#FFFFFF",body:"#FFFFFF"}};e.offWhite=function(r){return{fg:r.fg,header:r.header,subtext:r.subtext,body:r.body,bg:t.colors.offwhite}};var i={fg:t.colors.black,bg:"#F3F3F7",header:t.colors.black,subtext:t.colors.black,body:t.colors.blue};e.neutral=i;e.gradient=function(r,e){return{fg:t.colors.black,bg:"linear-gradient(184deg, ".concat(r,", ").concat(e,")"),header:t.colors.black,subtext:t.colors.black,body:t.colors.blue}};var n={background:"transparent",fg:t.colors.white};e.topNav=n;var l={background:"white",fg:t.colors.blue};e.scrollingNav=l}})}));