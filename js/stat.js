'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(250, 250, 250, 1)';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = ('16px PT Mono');
  ctx.fillText('Ура, вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var InitialY = 240;
  var initialX = 130;
  var indent = 50;
  var barWidth = 40;
  var lineHeight = 10;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var a = Math.random() * (1 - 0.3) + 0.3;
      ctx.fillStyle = 'rgba(0, 0, 255,' + a + ')';
    }
    ctx.fillRect(initialX + indent * i + barWidth * i, InitialY - (times[i] * step), barWidth, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), initialX + indent * i + barWidth * i, InitialY - (times[i] * step) - lineHeight);
    ctx.fillText(names[i], initialX + indent * i + barWidth * i, InitialY + lineHeight * 2);
  }
};
