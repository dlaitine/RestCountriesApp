import React, { Component } from 'react';
import { observer } from 'mobx-react';

const Country = observer (({ country }) => (
    <li>{country.name}</li>
));

export default Country;