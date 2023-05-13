import React from 'react'
import Task from './Task/task'
import './index.css'

export default function Tasks() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '64px 90px', gap: '24px'}}>
        <div class = 'to-do-header'>To Do</div>
        <Task/>
    </div>
  )
}
