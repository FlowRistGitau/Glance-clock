const timeStamp= document.getElementById('clock');


function updateTime(){

const timeNow= new Date();
const hours= String(timeNow.getHours()).padStart(2,'0');
const minutes= String(timeNow.getMinutes()).padStart(2,'0');
const seconds= String(timeNow.getSeconds()).padStart(2,'0');

timeStamp.textContent= `${hours}:${minutes}:${seconds}`;

}

updateTime();

setInterval(updateTime,1000);