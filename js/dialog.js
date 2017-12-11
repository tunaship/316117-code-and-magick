'use strict';
(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardNameInput = document.querySelector('.setup-user-name');


  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onEscPress);
  }

  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();

  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closePopup);
  });

  function onEscPress(evt) {
    if (evt.target !== wizardNameInput) {
      window.util.isEnterEvent(evt, closePopup);
    }
  }
})();
