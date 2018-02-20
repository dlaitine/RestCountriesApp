import { observable, action } from 'mobx';


export default class RouteResolverStore {
    constructor() {
        this.setCountry = this.setCountry.bind(this);
    }

    @observable country = "";

    @action
    setCountry(code) {
        this.country = code;
    }
}