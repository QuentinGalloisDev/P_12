import './App.css';
import Banner from './Components/Banner';
import { useState, useEffect } from 'react'
import SessionLengthCompo from './Components/SessionLength'
import Score from './Service/Score';
import Performance from './Service/Performance';
import DailyActivity from './Service/DailyActivity';

export default function App() {



  return (
    <div>
      {/* <div><SessionLength /> </div> */}
      {/* <div><Score /></div> */}
      <div><Performance /></div>
      <div><DailyActivity /></div>
      <div><SessionLengthCompo /></div>
    </div>


  )
}


