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
    @observable onlyEnglishSpeakingFilter = false;
    @observable targetCountry = "";
    sortedBy = "";

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

    getCountry(alpha3Code) {
        return this.countries.find(country => {
            return (country.alpha3Code === alpha3Code);
        });     
    }

    @action
    setTargetCountry(alpha3Code) {
        this.targetCountry = alpha3Code;
    }

    @action
    sortByName() {
        if(this.sortedBy === "name") {
            this.countries = this.countries.reverse();
            return;
        }

        this.countries = this.countries.sort((a, b) => {
            if(a.name < b.name)
                return -1;
            else if(a.name > b.name)
                return 1;
            else
                return 0;
        });

        this.sortedBy = "name";
    }

    @action
    sortByPopulation() {
        if(this.sortedBy === "population") {
            this.countries = this.countries.reverse();
            return;
        }

        this.countries = this.countries.sort((a, b) => {
            if(a.population > b.population)
                return -1;
            else if(a.population < b.population)
                return 1;
            else
                return 0;
        });

        this.sortedBy = "population";
    }

    @action
    sortByArea() {
        if(this.sortedBy === "area") {
            this.countries = this.countries.reverse();
            return;
        }

       this.countries = this.countries.sort((a, b) => {
            if(a.area > b.area)
                return -1;
            else if(a.area < b.area)
                return 1;
            else
                return 0;
        });

        this.sortedBy = "area";
    }

    @action
    onlyEnglishSpeaking() {
        this.onlyEnglishSpeakingFilter = !this.onlyEnglishSpeakingFilter;
    }
}