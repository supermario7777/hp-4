import "./styles.css";
import React, { useState } from "react";
import {ADD_IMG} from '../images/index'

export default function Body() {

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);


  return (
    <div className="body">
      <div className="categories">
        <button className="todo">ToDo</button>
        <button className="done">Done</button>
        <button className="trash">Trash</button>
      </div>
      <div style={{display: 'flex', gap: '25px'}}>
        {isAddModalVisible && (<div className="modal">
          <p>Add New To Do</p>
          <textarea className="modal-text-area" placeholder="Your text"></textarea>
          <button className="modal-add-button">Add</button>
        </div>)}
        <button className="add-new-task" onClick={() => setIsAddModalVisible(!isAddModalVisible)}><img src={ADD_IMG} stryle={{width: '24px', height: '24px'}}/></button>
      </div>
    </div>
  );
}
