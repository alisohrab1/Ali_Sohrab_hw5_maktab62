//number of cars ==> user prompt

let number = prompt("enter the number of cars");
if (isNaN(number)) {
  alert("Invalid input.");
}

//names of cars ==> user prompt **make sure to check for number === names.length
let names = [];
for (let i = 0; i < number; i++) {
  let name = prompt(`enter the name of car number ${i + 1}`);
  names.push(name);
}

function car(name) {
  this.name = name;
  this.pos = 0;
  this.posHistory = [];
  this.isWinner = false;
  this.finalPos = 0;
}

let carArr = [];

//loop for creating the cars
for (let i = 0; i < names.length; i++) {
  carArr.push(new car(names[i]));
}

//random generator
function genRand(max = 10, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//step
function step() {
  let currentStep = [];
  for (let i = 0; i < number; i++) {
    currentStep.push(genRand());
  }
  for (let i = 0; i < number; i++) {
    carArr[i].pos = carArr[i].pos + currentStep[i];
    carArr[i].posHistory.push(currentStep[i]);
    // console.log(posArr[i]);
  }

  return currentStep;
}

//display track
function displayTrack(carArr) {
  let track = "*".repeat(300);
  let trackArr = track.split("");
  for (let i = 0; i < carArr.length; i++) {
    if (carArr[i].isWinner === true) {
      continue;
    } else {
      trackArr[carArr[i].pos] = carArr[i].name;
    }
  }
  console.log(trackArr.join(""), "\n");
}

//overtake
function overTake(carArr, round) {
  for (let i = 0; i < carArr.length; i++) {
    for (let j = 0; j < carArr.length; j++) {
      if (carArr[i].pos === carArr[j].pos && i !== j) {
        if (carArr[i].posHistory[round] > carArr[j].posHistory[round]) {
          carArr[i].pos = 0;
        } else {
          carArr[j].pos = 0;
        }
      }
    }
  }
}

//overtake tester
function overTakeTester(carArr) {
  carArr[0].pos = carArr[1].pos;
}

//main
var round = 0;
var flag = true;
while (flag) {
  let winCount = 0;

  console.log(`round : ${round}`);
  step();
  if (round === 2) {
    console.log(`${carArr[0].name} or ${carArr[1].name} should be at 0 `);
    overTakeTester(carArr);
  }

  overTake(carArr, round);
  //   for (obj of carArr) {
  //     console.log(`${obj.name} : ${obj.pos}`);
  //   }
  displayTrack(carArr);

  for (let obj of carArr) {
    if (obj.pos >= 300) {
      winCount++;
      obj.finalPos = round;
      obj.isWinner = true;
      //   console.log(`${obj.name} has crossed the finish line`);
      Object.freeze(obj);
    }
  }
  // for (let obj of carArr) {
  //   if (obj.isWinner === true) {
  //       console.log(obj.name);
  //   }
  // }
  if (winCount >= number) {
    flag = false;
  }
  round++;
}

// console.log(step());
// console.log(posArr);

carArr.sort(function (a, b) {
  return a.finalPos - b.finalPos;
});
console.log("Final Results");
for(let i=0; i < carArr.length; i++){
  if(i===0){
    console.log(`The winner is ${carArr[i].name}`);
  }else{
    console.log(`${carArr[i].name} finished at number ${i+1} spot`);
  }
}
