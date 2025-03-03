function todoDom() {
  const createTodo = () => {
    const divTodo = document.createElement("div");
    const checkbox = document.createElement("input");
    const checkLabel = document.createElement("label");
    const todoTopBox = document.createElement("div");
    const todoTitle = document.createElement("input");
    const todoUnderBox = document.createElement("div");
    const todoDescription = document.createElement("input");
    const todoEdit = document.createElement("div");
    const enterBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    divTodo.id = "todo";

    checkbox.type = "checkbox";
    checkbox.id = "taskComplete";

    checkLabel.setAttribute("for", "taskComplete");

    todoTopBox.id = "todoTopBox";

    todoTitle.type = "text";
    todoTitle.id = "todoTitle";
    todoTitle.placeholder = "Enter Title";

    todoUnderBox.id = "todoUnderBox";

    todoDescription.type = "text";
    todoDescription.id = "todoDescription";
    todoDescription.placeholder = "Enter Description";

    todoEdit.id = "todoEdit";

    enterBtn.id = "enterBtn";
    enterBtn.textContent = "E";

    deleteBtn.id = "deleteBtn";
    deleteBtn.textContent = "D";

    divTodo.appendChild(checkbox);
    divTodo.appendChild(checkLabel);

    checkLabel.appendChild(todoTopBox);
    todoTopBox.appendChild(todoTitle);

    todoTopBox.appendChild(todoUnderBox);
    todoUnderBox.appendChild(todoDescription);
    todoUnderBox.appendChild(todoEdit);

    todoEdit.appendChild(enterBtn);
    todoEdit.appendChild(deleteBtn);

    return divTodo;
  };
  return { createTodo };
}

export { todoDom };
