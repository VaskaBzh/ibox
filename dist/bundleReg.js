!function o(n,s,u){function l(t,e){if(!s[t]){if(!n[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=s[t]={exports:{}},n[t][0].call(r.exports,function(e){return l(n[t][1][e]||e)},r,r.exports,o,n,s,u)}return s[t].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)l(u[e]);return l}({1:[function(t,r,o){r.exports=()=>{const t=document.querySelector(".registrate__link_IMEI"),r=document.querySelector(".how"),o=r.querySelector("#close");var n=e=>{e.preventDefault(),r.classList.toggle("active")};t.addEventListener("click",n(e)),o.addEventListener("click",n)}},{}],2:[function(e,t,r){t.exports=()=>{let e=document.getElementById("password"),t=document.querySelector("#item-password label");t.style.backgroundImage="url(../img/eye.svg)",t.addEventListener("click",()=>{'background-image: url("../img/eye.svg");'==t.getAttribute("style")?(t.style.backgroundImage="url(../img/eye-Off.svg)",e.setAttribute("type","text")):'background-image: url("../img/eye-Off.svg");'==t.getAttribute("style")&&(t.style.backgroundImage="url(../img/eye.svg)",e.setAttribute("type","password"))})}},{}],3:[function(e,t,r){t.exports=()=>{const t=document.getElementById("form"),s=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;t.addEventListener("submit",async function(e){e.preventDefault();e=r(t);0===e?t.reset():alert("Заполните корректно форму")});const r=function(e){let t=0;var r,o=e.querySelectorAll("._req");for(let e=0;e<o.length;e++){const n=o[e];(r=n).parentElement.classList.remove("_error"),r.classList.remove("_error"),("checkbox"===n.getAttribute("type")&&!1===n.checked||""===n.value||"email"===n.getAttribute("type")&&0==s.test(document.getElementById("email").value)||document.getElementById("re-password").value!=document.getElementById("password").value)&&(u(n),t++)}return t};function u(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}}},{}],4:[function(e,t,r){const o=e("./modules/validateReg"),n=e("./modules/password"),s=e("./modules/modalHow");o(),n(),s()},{"./modules/modalHow":1,"./modules/password":2,"./modules/validateReg":3}]},{},[4]);