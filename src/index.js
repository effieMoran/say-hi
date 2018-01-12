import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Form from './containers/Form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Form />,
  document.getElementById('root'));
registerServiceWorker();
