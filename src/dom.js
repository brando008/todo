function dom() {
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

    divTodo.classList.add("todo");

    checkbox.type = "checkbox";
    checkbox.classList.add("taskComplete");

    checkLabel.setAttribute("for", "taskComplete");

    todoTopBox.classList.add("todoTopBox");

    todoTitle.type = "text";
    todoTitle.classList.add("todoTitle");
    todoTitle.placeholder = "Enter Title";

    todoUnderBox.classList.add("todoUnderBox");

    todoDescription.type = "text";
    todoDescription.classList.add("todoDescription");
    todoDescription.placeholder = "Enter Description";

    todoEdit.classList.add("todoEdit");

    enterBtn.classList.add("enterBtn");
    enterBtn.textContent = "E";

    deleteBtn.classList.add("deleteBtn");
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

    // enterBtn.addEventListener("click", () => {
    //   todoTitle.setAttribute("readonly", true);
    //   todoDescription.setAttribute("readonly", true);
    // });

    todoTitle.setAttribute("readonly", true);
    todoDescription.setAttribute("readonly", true);

    enterBtn.addEventListener("click", () => {
      const isReadonly = todoTitle.hasAttribute("readonly");

      if (isReadonly) {
        todoTitle.removeAttribute("readonly");
        todoDescription.removeAttribute("readonly");
      } else {
        todoTitle.setAttribute("readonly", true);
        todoDescription.setAttribute("readonly", true);
      }
    });

    deleteBtn.addEventListener("click", () => {
      divTodo.remove();
    });

    return divTodo;
  };

  const createList = () => {
    const list = document.createElement("div");
    const listHeader = document.createElement("div");
    const listTitle = document.createElement("input");

    list.classList.add("list");
    listHeader.classList.add("listHeader");

    listTitle.type = "text";
    listTitle.classList.add("listTitle");
    listTitle.placeholder = "Enter Title";

    list.appendChild(listHeader);
    listHeader.appendChild(listTitle);

    //add 1 todo to the list
    const newTodo = createTodo();
    list.appendChild(newTodo);

    const addTodoComponent = addTodo(list);
    list.appendChild(addTodoComponent);

    return list;
  };

  const addTodo = (todoContainer) => {
    const addTodoDiv = document.createElement("div");
    const todoBtn = document.createElement("button");

    addTodoDiv.classList.add("addTodo");

    todoBtn.classList.add("todoBtn");
    todoBtn.textContent = "Add";

    addTodoDiv.appendChild(todoBtn);

    todoBtn.addEventListener("click", () => {
      const newTodo = createTodo();
      todoContainer.insertBefore(newTodo, addTodoDiv);
    });

    return addTodoDiv;
  };

  return { createTodo, createList };
}

export { dom };
