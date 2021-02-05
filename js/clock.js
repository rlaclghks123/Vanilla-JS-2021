const CLOCK_BOX = document.querySelector(".js-clock"),
      CLOCK_TITLE=CLOCK_BOX.querySelector("h1");

function getTime(){
    const date=new Date();
    const hours = date.getHours();
    const minutes=date.getMinutes() ;
    const seconds=date.getSeconds();
    CLOCK_TITLE.innerText =`${hours<10 ? `0${hours}`: hours }:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}`:seconds}`; 
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();


