import React, { useState } from "react";
import './index.css'
import { BACK_TO_DO, DELETE } from "../../Components/images";

export default function Task({ item, key, tasks, setTasks, activeStatus }) {

  const changeStatusToTrash = (id) => {
    const itemToTrash = tasks.find((item) => item.id === id)
    itemToTrash.status = 'trash';
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks([...newTasks, itemToTrash]);
    setIsAddModalVisible(false);
  }

  // const changeStatusToDo = (id) => {
  //   const itemToTrash = tasks.find((item) => item.id === id)
  //   itemToTrash.status = 'trash';
  //   const newTasks = tasks.filter((item) => item.id !== id);
  //   setTasks([...newTasks, itemToTrash]);
  //   setIsAddModalVisible(false);
  // }

  // const deleteForever = (id) => {
  //   const itemToTrash = tasks.find((item) => item.id === id)
  //   itemToTrash.status = 'trash';
  //   const newTasks = tasks.filter((item) => item.id !== id);
  //   setTasks([...newTasks, itemToTrash]);
  //   setIsAddModalVisible(false);
  // }

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isAddModal1Visible, setIsAddModal1Visible] = useState(false);
  const [isAddModal2Visible, setIsAddModal2Visible] = useState(false);



  return (
    <div>
      <div className='list-of-tasks'>
        <button className='menu' onClick={() => {
          if (activeStatus === 'todo') return setIsAddModalVisible(!isAddModalVisible)
          else if (activeStatus === 'done') return setIsAddModal1Visible(!isAddModal1Visible)
          else return setIsAddModal2Visible(!isAddModal2Visible)
        }}><img src={item.menu} alt="menu" /></button>
        <button className='checkbox'><img src={item.chekbox} alt="chekbox" /></button>
        <p>{item.content}</p>
      </div>
      {isAddModalVisible && (
        <div className="modal-delete">
          <button className="delete" onClick={() => changeStatusToTrash(item.id)}><img src={DELETE} alt="delete" /></button>
          <button className="move-to-trash" onClick={() => changeStatusToTrash(item.id)}><p>Move to Trash</p></button>
        </div>
      )}
      {isAddModal1Visible && (
        <div className="done-menu">
          <div style={{display: 'flex', alignItems: 'center', marginLeft:'15px'}}>
            <button className="move-back-todo" onClick={() => changeStatusToTrash(item.id)}><img src={BACK_TO_DO} alt="delete" /></button>
            <button className="move-to-do" onClick={() => changeStatusToTrash(item.id)}><p>Move Back To To Do</p></button>
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginLeft:'15px'}}>
            <button className="delete" onClick={() => changeStatusToTrash(item.id)}><img src={DELETE} alt="delete" /></button>
            <button className="move-to-trash" onClick={() => changeStatusToTrash(item.id)}><p>Move to Trash</p></button>
          </div>
        </div>
      )}
      {isAddModal2Visible && (
        <div className="trash-menu">
        <div style={{display: 'flex', alignItems: 'center', marginLeft:'15px'}}>
          <button className="move-back-todo" onClick={() => changeStatusToTrash(item.id)}><img src={BACK_TO_DO} alt="delete" /></button>
          <button className="move-to-do" onClick={() => changeStatusToTrash(item.id)}><p>Move Back To To Do</p></button>
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginLeft:'15px'}}>
          <button className="delete" onClick={() => changeStatusToTrash(item.id)}><img src={DELETE} alt="delete" /></button>
          <button className="delete-forever" onClick={() => changeStatusToTrash(item.id)}><p>Delete Forever</p></button>
        </div>
      </div>
      )}
    </div>
  )
}
