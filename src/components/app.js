import React, { Component } from 'react';

import CountryList from './CountryList';

export default class App extends Component {

    componentWillMount() {
        this.props.store.getCountries();
    }

    render() {
        return(<CountryList store={this.props.store} />);
    }
}