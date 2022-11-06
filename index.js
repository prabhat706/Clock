let a;
let time;
let date;
const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};

setInterval(() => {
a=new Date();
date = a.toLocaleDateString(undefined,options);
time = (a.getHours()+':'+a.getMinutes()+':'+a.getSeconds());

document.getElementById('time').innerHTML=time + " <br>on " + date;    
}, 1000);
document.getElementsByTagName('navbarSupportedContent')[0].style.fontSize="66px";
document.getElementsByTagName('navbarSupportedContent')[0].style.background="blue";
document.getElementsByTagName('navbarSupportedContent')[0].style.fontWeight="bolder";
// document.getElementsByTagName('h1')[0].style.visibility="hidden";
// // document.getElementsByTagName('h1')[0].style.display="none";

