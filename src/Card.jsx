import React from "react";
import logo from './logo.svg';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Card = ({cardId, status, taskDescription, updateStatus}) => {
  const id = uuidv4()

  function nextStatus (_key, _status, _updateStatus) {
    console.log("props: ", "key: ", _key, _status, _updateStatus)
    if ( _status  === "ToDo") {
      _updateStatus({key:_key, status:"In Progress"})
    }
    if ( _status  === "In Progress") {
      _updateStatus({key:_key, status:"Done"})
    }
    console.log ("nextStatus: ",_status,_key, status )
  }

  function previousStatus (_key, _status, _updateStatus) {
    console.log("props: ", "key: ", _key, _status, _updateStatus)
    if (_status === "Done") {
      _updateStatus({key:_key, status:"In Progress"})
    }
    if (_status === "In Progress") {
      _updateStatus({key:_key, status:"ToDo"})
    }
    console.log ("nextStatus: ",_status,_key, status )
  }

  return (
    <div className="card">
      <div className="card-top">
        <h1 class="card-header">Card</h1>
      </div>
      <div className="card-body">
        <img src={logo} alt-text="logo"></img>
        <div>{cardId}</div>
      </div>
      <div>
        <p>Task = {taskDescription}</p>
      </div>
      <div>
        <button onClick={() => previousStatus(cardId, status, updateStatus)}>Back</button>
        <button onClick={() => nextStatus(cardId, status, updateStatus) }>Next</button>
        <div>Status: { status }</div>
      </div>
    </div>
  );
};


export default Card;