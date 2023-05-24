/*************************************/
/*****       IMPORTACIONES       *****/
/*************************************/
import React from 'react'; // React para crear componentes.
import ReactDOM from 'react-dom'; // ReactDOM para renderizar componentes en el DOM.
import './index.css'; 
import App from './App'; 
import { Provider } from 'react-redux'; // Provider para acceder al store de Redux.
import { store } from './redux/store'; // store de Redux

ReactDOM.render( 
  <Provider store={store}> {/* paso el store de Redux como prop. */}
    <React.StrictMode> 
      <App /> 
    </React.StrictMode>
  </Provider>,
  document.getElementById('root') 
);



