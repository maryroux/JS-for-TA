exports.myDateTime = function (username) {
  let today = new Date();
  let time = parseInt(today.getHours());
  let dayType ;
  if (time >= 23 && time < 5) {
    dayType= "Good night, ";
  } else if (time >= 5 && time < 11) {
    dayType = "Good morning, ";
  } else if (time >= 11 && time < 17) {
    dayType = "Good afternoon, ";
  } else {
    dayType = "Good evening, ";
  }
  
  return `Date of request: ${today.toLocaleString("en-US", {timeZone: "Europe/Kiev"})}\n${dayType}${username}`;
};
