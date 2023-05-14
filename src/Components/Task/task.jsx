import React, { useState } from "react";
import './index.css'
import { BACK_TO_DO, DELETE } from "../../Components/images";

export default function Task({ item, key, tasks, setTasks, activeStatus }) {

  const changeStatusToTrash = (id) => {
    const itemToTrash = tasks.find((item) => item.id === id)
    itemToTrash.status = 'trash';
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks([...newTasks, itemToTrash]);
    setIsAddModal0Visible(false);
    setIsAddModal1Visible(false);
    setIsAddModal2Visible(false);
  }


  const changeStatusToDo = (id) => {
    const itemToDo = tasks.find((item) => item.id === id)
    itemToDo.status = 'todo';
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks([...newTasks, itemToDo]);
    setIsAddModal0Visible(false);
    setIsAddModal1Visible(false);
    setIsAddModal2Visible(false);
  }

  const deleteForever = (id) => {
    const itemToDelete = tasks.find((item) => item.id === id)
    itemToDelete.status = 'deleted';
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks([...newTasks, itemToDelete]);
    setIsAddModal0Visible(false);
    setIsAddModal1Visible(false);
    setIsAddModal2Visible(false);
  }

  const [isAddModal0Visible, setIsAddModal0Visible] = useState(false);
  const [isAddModal1Visible, setIsAddModal1Visible] = useState(false);
  const [isAddModal2Visible, setIsAddModal2Visible] = useState(false);


  const changeStatusToDone = (id) => {
    const itemToDone = tasks.find((item) => item.id === id)
    itemToDone.status = 'done';
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks([...newTasks, itemToDone]);
    setIsAddModal0Visible(false);
    setIsAddModal1Visible(false);
    setIsAddModal2Visible(false);
  }



  return (
    <div>
      <div className='list-of-tasks'>
        <button className='menu' onClick={() => {
          if (activeStatus === 'todo') return setIsAddModal0Visible(!isAddModal0Visible)
          else if (activeStatus === 'done') return setIsAddModal1Visible(!isAddModal1Visible)
          else return setIsAddModal2Visible(!isAddModal2Visible)
        }}><img src={item.menu} alt="menu" /></button>
        <button className={activeStatus === 'todo' ? 'checkbox' : 'checked-box'} onClick={()=>changeStatusToDone(item.id)}></button>
        <p className={activeStatus === 'todo' ? 'normal' : 'completed'} >{item.content}</p>
      </div>
      {isAddModal0Visible && (
        <div className="modal-delete">
          <button className="delete" onClick={() => changeStatusToTrash(item.id)}><img src={DELETE} alt="delete" /></button>
          <button className="move-to-trash" onClick={() => changeStatusToTrash(item.id)}><p>Move to Trash</p></button>
        </div>
      )}
      {isAddModal1Visible && (
        <div className="done-menu">
          <div style={{display: 'flex', alignItems: 'center', marginLeft:'13px'}}>
            <button className="move-back-todo" onClick={() => changeStatusToDo(item.id)}><img src={BACK_TO_DO} alt="delete" /></button>
            <button className="move-to-do" onClick={() => changeStatusToDo(item.id)}><p>Move Back To To Do</p></button>
          </div>
          <div style={{display: 'flex', alignItems: 'center', marginLeft:'16px'}}>
            <button className="delete" onClick={() => changeStatusToTrash(item.id)}><img src={DELETE} alt="delete" /></button>
            <button className="move-to-trash" onClick={() => changeStatusToTrash(item.id)}><p>Move to Trash</p></button>
          </div>
        </div>
      )}
      {isAddModal2Visible && (
        <div className="trash-menu">
        <div style={{display: 'flex', alignItems: 'center', marginLeft:'13px'}}>
          <button className="move-back-todo" onClick={() => changeStatusToDo(item.id)}><img src={BACK_TO_DO} alt="delete" /></button>
          <button className="move-to-do" onClick={() => changeStatusToDo(item.id)}><p>Move Back To To Do</p></button>
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginLeft:'16px'}}>
          <button className="delete" onClick={() => deleteForever(item.id)}><img src={DELETE} alt="delete" /></button>
          <button className="delete-forever" onClick={() => deleteForever(item.id)}><p>Delete Forever</p></button>
        </div>
      </div>
      )}
    </div>
  )
}
