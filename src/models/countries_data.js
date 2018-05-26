const PubSub = require('../helpers/pub_sub.js');

const CountriesData = function () {

this.filters = [
  {
    filterName: 'all',
    subfilters: ['all']
  },
  {
    filterName: 'name',
    subfilters: ['uk', 'france', 'germany', 'italy', 'spain', 'austria', 'greece', 'russia']
  },
  {
    filterName: 'fullname',
    subfilters: ['united?fullText=true', 'uk?fullText=true','france?fullText=true', 'germany?fullText=true', 'italy?fullText=true', 'spain?fullText=true', 'austria?fullText=true', 'greece?fullText=true', 'russia?fullText=true']
  },
  {
    filterName: 'currency',
    subfilters: ['cny', 'cop', 'bam', 'bdt', 'azn', 'hkd', 'jpy']
  },
  {
    filterName: 'language',
    subfilters: ['en', 'fr', 'de', 'it', 'pt', 'mo', 'mt', 'uk']
  },
  {
    filterName: 'capital',
    subfilters: ['london', 'paris', 'berlin', 'rome', 'madrid', 'vienna', 'athens', 'moscow' ]
  },
  {
    filterName: 'region',
    subfilters: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  },
  {
    filterName: 'regionalbloc',
    subfilters: ['ue','efta','caricom','pa','au','usan','eeu','al','asean','cais','cefta','nafta','saarc']
  }
  ];
}

CountriesData.prototype.bindEvents = function () {

  PubSub.publish("Categories:all-data-ready", this.filters);
}

module.exports = CountriesData;
