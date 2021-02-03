const COORDS = "coords";



function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
}

function handleGeoError(){
    console.log("위치정보를 확인할 수 없습니다.");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadcoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords=== null || loadedCoords ==='undefined'){
        askForCoords();
    }else{
       //getWeather
    }
}

function init(){
   loadcoords();
}
init();




