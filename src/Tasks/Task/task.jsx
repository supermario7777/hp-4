import React from 'react'
import './index.css'

export default function Task({tasks}) {

  console.log(tasks)

  return tasks.map((task)=>(
    <div className='list-of-tasks'>
      <button className='menu'><img src={task.menu} alt="menu"/></button>
      <button className='checkbox'><img src={task.chekbox} alt="chekbox"/></button>
      <p>{task.content}</p>
    </div>
  ))
}
