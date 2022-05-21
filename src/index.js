import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import IndexHeader from '../src/components/IndexHeader/index.tsx';
import LeftMenu from '../src/components/LeftMenu/index.tsx';
import  '../src/assets/static/iconfont.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='app-content'>
    <LeftMenu />
    <div className='content-bar'>
      <IndexHeader />
    </div>
   </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
