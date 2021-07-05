import React from "react";
import logo from './logo.svg';


const Card = (props) => {
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
    </div>
  );
};


export default Card;