const PubSub = require('../helpers/pub_sub.js');

const CountriesView = function (container) {
  this.container = container;
}

CountriesView.prototype.bindEvents = function () {
  PubSub.subscribe('Categories:all-data-ready', (event) => {
    this.render(event.detail);
  });
}

CountriesView.prototype.render = function (filters) {

  filters.forEach((filter) => {
    const filterCategory = document.createElement('p');
    filterCategory.textContent = filter.filterName;
    this.container.appendChild(filterCategory);

    const select = document.createElement('select')
    filter.subfilters.forEach((subfilter, index) => {
      const option = document.createElement('option');
      option.textContent = subfilter;
      option.value = index;
      select.appendChild(option);
    })
    this.container.appendChild(select);
  })
}


module.exports = CountriesView;
