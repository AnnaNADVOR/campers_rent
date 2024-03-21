import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react'
import App from 'components/App';
import { store } from './redux/store';
import theme from 'assets/theme/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}> 
        <BrowserRouter basename="/test">
          <App /> 
        </BrowserRouter>    
      </ThemeProvider> 
    </Provider>
  </React.StrictMode>
);
