import React, { Component } from 'react';
import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

import Country from './Country';

@inject('store')
export default class Sorting extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.store.sortByName}>Sort by name</button>
                <button onClick={this.props.store.sortByPopulation}>Sort by population</button>
                <button onClick={this.props.store.sortByArea}>Sort by area</button>
                <button onClick={this.props.store.onlyEnglishSpeaking}>Only english speaking countries</button>
            </div>
        );
    }
}

            