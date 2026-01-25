const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const tasksDiv = document.getElementById("tasks");

let todos = [];

addBtn.addEventListener("click", function () {

    alert("Clicked");   

    const text = input.value.trim();
    if (text === "") return;

    todos.push(text);

    input.value = "";

    renderTodos();
});

function renderTodos() {
    tasksDiv.innerHTML = ""; 

    todos.forEach(function (todo) {
 
        console.log("Total todos:", todos.length); 

        const div = document.createElement("div");
        div.textContent = todo;

        tasksDiv.appendChild(div);
    });
}