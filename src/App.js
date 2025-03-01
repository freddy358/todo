import React, { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { User } from "./Components/Users";

const App = () => {
  const [inputValue, setInputValue] = useState("");
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
        <div className="block">
          <div className="blockName">
            <input
              type="checkbox"
              checked={i.checked}
              onChange={() => checkHandler(i.id)}
            />
            <div className={i.checked ? "lineName" : ""}>{i.name}</div>
          </div>
          <div className="x" onClick={() => deleteHandler(i.id)}>
            x
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
