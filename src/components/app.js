import React, { Component } from 'react';

import CountryList from './CountryList';

export default class App extends Component {

    componentWillMount() {
        this.props.store.getCountries();
    }

    render() {
        return(
        <div>
            <button onClick={this.props.store.sortByName}>Sort by name</button>
            <button onClick={this.props.store.sortByPopulation}>Sort by population</button>
            <button onClick={this.props.store.sortByArea}>Sort by area</button>
            <button onClick={this.props.store.onlyEnglishSpeaking}>Only english speaking countries</button>
            <CountryList store={this.props.store} />
        </div>
        );
    }
}