const assert = require('assert');

var  weekOrWeekend = function(day){
  if(day.startsWith('S') && day.endsWith('day')){
    return 'weekend';
  }
  else{
    return 'week';
  }
};

assert.equal(weekOrWeekend('Sunday'), 'weekend');
assert.equal(weekOrWeekend('Wednesday'), 'week');
console.log (weekOrWeekend('Monday'));
