import React, { Component } from 'react';


const CountryListLink = props => {
    return (
    <li>
        <a onClick={props.onClick} >{ props.country.name }</a>
    </li>
    );
}

export default CountryListLink;

