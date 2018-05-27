const PubSub = require('../helpers/pub_sub.js');

const CategoriesView = function () {
  this.currency_select = document.querySelector('select#filter-currencies');
  this.capital_select = document.querySelector('select#filter-capitals');
}

CategoriesView.prototype.bindEvents = function () {
  PubSub.subscribe('Currencies:all-data-ready', (event) => {
    this.populateSelectMenus(event.detail, this.currency_select);
  });
  PubSub.subscribe('Capitals:all-data-ready', (event) => {
    this.populateSelectMenus(event.detail,this.capital_select);
  });
}

CategoriesView.prototype.populateSelectMenus = function (data, dom_select) {
    data.forEach((element) => {
      const option = document.createElement('option');
      option.textContent = element;
      dom_select.appendChild(option);
    })
};

CategoriesView.prototype.setUpListeners = function () {
  const currencySelect = this.currency_select;
  currencySelect.addEventListener('change', (event) => {
    const currencySelected = event.target.value;
    PubSub.publish('Currency:currency-selected', currencySelected);
  })

  const capitalSelect = this.capital_select;
  capitalSelect.addEventListener('change', (event) => {
    const capitalSelected = event.target.value;
    PubSub.publish('Capital:capital-selected', capitalSelected);
  })

};

module.exports = CategoriesView;
