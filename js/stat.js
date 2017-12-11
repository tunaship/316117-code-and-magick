'use strict';
(function () {
  window.renderStatistics = function (ctx, names, times) {

    drawCloudWithShadow(ctx, 100, 10, 420, 270, 10, 'rgba(0, 0, 0, 0.7)', 'rgba(250, 250, 250, 1)');

    fillText(ctx, 'Ура мы победили!', 130, 40, '#000', '16px', 'PT Mono');
    fillText(ctx, 'Список результатов: ', 130, 60, '#000', '16px', 'PT Mono');

    var histogramHeight = 150;
    var step = histogramHeight / (window.util.getMax(times) - 0);
    var InitialY = 240;
    var initialX = 130;
    var indent = 50;
    var barWidth = 40;
    var lineHeight = 10;

    for (var i = 0; i < times.length; i++) {
      var barColor = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColorString();

      drawBar(ctx, initialX + indent * i + barWidth * i,
          InitialY - (times[i] * step), barWidth, times[i] * step,
          barColor);
      fillText(ctx, Math.round(times[i]), initialX + indent * i + barWidth * i,
          InitialY - (times[i] * step) - lineHeight, '#000', '16px', 'PT Mono');
      fillText(ctx, names[i], initialX + indent * i + barWidth * i, InitialY + lineHeight * 2,
          '#000', '16px', 'PT Mono');
    }

  };

  function getRandomColorString() {
    var red = Math.floor(window.util.getRandom(0, 255));
    var green = Math.floor(window.util.getRandom(0, 255));
    var blue = Math.floor(window.util.getRandom(0, 255));
    return 'rgba(' + red + ',' + green + ',' + blue +
    ',' + window.util.getRandom(0.3, 1) + ')';
  }

  function drawCloudWithShadow(ctx, left, top, width, height, shadow, cloudColor, shadowColor) {
    ctx.fillStyle = cloudColor;
    ctx.fillRect(left + shadow, top + shadow, width, height);
    ctx.fillStyle = shadowColor;
    ctx.fillRect(left, top, width, height);
  }

  function fillText(ctx, text, left, top, fontColor, fontSize, fontType) {
    ctx.fillStyle = fontColor;
    ctx.font = fontSize + ' ' + fontType;
    ctx.fillText(text, left, top);
  }

  function drawBar(ctx, left, top, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(left, top, width, height);
  }
})();

