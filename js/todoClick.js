const toDoTitle=document.getElementById("toDoTitle");
const toDoIcon =document.getElementById("toDoContents__icon");
const toDoContent=document.getElementById("toDoContents");



function init(){
    toDoTitle.addEventListener("click", function(){
        toDoContent.style.opacity="1";
    })
    toDoIcon.addEventListener("click",function(){
        toDoContent.style.opacity="0";
    })
}
init();