import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Country from './Country';
import CountryLink from './CountryLink';

@inject('store', 'routing')
@observer
export default class CountryList extends Component {

    getCountries() {
        const { push } = this.props.routing;

        const countries = this.props.store.filteredCountries.map(country => {
            return <CountryLink country={ country } key={ country.name } onClick={() => push( country.alpha3Code )} />
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