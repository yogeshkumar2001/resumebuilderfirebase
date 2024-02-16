import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import appReducer from './Redux/Reducer';
import { thunk } from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const persistConfig = {
  key: 'resume',
  storage,
}
const persistedReducer = persistReducer(persistConfig, appReducer)
let store = createStore(persistedReducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store)

root.render(
  <GoogleOAuthProvider clientId="726868884824-d02maki4va3ef9olerp62dohpusng05e.apps.googleusercontent.com">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);
