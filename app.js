const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUl = document.getElementById("todo");

form.addEventListener("submit", (e) =>{
e.preventDefault();
addTodo();
});

function addTodo(todo) {
    let todoText = input.value;
    if (todo) {
        todoText= todo.text
    }
    // Bluid the li items

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }
        todoEl.innerText = todoText;
        
        // // Mark Add
        // todoEl.addEventListener("click", () => {
        //     todoEl.classList.toggle("completed");
        // });


        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
        });

        // Add it document
         todoUl.appendChild(todoEl);
         input.value = "";
    }
}