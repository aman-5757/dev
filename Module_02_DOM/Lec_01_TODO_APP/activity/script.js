let todoInput = document.querySelector(".todo-input");
let addTodoButton = document.querySelector(".add-todo");
let todosList = document.querySelector(".todos-list");


function addTodo(){
    let todo = todoInput.value;
    
    if(todo){
        let listItem = document.createElement("li"); 
        listItem.classList.add("todo-item");

        let pTag = document.createElement("p");
        pTag.classList.add("todo");
        pTag.innerHTML = todo;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "DELETE";

        deleteButton.addEventListener("click" , function(event){
            // console.log("delete todo clicked !!!");
            // console.log(event);
            event.target.parentNode.remove();
        })

        listItem.append(pTag);
        listItem.append(deleteButton);
        todosList.append(listItem);
        todoInput.value = "";
    }
}




addTodoButton.addEventListener("click" , function(){
    addTodo();
});


todoInput.addEventListener("keypress" , function(e){        //e is event
    if(e.key == "Enter"){
        addTodo()
    }
})