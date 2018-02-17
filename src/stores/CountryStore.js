import { observable, action, computed } from 'mobx';
import axios from 'axios';

export default class CountryStore {

    @observable countries = [];

    @action
    getCountries() {
        const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';
        axios.get(COUNTRIES_URL)
            .then(response => {
                this.countries = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }
}