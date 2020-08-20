import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store, {persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';

// if( window.location.search === '?debug' ){
  // persistor.purge();
// }

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);
