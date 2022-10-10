import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GithubProvider } from './context/github_context/GithubContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubProvider>
      <Router>
        <App />
      </Router>
    </GithubProvider>
  </React.StrictMode>
);
