!function(n){var c={};function l(e){if(c[e])return c[e].exports;var r=c[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=n,l.c=c,l.d=function(n,c,e){l.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:e})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,c){if(1&c&&(n=l(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var r in n)l.d(e,r,function(c){return n[c]}.bind(null,r));return e},l.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(c,"a",c),c},l.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},l.p="",l(l.s=0)}([function(module,exports){eval("\r\n\r\n\r\nconst button = document.querySelector('.header__button--js');\r\nconsole.log(button)\r\n\r\nbutton.addEventListener('click', (e) => {\r\n  const mainHeader = document.querySelector('.mainHeader__title--js');\r\n  mainHeader.innerHTML = 'JS is cool, cause you click, click';\r\n  mainHeader.classList.toggle('mainHeader--red');\r\n  alert('Hello, check the header! I used JS here');\r\n\r\n});\r\n\r\nconst navigationSwitcher = document.querySelector('.navigation__switcher--js')\r\n\r\nnavigationSwitcher.addEventListener('click', (e) => {\r\n  const navigationList = document.querySelector('.navigation__list--js');\r\n  navigationList.classList.toggle('navigation__list--visible');\r\n});\r\n\r\n///////////////////////DEATH STAR TRAINING\r\n\r\nconst deathStar = {\r\n  diameter: 120000,\r\n  fire: (target) => {\r\n    console.log(`${target} destroyed 💥`)\r\n  },\r\n  isOperating: true,\r\n  levels: 357,\r\n  name: 'Death Star',\r\n  population: 10000,\r\n}\r\n\r\n// const age = 34;\r\n// const name = 'Jędrzej';\r\n// const diary = document.querySelector('.diary__header--js');\r\n// diary.innerHTML = `Nazywam się ${name} i mam ${age} lata`;\r\n\r\n// function handleClick(){\r\n//     console.log('działa')\r\n// }\r\n\r\n// button.addEventListener('click', (e) =>{\r\n//     console.log(e);\r\n// console.log('that is an arrow function')\r\n// });\r\n\r\n//////////////////////////////Changing the header when click\r\n// button.addEventListener('click', (e) => {\r\n//     const mainHeader = document.querySelector('.mainHeader__title--js');\r\n//     mainHeader.innerHTML = 'JS is cool, cause you click, click';\r\n//     alert('Hello, check the header! I used JS here');\r\n// });\r\n\r\n// if (age >= 35) {\r\n//     console.log(\"trzydzieści pięć lub mniej\")\r\n// }\r\n// else if (age <= 35 && age >= 30) {\r\n//     console.log('Między 30 a 35')\r\n// }\r\n// else {\r\n//     console.log('nie trzydzieści pięć')\r\n// };\r\n\r\n// switch (age) {\r\n//     case 30:\r\n//         console.log('Masz 30 lat');\r\n\r\n//         break;\r\n//     case 20:\r\n//         console.log('Masz 20 lat');\r\n//         break;\r\n//     default:\r\n//         console.log(`Masz ${age} lat`)\r\n// };\r\n\r\n// let oldIndicator;\r\n// if (age > 70) {\r\n//     oldIndicator = 'yes';\r\n// } else {\r\n//     oldIndicator = 'no';\r\n// }\r\n\r\n// // the same as above can be written below\r\n// const amIOld = (age > 70) ? 'yes' : 'no';\r\n// console.log(amIOld);\r\n\r\n\r\n// alert('Elo zią!');\r\n// console.log('Gierary hirr');\r\n\r\n\r\n\r\n// console.log(name)\r\n// console.log(age);\r\n\r\n// console.log(`Nazywam się ${name} i mam ${age} lata`);\r\n\r\n\r\n// FUNCTIONS - REPETITON\r\n\r\n// function calculate(x) {\r\n//     x = x + 3;\r\n//     console.log(x);\r\n//     return x * 7;\r\n// }\r\n\r\n// console.log(calculate(2));\r\n// const myCalculation = calculate(4);\r\n// console.log(myCalculation)\r\n\r\n\r\n// // Fat Arrow function\r\n\r\n// const calculateFat = x => (x + 3) * 7;\r\n\r\n// console.log(\"parametr to 2 a wynik to \" + calculateFat(2));\r\n\r\n// const welcome = (name, age) => {\r\n//     console.log(`Hej! Mam na imię ${name} i mam ${age} lat`);\r\n// }\r\n\r\n// welcome('Jędrzej', 34);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEtBQUssU0FBUyxJQUFJOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBLDhCQUE4QixLQUFLLFNBQVMsSUFBSTs7O0FBR2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1QyxLQUFLLFNBQVMsSUFBSTtBQUN6RDs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnV0dG9uLS1qcycpO1xyXG5jb25zb2xlLmxvZyhidXR0b24pXHJcblxyXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkhlYWRlcl9fdGl0bGUtLWpzJyk7XHJcbiAgbWFpbkhlYWRlci5pbm5lckhUTUwgPSAnSlMgaXMgY29vbCwgY2F1c2UgeW91IGNsaWNrLCBjbGljayc7XHJcbiAgbWFpbkhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdtYWluSGVhZGVyLS1yZWQnKTtcclxuICBhbGVydCgnSGVsbG8sIGNoZWNrIHRoZSBoZWFkZXIhIEkgdXNlZCBKUyBoZXJlJyk7XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25Td2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19zd2l0Y2hlci0tanMnKVxyXG5cclxubmF2aWdhdGlvblN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBjb25zdCBuYXZpZ2F0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19saXN0LS1qcycpO1xyXG4gIG5hdmlnYXRpb25MaXN0LmNsYXNzTGlzdC50b2dnbGUoJ25hdmlnYXRpb25fX2xpc3QtLXZpc2libGUnKTtcclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0RFQVRIIFNUQVIgVFJBSU5JTkdcclxuXHJcbmNvbnN0IGRlYXRoU3RhciA9IHtcclxuICBkaWFtZXRlcjogMTIwMDAwLFxyXG4gIGZpcmU6ICh0YXJnZXQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGAke3RhcmdldH0gZGVzdHJveWVkIPCfkqVgKVxyXG4gIH0sXHJcbiAgaXNPcGVyYXRpbmc6IHRydWUsXHJcbiAgbGV2ZWxzOiAzNTcsXHJcbiAgbmFtZTogJ0RlYXRoIFN0YXInLFxyXG4gIHBvcHVsYXRpb246IDEwMDAwLFxyXG59XHJcblxyXG4vLyBjb25zdCBhZ2UgPSAzNDtcclxuLy8gY29uc3QgbmFtZSA9ICdKxJlkcnplaic7XHJcbi8vIGNvbnN0IGRpYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYXJ5X19oZWFkZXItLWpzJyk7XHJcbi8vIGRpYXJ5LmlubmVySFRNTCA9IGBOYXp5d2FtIHNpxJkgJHtuYW1lfSBpIG1hbSAke2FnZX0gbGF0YWA7XHJcblxyXG4vLyBmdW5jdGlvbiBoYW5kbGVDbGljaygpe1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2R6aWHFgmEnKVxyXG4vLyB9XHJcblxyXG4vLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XHJcbi8vICAgICBjb25zb2xlLmxvZyhlKTtcclxuLy8gY29uc29sZS5sb2coJ3RoYXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24nKVxyXG4vLyB9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0NoYW5naW5nIHRoZSBoZWFkZXIgd2hlbiBjbGlja1xyXG4vLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluSGVhZGVyX190aXRsZS0tanMnKTtcclxuLy8gICAgIG1haW5IZWFkZXIuaW5uZXJIVE1MID0gJ0pTIGlzIGNvb2wsIGNhdXNlIHlvdSBjbGljaywgY2xpY2snO1xyXG4vLyAgICAgYWxlcnQoJ0hlbGxvLCBjaGVjayB0aGUgaGVhZGVyISBJIHVzZWQgSlMgaGVyZScpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGlmIChhZ2UgPj0gMzUpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwidHJ6eWR6aWXFm2NpIHBpxJnEhyBsdWIgbW5pZWpcIilcclxuLy8gfVxyXG4vLyBlbHNlIGlmIChhZ2UgPD0gMzUgJiYgYWdlID49IDMwKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnTWnEmWR6eSAzMCBhIDM1JylcclxuLy8gfVxyXG4vLyBlbHNlIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCduaWUgdHJ6eWR6aWXFm2NpIHBpxJnEhycpXHJcbi8vIH07XHJcblxyXG4vLyBzd2l0Y2ggKGFnZSkge1xyXG4vLyAgICAgY2FzZSAzMDpcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnTWFzeiAzMCBsYXQnKTtcclxuXHJcbi8vICAgICAgICAgYnJlYWs7XHJcbi8vICAgICBjYXNlIDIwOlxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdNYXN6IDIwIGxhdCcpO1xyXG4vLyAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhgTWFzeiAke2FnZX0gbGF0YClcclxuLy8gfTtcclxuXHJcbi8vIGxldCBvbGRJbmRpY2F0b3I7XHJcbi8vIGlmIChhZ2UgPiA3MCkge1xyXG4vLyAgICAgb2xkSW5kaWNhdG9yID0gJ3llcyc7XHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgICBvbGRJbmRpY2F0b3IgPSAnbm8nO1xyXG4vLyB9XHJcblxyXG4vLyAvLyB0aGUgc2FtZSBhcyBhYm92ZSBjYW4gYmUgd3JpdHRlbiBiZWxvd1xyXG4vLyBjb25zdCBhbUlPbGQgPSAoYWdlID4gNzApID8gJ3llcycgOiAnbm8nO1xyXG4vLyBjb25zb2xlLmxvZyhhbUlPbGQpO1xyXG5cclxuXHJcbi8vIGFsZXJ0KCdFbG8gemnEhSEnKTtcclxuLy8gY29uc29sZS5sb2coJ0dpZXJhcnkgaGlycicpO1xyXG5cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZyhuYW1lKVxyXG4vLyBjb25zb2xlLmxvZyhhZ2UpO1xyXG5cclxuLy8gY29uc29sZS5sb2coYE5henl3YW0gc2nEmSAke25hbWV9IGkgbWFtICR7YWdlfSBsYXRhYCk7XHJcblxyXG5cclxuLy8gRlVOQ1RJT05TIC0gUkVQRVRJVE9OXHJcblxyXG4vLyBmdW5jdGlvbiBjYWxjdWxhdGUoeCkge1xyXG4vLyAgICAgeCA9IHggKyAzO1xyXG4vLyAgICAgY29uc29sZS5sb2coeCk7XHJcbi8vICAgICByZXR1cm4geCAqIDc7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKGNhbGN1bGF0ZSgyKSk7XHJcbi8vIGNvbnN0IG15Q2FsY3VsYXRpb24gPSBjYWxjdWxhdGUoNCk7XHJcbi8vIGNvbnNvbGUubG9nKG15Q2FsY3VsYXRpb24pXHJcblxyXG5cclxuLy8gLy8gRmF0IEFycm93IGZ1bmN0aW9uXHJcblxyXG4vLyBjb25zdCBjYWxjdWxhdGVGYXQgPSB4ID0+ICh4ICsgMykgKiA3O1xyXG5cclxuLy8gY29uc29sZS5sb2coXCJwYXJhbWV0ciB0byAyIGEgd3luaWsgdG8gXCIgKyBjYWxjdWxhdGVGYXQoMikpO1xyXG5cclxuLy8gY29uc3Qgd2VsY29tZSA9IChuYW1lLCBhZ2UpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGBIZWohIE1hbSBuYSBpbWnEmSAke25hbWV9IGkgbWFtICR7YWdlfSBsYXRgKTtcclxuLy8gfVxyXG5cclxuLy8gd2VsY29tZSgnSsSZZHJ6ZWonLCAzNCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);