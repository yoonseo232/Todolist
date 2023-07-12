
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDay();
document.getElementsByClassName("today").innerHTML = year + " " + month + " " + day; 