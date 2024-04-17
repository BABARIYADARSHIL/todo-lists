import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router ,Route, Routes} from "react-router-dom";
import NewToDo from './NewToDO';


ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" element= {<App />}></Route>
    <Route path="/NewToDo" element= {<NewToDo />}></Route>
    </Routes>
  </Router>,document.getElementById("root")
);
