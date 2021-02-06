const body = document.querySelector("body");

function paintImg(imgNumber){
    const image = new Image();
    image.src=`img/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genNumber(){
    const number = Math.ceil(Math.random()*6);
    return number;
}

function init(){
    const randomNumber = genNumber();
    paintImg(randomNumber);
}
init();