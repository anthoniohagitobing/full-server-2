import React from "react";

// IMPORT CSS
import './App.css';

function App() {
  const [testData, setTestData] = React.useState([]);

  async function test() {
    const fetchData = await fetch("http://localhost:4000/get");
    const fetchDataProc = await fetchData.json();
    console.log(fetchDataProc);
    setTestData(fetchDataProc);
  }

  React.useEffect(() => {
    test();
  }, []);

  return (
    <div>
      <p>Hello asdfasdf</p>
      <p>Test</p>
      {/* {testData}; */}
      {/* {testData.map((data, index) => <p>{data.username}</p>)} */}
      {testData.map((data, index) => {
        return <p key={index}>{data.username}</p>
        })}
    </div>
  );
}

export default App;

// Issue no.1: 
// proxy is no working
// there is cors error
