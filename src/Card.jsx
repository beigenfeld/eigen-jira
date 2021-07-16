import React from "react";
import logo from './logo.svg';
import { useState } from "react";


const Card = (props) => {
  const [status, setStatus] = useState("ToDo")

  function nextStatus (_status, _setStatus) {
    if ( _status  === "ToDo") {
      _setStatus("In Progress")
    }
    if ( _status  === "In Progress") {
      _setStatus("Done")
    }
  }

  function previousStatus (_status, _setState) {
    if (_status === "Done") {
      _setState("In Progress")
    }
    if (_status === "In Progress") {
      _setState("ToDo")
    }
  }

  return (
    
    <div className="card">
      <div className="card-top">
        <h1 class="card-header">Card</h1>
      </div>
      <div className="card-body">
        <img src={logo} alt-text="logo"></img>
      </div>
      <div>
        <p>Task = {props.taskDescription}</p>
      </div>
      <div>
        <button onClick={() => previousStatus(status, setStatus)}>Back</button>
        <button onClick={() => nextStatus(status, setStatus) }>Next</button>
        <div>Status: { status }</div>
      </div>
    </div>
  );
};


export default Card;