const toDoTitle=document.getElementById("toDoTitle");
const toDoIcon =document.querySelector("#toDoContents__icon");
const toDoContent=document.querySelector("#toDoContents");



function init(){
    toDoTitle.addEventListener("click", function(){
        toDoContent.style.opacity='1';
    })
    toDoIcon.addEventListener("click",function(){
        toDoContent.style.opacity='0';
    })
}
init();