import './App.css';
import Header from './Components/Header';
import { ADD_IMG, EMPTY_CHECKBOX, MENU } from './Components/images'
import { v4 as uuidv4} from 'uuid'
import React, { useState } from 'react'
import Task from './Components/Task/task';


export default function App() {

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const [activeStatus, setActiveStatus] = useState('todo')

  const changeStatus = (status) => {
    setActiveStatus(status)
  }

  // console.log(activeStatus)

  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      content: 'Write Essay',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: uuidv4(),
      content: 'One Hour CSS Course Online',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: uuidv4(),
      content: 'Buy One Way Tickets to San Fransico',
      status: 'done',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: uuidv4(),
      content: 'Go to Gym',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: uuidv4(),
      content: 'Buy Groceries',
      status: 'done',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    },
    {
      id: uuidv4(),
      content: 'Trash',
      status: 'trash',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX,
    }
  ])

  const filteredTasks = tasks.filter((tasks) => tasks.status === activeStatus)

  const headerStatus = (activeStatus) => {
    if(activeStatus === 'todo') return 'To Do';
    else if(activeStatus === 'done') return 'Done';
    else return 'Trash';
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="categories">
          <button className="todo" onClick={()=>changeStatus('todo')} style={headerStatus(activeStatus) === 'To Do'? {color: 'white', background: 'rgba(8, 30, 52, 0.42)'}:{color: '#081E34', background: 'linear-gradient(0deg, rgba(8, 30, 52, 0.05), rgba(8, 30, 52, 0.05)), #F0F0F0'}} >ToDo</button>
          <button className="done" onClick={()=>changeStatus('done')} style={headerStatus(activeStatus) === 'Done'? {color: 'white', background: 'rgba(8, 30, 52, 0.42)'}:{color: '#081E34', background: 'linear-gradient(0deg, rgba(8, 30, 52, 0.05), rgba(8, 30, 52, 0.05)), #F0F0F0'}} >Done</button>
          <button className="trash" onClick={()=>changeStatus('trash')} style={headerStatus(activeStatus) === 'Trash'? {color: 'white', background: 'rgba(8, 30, 52, 0.42)'}:{color: '#081E34', background: 'linear-gradient(0deg, rgba(8, 30, 52, 0.05), rgba(8, 30, 52, 0.05)), #F0F0F0'}} >Trash</button>
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
        <p class='to-do-header'>{headerStatus(activeStatus)}</p>
        {/* <Task filteredTasks={filteredTasks} activeStatus={activeStatus} /> */}
        {
          filteredTasks.map((item, index) =>{
            return <Task item={item} key={index} tasks={tasks} setTasks={setTasks} activeStatus={activeStatus}/>
          })
        }
      </div>
    </div>
  )
}

