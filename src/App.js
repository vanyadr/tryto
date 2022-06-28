
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import { RouterSist} from "./components/Router"

function App() {
  return (
    <BrowserRouter>
      <RouterSist/>
    </BrowserRouter>
  );
}

export default App;
