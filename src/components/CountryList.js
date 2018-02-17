import React, { Component } from 'react';
import { observable, action, computed } from 'mobx';
import { observer, inject } from 'mobx-react';

import Country from './Country';

@inject('store')
@observer
export default class CountryList extends Component {

    getCountries() {
          var countries = this.props.store.countries.map(country => {
                   return <Country key={country.name} country = {country} />;
        });

        return (
            <ul>{ countries }</ul>
        );
    }

    render() {
      
        return (<div>{ this.getCountries() }</div>);

    }
}