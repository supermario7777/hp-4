import React, { useState } from "react";
import './index.css'
import { DELETE } from "../../Components/images";

export default function Task({ filteredTasks, currentStatus }) {

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  return filteredTasks.map((task) => (
    <div>
      <div className='list-of-tasks'>
        <button className='menu' onClick={() => setIsAddModalVisible(!isAddModalVisible)}><img src={task.menu} alt="menu" /></button>
        <button className='checkbox' onClick={() => setIsAddModalVisible(!isAddModalVisible)}><img src={task.chekbox} alt="chekbox" /></button>
        <p>{task.content}</p>
      </div>
      {isAddModalVisible && (
        <div className="modal-delete">
        <button className="delete"><img src={DELETE} alt="delete" /></button>
        <button className="move-to-trash"><p>Move to Trash</p></button>
      </div>
      )}
      
    </div>
  ))
}
