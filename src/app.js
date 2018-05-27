const CountriesData = require('./models/countries_data.js');
const CategoriesView = require('./views/categories_view.js');
const CurrencyView = require('./views/currency_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const categoriesView = new CategoriesView();
  categoriesView.bindEvents();
  categoriesView.setUpListeners();

  const countriesData = new CountriesData();
  countriesData.bindEvents();
  countriesData.setUpCurrencyListener();

  const currencyView = new CurrencyView();
  currencyView.setUpListenerForData();
  currencyView.displayCurrencyDetails();

});
