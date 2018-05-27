const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const CountriesData = function () {
  this.currencies = ['cny', 'cop', 'bam', 'bdt', 'azn', 'hkd', 'jpy'];
  this.capitals = ['london', 'paris', 'berlin', 'rome', 'madrid', 'vienna', 'athens', 'moscow'];
}

CountriesData.prototype.bindEvents = function () {
  PubSub.publish("Currencies:all-data-ready", this.currencies);
  PubSub.publish("Capitals:all-data-ready", this.capitals);
}

CountriesData.prototype.setUpCurrencyListener = function () {
    PubSub.subscribe('Currency:currency-selected', (event) => {
      this.getCurrencyData(event.detail);
 })
}

CountriesData.prototype.getCurrencyData = function (data) {
  const url = `https://restcountries.eu/rest/v2/currency/${data}`;
  const requestHelper = new Request(url);
  requestHelper.get((data) => {
  PubSub.publish('Currency:api-data', data)});
 }



module.exports = CountriesData;
