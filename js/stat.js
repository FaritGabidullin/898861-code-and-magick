'use strict';

window.renderStatistics = function (ctx, names, times){
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.fillRect(110, 20, 420, 270);
	ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '18px PT Mono';
  ctx.textBaseLine = 'hanging';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);

  var beginPointNames = 150;
  for(var i = 0; i < names.length; i++){
    if(names[i] === 'Вы'){
      var indexYour = i;
    };
    ctx.fillText(names[i], beginPointNames, 270);
    beginPointNames += 90;
  };

  var beginPointTimes = 150;
  var maxValue = times[0];
  for(var i = 0; i < times.length; i++){
    if(maxValue < times[i]){
      maxValue = times[i];
    };
  };

  for(var i = 0; i < times.length; i++){
    if(indexYour === i){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else{
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    };
    var newTimeValue = times[i] * 150 / maxValue
    ctx.fillRect(beginPointTimes, 250, 40, - newTimeValue);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(Math.round(times[i]), beginPointTimes, 245 - newTimeValue);
    beginPointTimes += 90;
  };
};
