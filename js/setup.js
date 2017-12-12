'use strict';
(function () {

  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardsList = generateWizardData();
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var fireBall = setup.querySelector('.setup-fireball-wrap');

  function generateWizardData() {
    var wizardArr = [];
    for (var i = 0; i < 4; i++) {
      var wizard = {};
      wizard.name = FIRST_NAMES[window.util.getRandom(0, FIRST_NAMES.length)] + ' '
      + LAST_NAMES[window.util.getRandom(0, LAST_NAMES.length)];
      wizard.coatColor = COAT_COLORS[window.util.getRandom(0, COAT_COLORS.length)];
      wizard.eyesColor = EYES_COLORS[window.util.getRandom(0, EYES_COLORS.length)];
      wizardArr[i] = wizard;
    }
    return wizardArr;
  }

  function renderWizard(wizard, templateElement) {
    var wizardElem = templateElement.cloneNode(true);
    wizardElem.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElem;
  }

  function renderWizardBlock(listElement, wizardData, renderFunction, templateElement) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardData.length; i++) {
      fragment.appendChild(renderFunction(wizardData[i], templateElement));
    }
    listElement.appendChild(fragment);
  }

  renderWizardBlock(similarListElement, wizardsList, renderWizard, similarWizardTemplate);

  document.querySelector('.setup-similar').classList.remove('hidden');

  function changeWizardElementColor(wizardElemClass, arr) {
    wizardElemClass.style.fill = arr[window.util.getRandom(0, arr.length)];
  }

  wizardCoat.addEventListener('click', function () {
    changeWizardElementColor(wizardCoat, COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function () {
    changeWizardElementColor(wizardEyes, EYES_COLORS);
  });

  fireBall.addEventListener('click', function () {
    fireBall.style.background = FIREBALL_COLORS[window.util.getRandom(0, FIREBALL_COLORS.length)];
  });

})();
