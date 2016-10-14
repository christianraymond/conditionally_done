const assert = require('assert');

var fromWhere = function(carRegNum){
  if(carRegNum.startsWith('CA')){
    return "Cape Town";
  }
  else if(carRegNum.startsWith('CJ')){
      return "Paarl";
    }
    else if(carRegNum.startsWith('CY')){
      return "Bellville";
    }
    else{
      return "It's from: \n Some other place!";
    }
};
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CY'), 'Bellville');

console.log(fromWhere('GTI 628 983'));
