var weekOrWeekend = function(day){
  if(day.startsWith('S') && day.endsWith('day')){
    return "It's:\nWeeked";
  }
    else{
      return "It's:\nWeekday.";
  }
};
var chooseDay = weekOrWeekend;
console.log(chooseDay("Saturday."));
