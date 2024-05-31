import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(todo === "") return
    setTodoList(cur => [todo, ...cur])
    setTodo("")
  };
  return (
    <div>
      <h1>TodoList</h1>
      <h3>count : {(todoList.length)}</h3>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your todo..."
        />
        <button>Add todo</button>
      </form>
      <hr/>
      <ul>
        {todoList.map((e, idx) => {
          return (
            <li key={idx}>{(e)}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
