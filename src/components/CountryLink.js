import React, { Component } from 'react';


const CountryLink = props => {
    return (
    <li>
        <a onClick={props.onClick} >{ props.country.name }</a>
    </li>
    );
}

export default CountryLink;

