!function n(o,s,u){function l(t,e){if(!s[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=s[t]={exports:{}},o[t][0].call(r.exports,function(e){return l(o[t][1][e]||e)},r,r.exports,n,o,s,u)}return s[t].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)l(u[e]);return l}({1:[function(e,t,r){t.exports=()=>{let e=document.getElementById("password"),t=document.querySelector("#item-password label");t.style.backgroundImage="url(../img/eye.svg)",t.addEventListener("click",()=>{'background-image: url("../img/eye.svg");'==t.getAttribute("style")?(t.style.backgroundImage="url(../img/eye-Off.svg)",e.setAttribute("type","text")):'background-image: url("../img/eye-Off.svg");'==t.getAttribute("style")&&(t.style.backgroundImage="url(../img/eye.svg)",e.setAttribute("type","password"))})}},{}],2:[function(e,t,r){t.exports=()=>{const t=document.getElementById("form"),s=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;t.addEventListener("submit",async function(e){e.preventDefault();e=r(t);0===e?t.reset():alert("Заполните корректно форму")});const r=function(e){let t=0;var r,n=e.querySelectorAll("._req");for(let e=0;e<n.length;e++){const o=n[e];(r=o).parentElement.classList.remove("_error"),r.classList.remove("_error"),("checkbox"===o.getAttribute("type")&&!1===o.checked||""===o.value||"email"===o.getAttribute("type")&&0==s.test(document.getElementById("email").value)||document.getElementById("re-password").value!=document.getElementById("password").value)&&(u(o),t++)}return t};function u(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}}},{}],3:[function(e,t,r){const n=e("./modules/validateReg"),o=e("./modules/password");n(),o()},{"./modules/password":1,"./modules/validateReg":2}]},{},[3]);