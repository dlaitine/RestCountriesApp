import React, { Component } from 'react';
import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

import Country from './Country';
import CountryListLink from './CountryListLink';

@inject('store', 'routing')
@observer
export default class CountryList extends Component {

    getCountries() {
        const { push } = this.props.routing;

        var countries = this.props.store.countries.map(country => {
                   return <CountryListLink country={ country } key={ country.name } onClick={() => push( country.alpha3Code )} />
        });

        return (
            <ul>
                { countries }
            </ul>
        );
    }

    render() {
        return (
            <div>
                { this.getCountries() }
            </div>
        );
    }
}