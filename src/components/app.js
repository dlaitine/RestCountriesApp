import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import CountryList from './CountryList';
import Sorting from './Sorting';

export default class App extends Component {

    componentWillMount() {
        this.props.store.getCountries();
    }

    render() {
        return(
        <Provider store={this.props.store}>
            <div>
                <Sorting />
                <CountryList />
            </div>
        </Provider>
        );
    }
}