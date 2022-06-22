import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';


const container = document.getElementById('app')

if (!container) throw new Error('Не найден контейнер проекта!')

createRoot(
   container
).render(
  <StrictMode/>
);


