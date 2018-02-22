import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';

import CountryLink from './CountryLink';
import RouteResolver from './RouteResolver';

@inject('store', 'routing')
@observer
export default class Country extends Component {
    
    getNeighbors(borders) {
        const { push } = this.props.routing;

        const neighborCountries = borders.map(border => {
            return this.props.store.getCountry(border);         
        });
 
        return (neighborCountries.map(neighborCountry => {
            return <CountryLink country={ neighborCountry } key={ neighborCountry.alpha3Code } onClick={() => {push( neighborCountry.alpha3Code )}} />
        }));
    }

    
    render() {
        const country = this.props.store.getCountry(this.props.match.params.countryCode);

        if(country == undefined || Object.keys(country).length === 0) {
            return <div>Country not found</div>;
        }

        return(
            <div>
                <h2>Name: { country.name } </h2>
                <img className="flag" src={ country.flag } />
                <br/>
                <h2>Neighbors:</h2>
                <ul>
                    { country.borders.length == 0 ? "No neighboring countries" : this.getNeighbors( country.borders ) }
                </ul>
                <br/>
                <RouteResolver startCountry={ country.alpha3Code } />
            </div>
        );
    }
}