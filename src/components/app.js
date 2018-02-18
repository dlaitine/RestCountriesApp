import React, { Component } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { Router, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import { computed } from 'mobx';

import Country from './Country';
import Main from './Main';

import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import CountryStore from '../stores/CountryStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const countryStore = new CountryStore();

const stores = {
    routing: routingStore,
    store: countryStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);


@observer
export default class App extends Component {

    componentWillMount() {
        countryStore.getCountries();
    }

    render() {
        return(
            <Provider {...stores}>
                <Router history={history}>
                    <div>
                        <Route exact path = "/" component={Main} />
                        <Route path = "/:countryCode" component={Country} />
                     </div>
                </Router>
            </Provider>
        );
    }
}