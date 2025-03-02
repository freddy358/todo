import React, { useState } from "react";
import "./App.css";
import { Todo } from "./Components/Todo";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [editedId, setEditedId] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Read book", checked: false },
    { id: 2, name: "Never get down", checked: false },
    { id: 3, name: "Its not over, until I win!", checked: false },
  ]);

  const addHandler = () => {
    if (inputValue) {
      setTodoList([
        ...todoList,
        { id: Math.random(), name: inputValue, checked: false },
      ]);
      setInputValue("");
    }
  };

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const deleteHandler = (arg) => {
    const newArr = todoList.filter((el) => el.id !== arg);
    setTodoList(newArr);
  };

  const checkHandler = (id) => {
    const checkArr = todoList.map((el) => {
      if (el.id === id) {
        el.checked = !el.checked;
      }

      return el;
    });

    setTodoList(checkArr);
  };

  const changeName = (id) => {
    const checkArr = todoList.map((el) => {
      if (el.id === id) {
        el.name = editedValue;
      }

      return el;
    });

    setTodoList(checkArr);
    setEditedId(null);
  };

  const editHandler = (id, name) => {
    setEditedId(id);
    setEditedValue(name);
  };

  return (
    <div className="App">
      <div>
        <input
          className="input"
          value={inputValue}
          onChange={(e) => inputHandler(e)}
        />
        <button onClick={addHandler}>Add</button>
      </div>
      {todoList.map((i) => (
        // eslint-disable-next-line react/jsx-key
        <Todo
        key={i.id}
          id={i.id}
          name={i.name}
          editedId={editedId}
          editedValue={editedValue}
          setEditedValue={setEditedValue}
          changeName={changeName}
          checked={i.checked}
          checkHandler={checkHandler}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
};

export default App;
