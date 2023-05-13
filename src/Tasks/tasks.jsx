import Task from './Task/task'
import './index.css'
import React, { useState } from 'react'
import { EMPTY_CHECKBOX, MENU } from '../images'
import Body from '../Body'
import {v4} from 'uuid'

export default function Tasks() {

  console.log(v4())

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
      status: 'todo',
      menu: MENU,
      chekbox: EMPTY_CHECKBOX, 
    },
    {
      id: v4(),
      content: 'Go to Gym',
      status: 'todo',
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

  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '64px 90px', gap: '24px'}}>
        <div class = 'to-do-header'>To Do</div>
        <Task tasks={tasks}/>
    </div>
  )
}
