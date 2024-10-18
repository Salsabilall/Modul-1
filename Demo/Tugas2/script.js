const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const todoItem = document.createElement("input");
    todoItem.type = "text";
    todoItem.value = todoText;
    todoItem.setAttribute("readonly", "readonly");

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = () => editTodo(todoItem, editButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteTodo(li);

    li.appendChild(todoItem);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
    todoInput.value = "";  // Clear input after adding
}

function deleteTodo(todoItem) {
    todoList.removeChild(todoItem);
}

function editTodo(todoItem, editButton) {
    if (editButton.innerText.toLowerCase() === "edit") {
        todoItem.removeAttribute("readonly");
        todoItem.focus();
        editButton.innerText = "Save";
    } else {
        todoItem.setAttribute("readonly", "readonly");
        editButton.innerText = "Edit";
    }
}
