export const getLocalItems = () => {
  let items = localStorage.getItem("todos");

  if (items&&items!==undefined) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

export const getSpecificItems = (id) => {
  let items = localStorage.getItem("todos");

  if (items) {
    const data = JSON.parse(localStorage.getItem("todos"));
    id = parseInt(id);
    return data.filter((datum) => datum.id === id);
  } else {
    return [];
  }
};

export const findIndexOf = (obj) => {
  let items = localStorage.getItem("todos");
  if (items) {
    const data = JSON.parse(localStorage.getItem("todos"));
     return data.findIndex(datum => datum.id === obj[0].id)
  } else {
    return [];
  }
};

export const setTodos = (todos) => {
  localStorage.setItem("todos",JSON.stringify(todos))
}


export const deletePost = (id) => {
  let data = getLocalItems();
    data = data.filter((dataum) => {
      return dataum.id !== id;
    })
    return data

  // navigate("/", { replace: true });
};


