import "./styles.css";
import React from "react";
import {ADD_IMG} from '../images/index'

export default function Body() {
  return (
    <div className="body">
      <div className="categories">
        <button className="todo">ToDo</button>
        <button className="done">Done</button>
        <button className="trash">Trash</button>
      </div>
      <div>
        <button className="add-new-task"><img src={ADD_IMG} stryle={{width: '24px', height: '24px'}}/></button>
      </div>
    </div>
  );
}
