var transportFee = function(){
  if('Mornig shift'){
    return 'R'+20;
  }
  if('Night shift'){
    return 'R'+10;
  }
  else{
    return 'Get transport at work';
  }
}
console.log(transportFee());

const assert = require('assert');

var transportFee = function(fee){
  if(fee.startsWith('M')){
    return 'R'+20;
  }
  if(fee.startsWith('A')){
    return 'R'+10;
  }
  else{
    return "Night shift pay nothing"
  }
};
assert.equal(transportFee('Morning shift'), 'R'+20);
assert.equal(transportFee('Afternont shift'), 'R'+10);
console.log(transportFee('C'));
