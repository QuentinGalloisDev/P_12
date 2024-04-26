import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Banner from './Components/Banner';
import SideBar from './Components/SideBar';
import { BrowserRouter } from 'react-router-dom';
import DailyActivity from './Components/DailyActivity';
import HelloUser from './Components/HelloUser'
import Performance from './Components/Performance';
import SessionLength from './Components/SessionLength'
import Score from './Components/Score';
import GalleryUserKeyData from './Components/GalleryUserKeyData';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <BrowserRouter>
        <Banner></Banner>
        <SideBar></SideBar>
        <div className='body'>
          <HelloUser></HelloUser>
          <div className='charts'>
            <DailyActivity></DailyActivity>
            <SessionLength></SessionLength>

            <Performance />
            <Score />
            <App />

          </div>
          <GalleryUserKeyData />

        </div>

      </BrowserRouter>

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
