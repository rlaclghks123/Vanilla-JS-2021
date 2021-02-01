const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-ToDoList");

const TODOS_LS="toDos"; 
 let  toDos =[];
 
function deleteToDo(event){
    const btn=event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    });
    toDos=cleanToDos;
    savaToDos();
}      

function savaToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}      
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId=toDos.length+1;
    delBtn.innerText="❌";
    delBtn.addEventListener("click" , deleteToDo);
    const span = document.createElement("span");
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;
    toDoList.appendChild(li);
    const ToDoObj = {
     text : text,
     id : newId
 };
 toDos.push(ToDoObj);
 savaToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}



function loadToDo(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
         const parseToDos = JSON.parse(loadedToDos);
         parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
           });
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit)
    }      
init();