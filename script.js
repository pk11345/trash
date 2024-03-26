setInterval(() => {
    

let hours = document.getElementById('hrs');
let minute = document.getElementById('min');
let second = document.getElementById('sec'); 
let t = new Date();
hours.innerHTML = (t.getHours()<10? "0" : "") + t.getHours();
minute.innerHTML = (t.getMinutes()<10? "0" : "") + t.getMinutes();
second.innerHTML = (t.getSeconds()<10? "0" : "") + t.getSeconds();
}, 1000);