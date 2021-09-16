import { Global } from '@emotion/react';
import App from '@layouts/App';
import React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import reset from './reset';
import './assets/fonts/font.css';

const queryClient = new QueryClient();

render(
  <BrowserRouter>
    <Global styles={reset} />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
