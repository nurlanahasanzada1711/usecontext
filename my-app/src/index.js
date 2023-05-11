import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { Card } from '@mui/material';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
      <Card/>
    </StyledEngineProvider>
  </React.StrictMode>
);

