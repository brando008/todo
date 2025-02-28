//should have a title, description, and checkbox
//the edit will react to the list being edited
function todo() {
  let todoInfo = {
    title: "",
    description: "",
    edit: false,
    checked: false,
  };

  const getTitle = () => todoInfo.title;
  const setTitle = (newTitle) => (todoInfo.title = newTitle);

  const getDescription = () => todoInfo.description;
  const setDescription = (newDesc) => (todoInfo.description = newDesc);

  const toggleEdit = () => (todoInfo.edit = !todoInfo.edit);
  const toggleChecked = () => (todoInfo.checked = !todoInfo.checked);

  const getTodo = () => todoInfo;
  const setTodo = (newTitle, newDesc) => {
    setTitle(newTitle);
    setDescription(newDesc);
  };

  return {
    getTodo,
    setTodo,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    toggleEdit,
    toggleChecked,
  };
}

export { todo };
