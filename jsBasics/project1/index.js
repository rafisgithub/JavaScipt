let a;
let date;
let time;

setInterval(()=>{

a = new Date();
 date = a.toLocaleDateString();
 time = a.getHours() + ':' + a.getminutes() + ':' + a.getSecond();

document.getElementById('time').innerHTML = time + "on" + date;

},1000)