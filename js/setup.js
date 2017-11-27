'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

function getRandom(arr) {
  for (var j = 0; j < arr.length; j++) {
    var rand = Math.floor(Math.random() * arr.length);
  }
  return arr[rand];
}

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function generateWizardData() {
  var wizardArr = [];
  for (var i = 0; i < 4; i++) {
    var wizard = {};
    wizard.name = getRandom(firstNames) + ' ' + getRandom(lastNames);
    wizard.coatColor = getRandom(coatColors);
    wizard.eyesColor = getRandom(eyesColors);
    wizardArr[i] = wizard;
  } return wizardArr;
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

var wizardsList = generateWizardData();
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

renderWizardBlock(similarListElement, wizardsList, renderWizard, similarWizardTemplate);

document.querySelector('.setup-similar').classList.remove('hidden');

