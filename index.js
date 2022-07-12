import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStateProvider} from './globalState/GlobalDataProvider';
import { initialState, reducer } from './globalState/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <GlobalStateProvider reducer={reducer} initialState={initialState}>
       <App />
   </GlobalStateProvider>
);

