(()=>{"use strict";let e=/^[a-z][A-Z]{1,}$/,t=/^[a-z][A-Z]{1,}$/,l=/^[a-z][A-Z]{1,}$/,n=/^[a-z]{1,}[a-zA-Z0-9 ]*$/,o=/^[a-z][A-Z][0-9]{1,}$/,d=/^[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}[-]{1}[0-9]{4}$/,a=/^[0-9]{3}$/,m=/^[A-Z]{1}[a-z]{1,}[ ]{1}[A-Z]{1}[a-z]{1,}$/;document.addEventListener("DOMContentLoaded",(()=>{var s;null===(s=document.getElementById("fizetes"))||void 0===s||s.addEventListener("click",(()=>{e.test(document.getElementById("nev").value)?e.test(document.getElementById("nev").value)&&(document.getElementById("nevlabel").style.color="black",console.log("jonevnev")):(document.getElementById("nevlabel").style.color="red",console.log("rossznev")),t.test(document.getElementById("orszag").value)?t.test(document.getElementById("orszag").value)&&(document.getElementById("orszaglabel").style.color="black"):document.getElementById("orszaglabel").style.color="red"})),e.test(document.getElementById("nev").value)&&t.test(document.getElementById("orszag").value)&&l.test(document.getElementById("varos").value)&&n.test(document.getElementById("varos").value)&&o.test(document.getElementById("irsz").value)&&d.test(document.getElementById("kartyaszam").value)&&a.test(document.getElementById("kod").value)&&m.test(document.getElementById("kartyanev").value)&&document.getElementById("form").remove()}))})();