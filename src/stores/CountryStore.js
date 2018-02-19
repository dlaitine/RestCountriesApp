import { observable, action, computed } from 'mobx';
import axios from 'axios';

export default class CountryStore {
    constructor() {
        this.sortByName = this.sortByName.bind(this);
        this.sortByPopulation = this.sortByPopulation.bind(this);
        this.sortByArea = this.sortByArea.bind(this);
        this.onlyEnglishSpeaking = this.onlyEnglishSpeaking.bind(this);
    }

    @observable countries = [];
    @observable selectedCountryCode = "";
    @observable onlyEnglishSpeakingFilter = false;

    @action
    fetchCountries() {
        const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';
        axios.get(COUNTRIES_URL)
            .then(response => {
                this.countries = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }

    @computed get
    filteredCountries() {
        if(!this.onlyEnglishSpeakingFilter) {
            return this.countries;
        }
        else {
            return this.countries.filter(country => {
                for(var i = 0; i < country.languages.length; i++) {
                    if(country.languages.get(i).iso639_1 === "en") {
                        return true;
                    }
                    else {
                        return false;
                    }
                } 
            });
        }
    }

    @action
    sortByName() {
        this.countries = this.countries.sort((a, b) => {
            if(a.name < b.name)
                return -1;
            else if(a.name > b.name)
                return 1;
            else
                return 0;
        });
    }

    @action
    sortByPopulation() {
        this.countries = this.countries.sort((a, b) => {
            if(a.population > b.population)
                return -1;
            else if(a.population < b.population)
                return 1;
            else
                return 0;
        });
    }

    @action
    sortByArea() {
       this.countries = this.countries.sort((a, b) => {
            if(a.area > b.area)
                return -1;
            else if(a.area < b.area)
                return 1;
            else
                return 0;
        });
    }

    @action
    onlyEnglishSpeaking() {
        this.onlyEnglishSpeakingFilter = !this.onlyEnglishSpeakingFilter;
    }
}