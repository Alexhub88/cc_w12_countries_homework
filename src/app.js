const CountriesData = require('./models/countries_data.js');
const CountriesView = require('./views/countries_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const categoriesList = document.querySelector('ul#filter-category');
  const countriesView = new CountriesView(categoriesList)
  countriesView.bindEvents();

  const countriesData = new CountriesData();
  countriesData.bindEvents();
});
