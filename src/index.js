import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { ThemeProvider } from '@emotion/react'
import theme from 'assets/theme/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
      <BrowserRouter basename="/test">
        <App /> 
      </BrowserRouter>    
    </ThemeProvider> 
  </React.StrictMode>
);
