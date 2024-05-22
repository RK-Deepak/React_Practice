import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Corousel from './components/Corousel';
import StarRating from './components/StarRating';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import Pagination from './components/Pagination';
import CountDown from './components/CountDown';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <Corousel/>
    // <StarRating/>
    // <TodoList/>
    // <Timer/>
    // <Pagination/>
    <CountDown/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
