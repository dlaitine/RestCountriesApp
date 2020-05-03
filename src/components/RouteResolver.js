import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { computed } from 'mobx';

class CountryNode {
    constructor(country, path) {
        this.country = country;
        this.path = path;
    }
}

@inject('store')
@observer
export default class RouteResolver extends Component {

    constructor(props) {
        super(props);
        this.props.store.setTargetCountry("");
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    @computed get
    getCountryNameList() {
        return this.props.store.countries.map(country => {
            return <option value={ country.alpha3Code } key={ country.alpha3Code }>{ country.name }</option>
        });
    }

    getRoute(start, end) {

        if(start === "" || end === "") {
            return "";
        }

        const startCountry = this.props.store.getCountry(start);
        const queue = [new CountryNode(startCountry, startCountry.name)];
        const visited = [startCountry.alpha3Code];
        var maxLoops = 500;

        while(queue.length > 0) {
            var topNode = queue.shift();
            if(topNode.country.alpha3Code === end) {
                return topNode.path;
            }
            topNode.country.borders.map(alpha3Code => {
                if(!visited.includes(alpha3Code)) {
                    const country = this.props.store.getCountry(alpha3Code);
                     queue.push(new CountryNode(country, topNode.path + ' --> ' + country.name));
                     visited.push(alpha3Code);
                }
            });

            maxLoops -= 1;
            if(maxLoops <= 0) {
                break;
            }
        }

        return "Route not found";
    }

    onSelectChange(event) {
        this.props.store.setTargetCountry(event.target.value);
    }

    render() {

        return(
            <div>
                Show path to country:
                <br/>
                <select onChange={ this.onSelectChange } >
                    <option value="">Select country</option>
                    { this.getCountryNameList }
                </select>
                <br/>
                <br/>
                { this.getRoute(this.props.startCountry, this.props.store.targetCountry) }
            </div>
        );
    }
}