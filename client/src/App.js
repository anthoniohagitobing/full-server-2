import React from "react";
import axios from "axios";

// IMPORT CSS
import './App.css';

function App() {
  const [taskData, setTaskData] = React.useState([]);
  const [createToDo, setCreateToDo] = React.useState("");
  const [createDueDate, setCreateDueDate] = React.useState("");

  async function getTask() {
    const url = Boolean(process.env.DATABASE_URL) ? "https://full-stack-2.onrender.com/gettask" : "http://localhost:4000/gettask";
    // const url = "https://full-stack-2.onrender.com/gettask";
    console.log(Boolean(process.env.DATABASE_URL));
    const fetchData = await fetch(url);
    const fetchDataProcessed = await fetchData.json();
    console.log(fetchDataProcessed);
    setTaskData(fetchDataProcessed);
  }

  function onChangeCreateToDo(e) {
    setCreateToDo(e.target.value);
    console.log(e.target.value);
  }

  function onChangeCreateDueDate(e) {
    setCreateDueDate(e.target.value);
    console.log(e.target.value);
  }


  async function clickCreateButton() {
    const createTask = {
      to_do: createToDo,
      due_date: createDueDate,
    };
    // const createTaskJSON = JSON.stringify(createTask);
      // with axios, you don't need to stringify it
    const returnedData = await axios.post("http://localhost:4000/createtask", createTask);
    const returnedDataProcessed = returnedData.data;
    console.log(returnedDataProcessed);
    getTask();
  }

  // INITIATING INITIAL DATA
  React.useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>To-Do List</h1>
      </div>
      <div className="list">
        <div className="list-id">
          <p>ID</p>
          {taskData.map((data, index) => <p key={index}>{data.id}</p>)}
        </div>
        <div className="list-done">
          <p>Done</p>
          {taskData.map((data, index) => <p key={index}>{data.done ? "✅" : "📦"}</p>)}
        </div>
        <div className="list-to_do">
          <p>To do</p>
          {taskData.map((data, index) => <p key={index}>{data.to_do}</p>)}
        </div>
        <div className="list-due-date">
          <p>Due date</p>
          {taskData.map((data, index) => <p key={index}>{data.due_date}</p>)}
        </div>
      </div>
      <div className="input">
        <input type="text" className="input-box" value={createToDo} onChange={onChangeCreateToDo}  placeholder="Add task" rows="10" cols="60" />
        <input type="text" className="input-box" value={createDueDate} onChange={onChangeCreateDueDate}  placeholder="Add date" rows="10" cols="60" />
        <button className="input-button" onClick={clickCreateButton}>Send</button>
      </div>
    </div>
  );
}

export default App;

// Issue no.1: 
// proxy is no working
// there is cors error
