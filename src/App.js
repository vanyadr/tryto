
import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import { RouterSist} from "./components/Router"

// const [tasks, setTasks] = useState([])
//
// const AddState = (props) => {
//     setTasks([props])
// }

const App = () => {
  return (
    <BrowserRouter>
      <RouterSist/>
    </BrowserRouter>
  );
}

export default App;
