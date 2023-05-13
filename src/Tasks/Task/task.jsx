import React, { useState } from 'react'
import { EMPTY_CHECKBOX, MENU } from '../../images'
import './index.css'

export default function Task() {

  const [tasks, setTasks] = useState([
    {
      id: 0,
      content: 'Write Essay',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX, 
    },
    {
      id: 1,
      content: 'One Hour CSS Course Online',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX, 
    },
    {
      id: 2,
      content: 'Buy One Way Tickets to San Fransico',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX, 
    },
    {
      id: 3,
      content: 'Go to Gym',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX, 
    },
    {
      id: 4,
      content: 'Buy Groceries',
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX, 
    }
  ])


  return tasks.map((task)=>(
    <div className='list-of-tasks'>
      <button className='menu'><img src={task.menu} alt="menu"/></button>
      <button className='checkbox'><img src={task.chekbox} alt="chekbox"/></button>
      <p>{task.content}</p>
    </div>
  ))
}
