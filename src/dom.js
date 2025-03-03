function Dom() {
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

  const createList = () => {
    const list = document.createElement("div");
    const listHeader = document.createElement("div");
    const listTitle = document.createElement("input");
    const editBtn = document.createElement("button");

    list.id = "list";

    listHeader.id = "listHeader";

    listTitle.type = "text";
    listTitle.id = "listTitle";
    listTitle.placeholder = "Enter Title";

    editBtn.id = "editBtn";
    editBtn.textContent = "Edit";

    list.appendChild(listHeader);
    listHeader.appendChild(listTitle);
    listHeader.appendChild(editBtn);

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

    addTodoDiv.id = "addTodo";

    todoBtn.id = "todoBtn";
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

export { Dom };
