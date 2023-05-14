import React, { useState } from "react";
import './index.css'
import { DELETE } from "../../Components/images";

export default function Task({ item, key, tasks, setTasks, activeStatus}) {

  const changeStatusToTrash = (id) => {
    const itemToTrash = tasks.find((item) => item.id === id)
    itemToTrash.status = 'trash';
    const newTasks = tasks.filter((item)=>item.id !== id);
    setTasks([...newTasks, itemToTrash]);
    setIsAddModalVisible(false);
  }

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  // const isVisible = (activeStatus) => {
  //   if(activeStatus === 'todo')
  // }

  return (
    <div>
      <div className='list-of-tasks'>
        <button className='menu' onClick={() => setIsAddModalVisible(!isAddModalVisible)}><img src={item.menu} alt="menu" /></button>
        <button className='checkbox'><img src={item.chekbox} alt="chekbox" /></button>
        <p>{item.content}</p>
      </div>
      {isAddModalVisible && (
        <div className="modal-delete">
          <button className="delete" onClick={()=>changeStatusToTrash(item.id)}><img src={DELETE} alt="delete" /></button>
          <button className="move-to-trash" onClick={()=>changeStatusToTrash(item.id)}><p>Move to Trash</p></button>
        </div>
      )}
    </div>
  )
}
