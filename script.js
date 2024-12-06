const newDayButton = document.getElementById('newDay');
const dayInput = document.getElementById('day');
const integerInput = document.getElementById('integer');
const cycle = document.getElementById('cycle')
const cycler = document.getElementById('cycler');
const weekDayCycler = document.getElementById('weekDayCycler');
const weekDayCycle = document.getElementById('weekDayCycle');

newDayButton.addEventListener('click', () => {
  const day = parseFloat(dayInput.value)-1; //-1 for switch index
  const integer = parseFloat(integerInput.value);


  const dayAbsoluteDifferenceMod = Math.abs(((day+integer)-7*Math.floor((day + integer)/7)))% 7; 

  let dayResult;

  switch (dayAbsoluteDifferenceMod) {
    case 0:
    dayResult = "Monday";
      break;
    case 1:
      dayResult = "Tuesday";
      break;
    case 2:
      dayResult = "Wednesday";
      break;
    case 3:
      dayResult = "Thursday";
      break;
    case 4:
      dayResult = "Friday";
      break;
    case 5:
      dayResult = "Saturday";
      break;
    case 6:
      dayResult = "Sunday";
      break;
    default:
      dayResult = "Invalid day index";
  };
	
	let dayIs = "";
	
	if (integer > 0) {
    dayIs = `It will be a ${dayResult}`;
  } else if (integer < 0) {
    dayIs = `It was a ${dayResult}`;
  } else {
    dayIs = `Today is ${dayResult}`;
  }
  newDay.textContent = dayIs;
});


cycler.addEventListener('click', () => {
  let day = parseFloat(dayInput.value);
  let integer = parseFloat(integerInput.value);
  cycle.innerHTML= "";

  const daysBetween = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let currentDay = day - 1; //-1 for array index
  let result = "";
if (integer > 0 && Number.isInteger(integer)) {
    // Forward iteration using a do-while loop
    do {
	currentDay = (currentDay) % 7;
    result += daysBetween[currentDay] + " ";
	currentDay++;	
    }
	while (--(integer) > -1);
  } 
else if (integer < 0 && Number.isInteger(integer)) {
		// Backward iteration using a while loop
		while (integer < 1) {
		currentDay = Math.abs((currentDay)-7*Math.floor(currentDay/7));
		result += daysBetween[currentDay] + " ";
		currentDay--;
		integer++;	
		}
  } 
 else if (integer === 0) {
		result = "How many days are between today and today?";
	}
 else if (!Number.isInteger(integer)) {
		result = "Your integer is not an integer";
	} 
else {
		result = "An unfortunate type of error!";
  }
  cycle.textContent = result;
});



weekDayCycler.addEventListener('click', () => {
  let day = parseFloat(dayInput.value)-1; //-1 for array index
  let integer = parseFloat(integerInput.value);
  weekDayCycle.innerHTML= "";

  const daysBetween = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let currentDay = day
  let result = "";
if (integer > 0 && Number.isInteger(integer)) {
    // Forward iteration using a do-while loop
    do {
	currentDay = (currentDay) % 7;
		if (currentDay == 5 || currentDay == 6){
			currentDay++;
			continue;
		}
			result += daysBetween[currentDay] + " ";
			currentDay++;
	}
	while (--(integer) > -1);
}  
else if (integer < 0 && Number.isInteger(integer)) {
		// Backward iteration using a while loop
		while (integer < 1) {
		currentDay = Math.abs((currentDay)-7*Math.floor(currentDay/7));
		if (currentDay == 5 || currentDay == 6){
		currentDay--;
		integer++;
		continue;
		}
		result += daysBetween[currentDay] + " ";
		currentDay--;
		integer++;	
  } 
}
 else if (integer === 0) {
		result = "How many days are between today and today?";
}
 else if (!Number.isInteger(integer)) {
		result = "Your integer is not an integer";
} 
else {
		result = "An unfortunately lucky type of error!";
}
  weekDayCycle.textContent = result;
});


let Break = 0
function cantGetA(Break){
while (Break >= 0){
console.log("Can't get a break;");
Break++;
if (Break!=3){
continue;
} else
console.log("Break=3");
break;
};
console.log("break;");
}
cantGetA(Break);