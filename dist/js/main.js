!function(n){var c={};function l(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=n,l.c=c,l.d=function(n,c,e){l.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:e})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,c){if(1&c&&(n=l(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var t in n)l.d(e,t,function(c){return n[c]}.bind(null,t));return e},l.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(c,"a",c),c},l.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},l.p="",l(l.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n\r\nconst button = document.querySelector('.header__button--js');\r\nconsole.log(button)\r\n\r\nbutton.addEventListener('click', (e) => {\r\n  const mainHeader = document.querySelector('.mainHeader__title--js');\r\n  mainHeader.innerHTML = 'JS is cool, cause you click, click';\r\n  mainHeader.classList.toggle('mainHeader--red');\r\n  alert('Hello, check the header! I used JS here');\r\n\r\n});\r\n\r\nconst navigationSwitcher = document.querySelector('.navigation__switcher--js')\r\n\r\nnavigationSwitcher.addEventListener('click', (e) => {\r\n  const navigationList = document.querySelector('.navigation__list--js');\r\n  navigationList.classList.toggle('navigation__list--visible');\r\n});\r\n\r\n///////////////////////DEATH STAR TRAINING\r\n\r\nconst deathStar = {\r\n  diameter: 120000,\r\n  fire: (target) => {\r\n    console.log(`${target} destroyed 💥`)\r\n  },\r\n  isOperating: true,\r\n  levels: 357,\r\n  name: 'Death Star',\r\n  population: 10000,\r\n}\r\n\r\n// const age = 34;\r\n// const name = 'Jędrzej';\r\n// const diary = document.querySelector('.diary__header--js');\r\n// diary.innerHTML = `Nazywam się ${name} i mam ${age} lata`;\r\n\r\n// function handleClick(){\r\n//     console.log('działa')\r\n// }\r\n\r\n// button.addEventListener('click', (e) =>{\r\n//     console.log(e);\r\n// console.log('that is an arrow function')\r\n// });\r\n\r\n//////////////////////////////Changing the header when click\r\n// button.addEventListener('click', (e) => {\r\n//     const mainHeader = document.querySelector('.mainHeader__title--js');\r\n//     mainHeader.innerHTML = 'JS is cool, cause you click, click';\r\n//     alert('Hello, check the header! I used JS here');\r\n// });\r\n\r\n// if (age >= 35) {\r\n//     console.log(\"trzydzieści pięć lub mniej\")\r\n// }\r\n// else if (age <= 35 && age >= 30) {\r\n//     console.log('Między 30 a 35')\r\n// }\r\n// else {\r\n//     console.log('nie trzydzieści pięć')\r\n// };\r\n\r\n// switch (age) {\r\n//     case 30:\r\n//         console.log('Masz 30 lat');\r\n\r\n//         break;\r\n//     case 20:\r\n//         console.log('Masz 20 lat');\r\n//         break;\r\n//     default:\r\n//         console.log(`Masz ${age} lat`)\r\n// };\r\n\r\n// let oldIndicator;\r\n// if (age > 70) {\r\n//     oldIndicator = 'yes';\r\n// } else {\r\n//     oldIndicator = 'no';\r\n// }\r\n\r\n// // the same as above can be written below\r\n// const amIOld = (age > 70) ? 'yes' : 'no';\r\n// console.log(amIOld);\r\n\r\n\r\n// alert('Elo zią!');\r\n// console.log('Gierary hirr');\r\n\r\n\r\n\r\n// console.log(name)\r\n// console.log(age);\r\n\r\n// console.log(`Nazywam się ${name} i mam ${age} lata`);\r\n\r\n\r\n// FUNCTIONS - REPETITON\r\n\r\n// function calculate(x) {\r\n//     x = x + 3;\r\n//     console.log(x);\r\n//     return x * 7;\r\n// }\r\n\r\n// console.log(calculate(2));\r\n// const myCalculation = calculate(4);\r\n// console.log(myCalculation)\r\n\r\n\r\n// // Fat Arrow function\r\n\r\n// const calculateFat = x => (x + 3) * 7;\r\n\r\n// console.log(\"parametr to 2 a wynik to \" + calculateFat(2));\r\n\r\n// const welcome = (name, age) => {\r\n//     console.log(`Hej! Mam na imię ${name} i mam ${age} lat`);\r\n// }\r\n\r\n// welcome('Jędrzej', 34);\r\n\r\n// console.log(document.cookie);\r\n// document.cookie = \"testoweCiastko = wartosć\";\r\n// console.log(document.cookie);\r\n\r\n// const person = {\r\n//   name: \"jedrzej\",\r\n//   age: 34,\r\n//   occupation: \"podcaster\" \r\n// }\r\n\r\n// const jsonPerson = JSON.stringify(person);\r\n\r\n// console.log(jsonPerson);\r\n\r\n\r\n// localStorage.setItem('person', jsonPerson);\r\n\r\n// const personStringify = localStorage.getItem('person');\r\n\r\n// const newPerson = JSON.parse(personStringify);\r\n\r\n// console.log(newPerson);\r\n\r\n// //localStorage.removeItem('person');\r\n\r\nconst focusInput = document.querySelector('.focus--js');\r\n\r\nif(localStorage.getItem('focusInput')){\r\n  focusInput.value = localStorage.getItem('focusInput');\r\n}\r\n\r\nfocusInput.addEventListener('keyup',(e) =>{\r\n  localStorage.setItem('focusInput', e.target.value);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7OztBQUk3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxLQUFLLFNBQVMsSUFBSTs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLElBQUk7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQSw4QkFBOEIsS0FBSyxTQUFTLElBQUk7OztBQUdoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUMsS0FBSyxTQUFTLElBQUk7QUFDekQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZGF2ZyB9IGZyb20gXCJvc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXR0b24tLWpzJyk7XHJcbmNvbnNvbGUubG9nKGJ1dHRvbilcclxuXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluSGVhZGVyX190aXRsZS0tanMnKTtcclxuICBtYWluSGVhZGVyLmlubmVySFRNTCA9ICdKUyBpcyBjb29sLCBjYXVzZSB5b3UgY2xpY2ssIGNsaWNrJztcclxuICBtYWluSGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoJ21haW5IZWFkZXItLXJlZCcpO1xyXG4gIGFsZXJ0KCdIZWxsbywgY2hlY2sgdGhlIGhlYWRlciEgSSB1c2VkIEpTIGhlcmUnKTtcclxuXHJcbn0pO1xyXG5cclxuY29uc3QgbmF2aWdhdGlvblN3aXRjaGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX3N3aXRjaGVyLS1qcycpXHJcblxyXG5uYXZpZ2F0aW9uU3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IG5hdmlnYXRpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QtLWpzJyk7XHJcbiAgbmF2aWdhdGlvbkxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2aWdhdGlvbl9fbGlzdC0tdmlzaWJsZScpO1xyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vREVBVEggU1RBUiBUUkFJTklOR1xyXG5cclxuY29uc3QgZGVhdGhTdGFyID0ge1xyXG4gIGRpYW1ldGVyOiAxMjAwMDAsXHJcbiAgZmlyZTogKHRhcmdldCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYCR7dGFyZ2V0fSBkZXN0cm95ZWQg8J+SpWApXHJcbiAgfSxcclxuICBpc09wZXJhdGluZzogdHJ1ZSxcclxuICBsZXZlbHM6IDM1NyxcclxuICBuYW1lOiAnRGVhdGggU3RhcicsXHJcbiAgcG9wdWxhdGlvbjogMTAwMDAsXHJcbn1cclxuXHJcbi8vIGNvbnN0IGFnZSA9IDM0O1xyXG4vLyBjb25zdCBuYW1lID0gJ0rEmWRyemVqJztcclxuLy8gY29uc3QgZGlhcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhcnlfX2hlYWRlci0tanMnKTtcclxuLy8gZGlhcnkuaW5uZXJIVE1MID0gYE5henl3YW0gc2nEmSAke25hbWV9IGkgbWFtICR7YWdlfSBsYXRhYDtcclxuXHJcbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZHppYcWCYScpXHJcbi8vIH1cclxuXHJcbi8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuLy8gICAgIGNvbnNvbGUubG9nKGUpO1xyXG4vLyBjb25zb2xlLmxvZygndGhhdCBpcyBhbiBhcnJvdyBmdW5jdGlvbicpXHJcbi8vIH0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vQ2hhbmdpbmcgdGhlIGhlYWRlciB3aGVuIGNsaWNrXHJcbi8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5IZWFkZXJfX3RpdGxlLS1qcycpO1xyXG4vLyAgICAgbWFpbkhlYWRlci5pbm5lckhUTUwgPSAnSlMgaXMgY29vbCwgY2F1c2UgeW91IGNsaWNrLCBjbGljayc7XHJcbi8vICAgICBhbGVydCgnSGVsbG8sIGNoZWNrIHRoZSBoZWFkZXIhIEkgdXNlZCBKUyBoZXJlJyk7XHJcbi8vIH0pO1xyXG5cclxuLy8gaWYgKGFnZSA+PSAzNSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJ0cnp5ZHppZcWbY2kgcGnEmcSHIGx1YiBtbmllalwiKVxyXG4vLyB9XHJcbi8vIGVsc2UgaWYgKGFnZSA8PSAzNSAmJiBhZ2UgPj0gMzApIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdNacSZZHp5IDMwIGEgMzUnKVxyXG4vLyB9XHJcbi8vIGVsc2Uge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ25pZSB0cnp5ZHppZcWbY2kgcGnEmcSHJylcclxuLy8gfTtcclxuXHJcbi8vIHN3aXRjaCAoYWdlKSB7XHJcbi8vICAgICBjYXNlIDMwOlxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdNYXN6IDMwIGxhdCcpO1xyXG5cclxuLy8gICAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgMjA6XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ01hc3ogMjAgbGF0Jyk7XHJcbi8vICAgICAgICAgYnJlYWs7XHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBNYXN6ICR7YWdlfSBsYXRgKVxyXG4vLyB9O1xyXG5cclxuLy8gbGV0IG9sZEluZGljYXRvcjtcclxuLy8gaWYgKGFnZSA+IDcwKSB7XHJcbi8vICAgICBvbGRJbmRpY2F0b3IgPSAneWVzJztcclxuLy8gfSBlbHNlIHtcclxuLy8gICAgIG9sZEluZGljYXRvciA9ICdubyc7XHJcbi8vIH1cclxuXHJcbi8vIC8vIHRoZSBzYW1lIGFzIGFib3ZlIGNhbiBiZSB3cml0dGVuIGJlbG93XHJcbi8vIGNvbnN0IGFtSU9sZCA9IChhZ2UgPiA3MCkgPyAneWVzJyA6ICdubyc7XHJcbi8vIGNvbnNvbGUubG9nKGFtSU9sZCk7XHJcblxyXG5cclxuLy8gYWxlcnQoJ0VsbyB6acSFIScpO1xyXG4vLyBjb25zb2xlLmxvZygnR2llcmFyeSBoaXJyJyk7XHJcblxyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKG5hbWUpXHJcbi8vIGNvbnNvbGUubG9nKGFnZSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhgTmF6eXdhbSBzacSZICR7bmFtZX0gaSBtYW0gJHthZ2V9IGxhdGFgKTtcclxuXHJcblxyXG4vLyBGVU5DVElPTlMgLSBSRVBFVElUT05cclxuXHJcbi8vIGZ1bmN0aW9uIGNhbGN1bGF0ZSh4KSB7XHJcbi8vICAgICB4ID0geCArIDM7XHJcbi8vICAgICBjb25zb2xlLmxvZyh4KTtcclxuLy8gICAgIHJldHVybiB4ICogNztcclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2coY2FsY3VsYXRlKDIpKTtcclxuLy8gY29uc3QgbXlDYWxjdWxhdGlvbiA9IGNhbGN1bGF0ZSg0KTtcclxuLy8gY29uc29sZS5sb2cobXlDYWxjdWxhdGlvbilcclxuXHJcblxyXG4vLyAvLyBGYXQgQXJyb3cgZnVuY3Rpb25cclxuXHJcbi8vIGNvbnN0IGNhbGN1bGF0ZUZhdCA9IHggPT4gKHggKyAzKSAqIDc7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhcInBhcmFtZXRyIHRvIDIgYSB3eW5payB0byBcIiArIGNhbGN1bGF0ZUZhdCgyKSk7XHJcblxyXG4vLyBjb25zdCB3ZWxjb21lID0gKG5hbWUsIGFnZSkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coYEhlaiEgTWFtIG5hIGltacSZICR7bmFtZX0gaSBtYW0gJHthZ2V9IGxhdGApO1xyXG4vLyB9XHJcblxyXG4vLyB3ZWxjb21lKCdKxJlkcnplaicsIDM0KTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmNvb2tpZSk7XHJcbi8vIGRvY3VtZW50LmNvb2tpZSA9IFwidGVzdG93ZUNpYXN0a28gPSB3YXJ0b3PEh1wiO1xyXG4vLyBjb25zb2xlLmxvZyhkb2N1bWVudC5jb29raWUpO1xyXG5cclxuLy8gY29uc3QgcGVyc29uID0ge1xyXG4vLyAgIG5hbWU6IFwiamVkcnplalwiLFxyXG4vLyAgIGFnZTogMzQsXHJcbi8vICAgb2NjdXBhdGlvbjogXCJwb2RjYXN0ZXJcIiBcclxuLy8gfVxyXG5cclxuLy8gY29uc3QganNvblBlcnNvbiA9IEpTT04uc3RyaW5naWZ5KHBlcnNvbik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhqc29uUGVyc29uKTtcclxuXHJcblxyXG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGVyc29uJywganNvblBlcnNvbik7XHJcblxyXG4vLyBjb25zdCBwZXJzb25TdHJpbmdpZnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc29uJyk7XHJcblxyXG4vLyBjb25zdCBuZXdQZXJzb24gPSBKU09OLnBhcnNlKHBlcnNvblN0cmluZ2lmeSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhuZXdQZXJzb24pO1xyXG5cclxuLy8gLy9sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncGVyc29uJyk7XHJcblxyXG5jb25zdCBmb2N1c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvY3VzLS1qcycpO1xyXG5cclxuaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvY3VzSW5wdXQnKSl7XHJcbiAgZm9jdXNJbnB1dC52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2N1c0lucHV0Jyk7XHJcbn1cclxuXHJcbmZvY3VzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLChlKSA9PntcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9jdXNJbnB1dCcsIGUudGFyZ2V0LnZhbHVlKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,exports){eval("exports.endianness = function () { return 'LE' };\n\nexports.hostname = function () {\n    if (typeof location !== 'undefined') {\n        return location.hostname\n    }\n    else return '';\n};\n\nexports.loadavg = function () { return [] };\n\nexports.uptime = function () { return 0 };\n\nexports.freemem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.totalmem = function () {\n    return Number.MAX_VALUE;\n};\n\nexports.cpus = function () { return [] };\n\nexports.type = function () { return 'Browser' };\n\nexports.release = function () {\n    if (typeof navigator !== 'undefined') {\n        return navigator.appVersion;\n    }\n    return '';\n};\n\nexports.networkInterfaces\n= exports.getNetworkInterfaces\n= function () { return {} };\n\nexports.arch = function () { return 'javascript' };\n\nexports.platform = function () { return 'browser' };\n\nexports.tmpdir = exports.tmpDir = function () {\n    return '/tmp';\n};\n\nexports.EOL = '\\n';\n\nexports.homedir = function () {\n\treturn '/'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzPzNjNDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQiw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxVQUFVOztBQUV6Qiw0QkFBNEI7O0FBRTVCLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5lbmRpYW5uZXNzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0xFJyB9O1xuXG5leHBvcnRzLmhvc3RuYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZVxuICAgIH1cbiAgICBlbHNlIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMubG9hZGF2ZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudXB0aW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gMCB9O1xuXG5leHBvcnRzLmZyZWVtZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG59O1xuXG5leHBvcnRzLnRvdGFsbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy5jcHVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcblxuZXhwb3J0cy50eXBlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0Jyb3dzZXInIH07XG5cbmV4cG9ydHMucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLm5ldHdvcmtJbnRlcmZhY2VzXG49IGV4cG9ydHMuZ2V0TmV0d29ya0ludGVyZmFjZXNcbj0gZnVuY3Rpb24gKCkgeyByZXR1cm4ge30gfTtcblxuZXhwb3J0cy5hcmNoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2phdmFzY3JpcHQnIH07XG5cbmV4cG9ydHMucGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnYnJvd3NlcicgfTtcblxuZXhwb3J0cy50bXBkaXIgPSBleHBvcnRzLnRtcERpciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy90bXAnO1xufTtcblxuZXhwb3J0cy5FT0wgPSAnXFxuJztcblxuZXhwb3J0cy5ob21lZGlyID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gJy8nXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n")}]);