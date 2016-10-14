var autoAlarm = function(tommorow){
  if (tommorow.startsWith('S') && tommorow.endsWith('day')){
    return "Ring,ring, It's \n 8:00am \n wake-up...";
  }
  else{
  return "Ring,ring, It's \n 05:00am \n wake-up...";
  }
};
console.log(autoAlarm('Saturday'));
