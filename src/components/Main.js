import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

import Sorting from './Sorting';
import CountryList from './CountryList';

@inject('store', 'routing')
@observer
export default class Main extends Component {
    render() { 
        return(
        <div>
            <Sorting />
            <CountryList />
        </div>
        );
    }
}