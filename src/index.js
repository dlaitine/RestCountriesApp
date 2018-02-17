import React from 'react';
import ReactDOM from 'react-dom';

import CountryStore from './stores/CountryStore';
import App from './components/App';

const store = new CountryStore();

ReactDOM.render(
        <App store={store} />,
    document.querySelector('.app'));