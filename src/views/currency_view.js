const PubSub = require('../helpers/pub_sub.js');

const CurrencyView = function() {
}

CurrencyView.prototype.setUpListenerForData = function () {
  PubSub.subscribe('Currency:api-data', (event) => {
    this.displayCurrencyDetails(event.detail[0]);
  })
};

CurrencyView.prototype.displayCurrencyDetails = function (data) {
  console.log(data);
  const container = document.querySelector('ul#currencies-display');

  const name = document.createElement('p');
  name.textContent = data['name'];
  container.appendChild(name);

  const currency= document.createElement('p');
  currenciesFromAPI = data['currencies'];
  currenciesFromAPIName = currenciesFromAPI[0];
  currency.textContent = currenciesFromAPIName.name;
  container.appendChild(currency);
  
};

module.exports = CurrencyView;
