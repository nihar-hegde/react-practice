import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "todo1", description: "todo1 description" },
    { id: 2, title: "todo2", description: "todo2 description" },
    { id: 3, title: "todo3", description: "todo3 description" },
    { id: 4, title: "todo4", description: "todo4 description" },
    { id: 5, title: "todo5", description: "todo5 description" },
  ]);
  return (
    <>
      <div>
        {todos.map((todo) => (
          <Card
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </>
  );
}
const Card = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default App;
