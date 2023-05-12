import React from 'react'
import Task from './Task/task'

export default function Tasks() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '64px 90px', gap: '24px'}}>
        <div>To Do</div>
        <Task/>
    </div>
  )
}
