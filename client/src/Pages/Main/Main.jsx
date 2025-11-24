import React from 'react';
import "./Main.css";
import Panel from '../../Components/Sidebar/Panel';
import Display from '../PageDisplay/Display';

const Main = () => {
  return (
    <div className='main-container'>
      <Panel />
      <Display />
    </div>
  )
}

export default Main;