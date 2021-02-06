const toDoTitle=document.getElementById("toDoTitle");
const toDoIcon =document.getElementById("toDoContents__icon");
const toDoContent=document.getElementById("toDoContents");


function clickList(event){
    toDoContent.style.opacity="1";
}
function clickArrow(event){
    toDoContent.style.opacity="0";
}

function init(){
    toDoTitle.addEventListener("click", clickList);
    toDoIcon.addEventListener("click",clickArrow);
}
init();