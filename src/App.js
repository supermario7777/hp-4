import './App.css';
import Header from './Components/Header';
// import Body from './Body';
import { ADD_IMG, EMPTY_CHECKBOX, MENU } from './Components/images'
import { v4 } from 'uuid'
import React, { useState } from 'react'
import Task from './Tasks/Task/task';

export default function App() {

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [activeStatus, setActiveStatus] = useState('todo')

  const handleClick = () => {
    changeStatus(activeStatus === 'todo' ? 'todo' : 'done')
  }

  const [tasks, setTasks] = useState([
    {
      id: v4(),
      content: 'Write Essay',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: v4(),
      content: 'One Hour CSS Course Online',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: v4(),
      content: 'Buy One Way Tickets to San Fransico',
      status: 'done',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: v4(),
      content: 'Go to Gym',
      status: 'done',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: v4(),
      content: 'Buy Groceries',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    }
  ])

  const changeStatus = (status) => {
    setActiveStatus(status)
  }

  const filteredTasks = tasks.filter((tasks) => tasks.status === activeStatus)


  return (
    <div>
      <Header />
      <div className="body">
        <div className="categories">
          <button className="todo" onClick={handleClick} >ToDo</button>
          <button className="done" onClick={handleClick} >Done</button>
          <button className="trash" onClick={handleClick} >Trash</button>
        </div>
        <div style={{ display: 'flex', gap: '25px' }}>
          {isAddModalVisible && (<div className="modal">
            <p>Add New To Do</p>
            <textarea className="modal-text-area" placeholder="Your text"></textarea>
            <button className="modal-add-button">Add</button>
          </div>)}
          <button className="add-new-task" onClick={() => setIsAddModalVisible(!isAddModalVisible)}><img alt="add-btn" src={ADD_IMG} stryle={{ width: '24px', height: '24px' }} /></button>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '64px 90px', gap: '24px' }}>
        <div class='to-do-header'>{activeStatus === 'todo' ? 'To Do' : 'Done'}</div>
        <Task filteredTasks={filteredTasks} activeStatus={activeStatus} />
      </div>
    </div>
  )
}

