import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Sorting extends Component {
    render() {
        return(
            <div>
                <button onClick={ this.props.store.sortByName }>Sort by name</button>
                <button onClick={ this.props.store.sortByPopulation }>Sort by population</button>
                <button onClick={ this.props.store.sortByArea }>Sort by area</button>
                <button onClick={ this.props.store.onlyEnglishSpeaking }>Only english speaking countries: { this.props.store.onlyEnglishSpeakingFilter.toString() }</button>
            </div>
        );
    }
}

            