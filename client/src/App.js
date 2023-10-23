import React from "react";
import axios from "axios";

// IMPORT CSS
import './App.css';

function App() {
  const [taskData, setTaskData] = React.useState([]);
  const [createText, setCreateText] = React.useState("");

  async function getTask() {
    const fetchData = await fetch("http://localhost:4000/gettask");
    const fetchDataProcessed = await fetchData.json();
    console.log(fetchDataProcessed);
    setTaskData(fetchDataProcessed);
  }

  function onChangeCreateText(e) {
    setCreateText(e.target.value);
    console.log(e.target.value);
  }

  async function clickCreateButton() {
    console.log(createText);
    // const createTextJSON = JSON.stringify(createText);
    const createTextJSON = {
      text: createText,
    };
    const returnedData = await axios.post("http://localhost:4000/createtask", createTextJSON);


    // const returnedData = await fetch("http://localhost:4000/createtask", {
    //   method: "POST",
    //   mode: "no-cors", // no-cors, *cors, same-origin
    //   body: createTextJSON,
    //   headers: {
    //     // "Content-Type": "raw",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //     // 'Accept': 'application/json',
    //     "Content-Type": "application/json"
    //   },
    // });


    // const returnedDataProcessed = await returnedData.json();
    // console.log(returnedData);
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
        <div className="list-done">
          <p>Done</p>
          {taskData.map((data, index) => <p key={index}>{data.done ? "✅" : "📦"}</p>)}
        </div>
        <div className="list-to_do">
          <p>To do</p>
          {taskData.map((data, index) => <p key={index}>{data.to_do}</p>)}
        </div>
        <div className="check-due-date">
          <p>Due date</p>
          {taskData.map((data, index) => <p key={index}>{data.due_date}</p>)}
        </div>
      </div>
      <div className="input">
        <input type="text" className="input-box" value={createText} onChange={onChangeCreateText}  placeholder="Add task" rows="10" cols="60" />
        <button className="input-button" onClick={clickCreateButton}>Send</button>
      </div>
    </div>
  );
}

export default App;

// Issue no.1: 
// proxy is no working
// there is cors error
