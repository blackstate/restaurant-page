!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(e,t){t.forEach(t=>{e.appendChild(t)})};var c=function(){const e=document.querySelector("main");function t(){let e=document.createElement("div");e.classList.add("col-md-6","px-0");let t=document.createElement("h1");t.classList.add("display-4","font-italic","home-header"),t.innerHTML="Serving the best grade coffee";let n=document.createElement("p");return n.classList.add("lead","my-3"),n.innerHTML="Started on 2020, Grade A coffee aims to provide the best quality coffee. Grade A is currently the best cafe in Manila noted by experts.",r(e,[t,n]),e}function n(){let e=document.createElement("div");e.classList.add("d-flex","align-items-center");let t=document.createElement("img");return t.classList.add("home-img"),t.src="assets/cafe.png",r(e,[t]),e}return{render:function(){e.appendChild(function(){let e=document.createElement("div");return e.classList.add("jumbotron","p-4","p-md-5","text-white","rounded","bg-dark","d-flex","justify-content-around"),r(e,[t(),n()]),e}())}}}();var d=function(){const e=document.querySelector("main");let t=[];class n{constructor(e,t,n){this.name=e,this.type=t,this.price=n}}function c(){let e=document.createElement("div");return e.classList.add("jumbotron","p-md-1","text-white","rounded","bg-dark","d-flex","justify-content-between","align-items-center"),r(e,[d()]),e}function d(){let e=document.createElement("div");e.classList.add("col-md-1");let t=document.createElement("h1");return t.classList.add("display-5","font-italic","menu-header"),t.innerHTML="menu",e.appendChild(t),e}function a(){let e=document.createElement("table");e.classList.add("table","table-hover");let n=document.createElement("thead");n.classList.add("thead-dark");let r=document.createElement("tr");["drink","type","price"].forEach(e=>{let t=document.createElement("th");t.classList.add("table-h"),t.scope="col",t.innerHTML=e,r.appendChild(t)}),n.appendChild(r);let c=document.createElement("tbody");return t.forEach(e=>{let t=document.createElement("tr");for(let n in e){let r=document.createElement("td");r.innerHTML=e[n],t.appendChild(r)}c.appendChild(t)}),e.appendChild(n),e.appendChild(c),e}return{render:function(){!function(){let e=[["Java Chip Deluxe","Frappe",150],["Mocha Cookie Crumble","Frappe",120],["Double Chocolatey Chip","Frappe",120],["Caffe Americano","Hot",80],["Cappucino","Hot",80],["Espresso","Hot",80],["Dragon Drink","Cold",120],["Blended Strawberry","Cold",120]];for(let r=0;r<e.length;r++)t[r]=new n(e[r][0],e[r][1],e[r][2])}(),r(e,[c(),a()])}}}();var a=function(){const e=document.querySelector("main");let t=[["We are located at the heart of the Philippines","987 Gen. Shin Street Makati City","flag"],["Hotline Number is available weekdays 9AM - 5PM","765-0432","phone"],["Customer Service for your product and service inquiries","help@gradeacoffee.com.ph","customer-service"]];return{render:function(){e.appendChild(function(){let e=document.createElement("div");e.classList.add("jumbotron","p-md-1","text-white","rounded","bg-dark","d-flex","justify-content-between","align-items-center");let t=document.createElement("div");t.classList.add("col-md-1");let n=document.createElement("h1");return n.classList.add("display-5","font-italic","menu-header"),n.innerHTML="contact",t.appendChild(n),e.appendChild(t),e}()),t.forEach(t=>{let n=document.createElement("div");n.classList.add("row","d-flex","justify-content-around","align-items-center");let c=document.createElement("div");c.classList.add("col-md-6");let d=document.createElement("h2");d.innerHTML=t[0];let a=document.createElement("p");a.classList.add("lead"),a.innerHTML=t[1];let o=document.createElement("img");o.classList.add("contact-img"),o.src=`assets/${t[2]}.png`,r(c,[d,a]),r(n,[c,o]),r(e,[n,document.createElement("hr")])})}}}();!function(){const e=document.querySelector("main"),t=document.querySelector("#home"),n=document.querySelector("#menu"),r=document.querySelector("#contact");function o(){e.innerHTML=""}function i(){o(),c.render()}t.addEventListener("click",i),n.addEventListener("click",(function(){o(),d.render()})),r.addEventListener("click",(function(){o(),a.render()})),window.addEventListener("load",i)}()}]);