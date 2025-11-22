import React from 'react';
import "./Main.css";
import Panel from '../Components/Sidebar/Panel';
import Display from './MainDisplay/Display';

const Main = () => {
  return (
    <div className='main-container'>
      <Panel />
      <Display />
    </div>
  )
}

export default Main;