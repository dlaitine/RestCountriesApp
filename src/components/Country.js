import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action, computed } from 'mobx';

import CountryListLink from './CountryListLink';

@inject('store', 'routing')
@observer
export default class Country extends Component {
    
    @computed get getSelectedCountry() {
        return this.props.store.countries.find(country => {
                return (country.alpha3Code == this.props.match.params.countryCode);
            });     
    }

    getNeighbors(borders) {

        const { push } = this.props.routing;
        const countries = this.props.store.countries;

        const neighborCountries = borders.map(border => {
            return countries.find(country => {
                return (country.alpha3Code == border);
            });            
        });
 
        return (neighborCountries.map(neighborCountry => {
            return <CountryListLink country={ neighborCountry } key={ neighborCountry.alpha3Code } onClick={() => {push( neighborCountry.alpha3Code )}} />
        }));
    }

    
    render() {
        const country = this.getSelectedCountry;

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
            </div>
        );
    }
}