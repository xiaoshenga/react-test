import React from 'react';
import ReactDOM from 'react-dom';
import App3 from './App3';
import store from './store'
import {Provider} from 'react-redux'

const App = (
    <Provider store = {store}>
        <App3/>
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
