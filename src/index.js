import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router, Route } from 'react-router';
import CountryStore from './stores/CountryStore';
import App from './components/App';


ReactDOM.render(
            <App />,
    document.querySelector('.app'));