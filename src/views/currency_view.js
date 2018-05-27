const PubSub = require('../helpers/pub_sub.js');

const CurrencyView = function() {
}

CurrencyView.prototype.setUpListenerForData = function () {
  PubSub.subscribe('Currency:api-data', (event) => {
    this.displayCurrencyDetails(event.detail[0]);
    console.log(event.detail[0]);
  })
};

CurrencyView.prototype.displayCurrencyDetails = function (data) {
  console.log(data);
  const container = document.querySelector('ul#currencies-display');

  const name = document.createElement('p');
  name.textContent = data['name'];
  container.appendChild(name);

  const capital= document.createElement('p');
  capital.textContent = data['capital'];
  container.appendChild(capital);

  const currency= document.createElement('p');
  currenciesFromAPI = data['currencies'];
  console.log(currenciesFromAPI);
  currenciesFromAPIName = currenciesFromAPI[0];
  currency.textContent = currenciesFromAPIName.name;
  container.appendChild(currency);
};

module.exports = CurrencyView;
