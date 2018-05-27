const CapitalView = function (capitalContainer) {
  this.capitalContainer = capitalContainer;
};

CapitalView.prototype.render = function (capitals) {
  const capitalList = this.createCapitalList();

  capitals.forEach((capital) => {
    const capitalList = this.createCapitalListItem(capital);
    capitalList.appendChild(capitalListItem);
  })

  this.capitalContainer.appendChild(capitalList);
};

CapitalView.prototype.createCapitalList = function () {
  const capitalList = document.createElement('ul');
  capitalList.classList.add('capitals');
  return capitalList;
};

CapitalView.prototype.createCapitalListItem = function (capital) {
  const capitalListItem = document.createElement('li');
  capitalListItem.classList.add('capital')
  capitalListItem.textContent = capital;
  return capitalListItem;
};

module.exports = CapitalView;
