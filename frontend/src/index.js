import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
// Import PrimeReact core styles
import 'primereact/resources/themes/saga-blue/theme.css';  // or any other theme
// import 'primereact/resources/primereact.min.css';           // core styles
import 'primeicons/primeicons.css';                         // icons

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
