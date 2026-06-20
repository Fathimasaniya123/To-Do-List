const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") return;

    createTask(text);

    taskInput.value = "";
}

function createTask(text) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    // mark complete on click
    span.onclick = function () {
        span.classList.toggle("completed");
    };

    // Button container
    const btnGroup = document.createElement("div");
    btnGroup.style.display = "flex";
    btnGroup.style.gap = "5px";

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.onclick = function () {
        const newText = prompt("Edit your task:", span.textContent);

        if (newText !== null && newText.trim() !== "") {
            span.textContent = newText.trim();
        }
    };

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.onclick = function () {
        li.remove();
    };

    // Add buttons to group
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(delBtn);

    // Add to list
    li.appendChild(span);
    li.appendChild(btnGroup);

    taskList.appendChild(li);
}