import { React, useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState(["Eat", "sleep", "code", "Repeat"]);
  const [newtask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newtask.trim == "") {
      setTask((prevTask) => [...prevTask, newtask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTask(task.filter((element, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newtask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ol>
        {task.map((value, index) => (
          <li key={index}>
            <span>{value}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => moveTaskUp(index)}>Move Up</button>
            <button onClick={() => moveTaskDown(index)}>Move Down</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoApp;
