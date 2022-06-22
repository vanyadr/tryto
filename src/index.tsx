import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { REACT_APP_CONTAINER_ID } from 'const';

const container = document.getElementById(REACT_APP_CONTAINER_ID);

if (!container)
  throw new Error(
    `Не найден контейнер приложения <div id="${REACT_APP_CONTAINER_ID}"></div>`,
  );

createRoot(container).render(<StrictMode></StrictMode>);
