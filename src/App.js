import './App.css';
import React from 'react'
import Header from './Header';
import Body from './Body';
import Tasks from './Tasks/tasks';

export default function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Tasks/>
    </div>
  )
}

