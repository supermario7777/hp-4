import React from 'react'
import { EMPTY_CHECKBOX, MENU } from '../../images'

export default function Task() {

  const tasks = [
    {
      id: 0,
      content: 'Write Essay',
      status: 'todo'
    },
    {
      id: 1,
      content: 'One Hour CSS Course Online',
      status: 'todo'
    },
    {
      id: 2,
      content: 'Buy One Way Tickets to San Fransico',
      status: 'todo'
    },
    {
      id: 3,
      content: 'Go to Gym',
      status: 'todo'
    },
    {
      id: 4,
      content: 'Buy Groceries',
      status: 'todo'
    }
  ]


  return (
    tasks.map((task)=>{
      <button><img src={MENU} alt="" /></button>
    })
  )
}
