"use strict";
// alert("Hello Samar");
// const place = confirm("Are you here");
// console.log(place);
// const currentPlace = +prompt("Where are you", "");
// console.log(currentPlace);
// console.log(typeof(currentPlace));
// const favouriteColor =[];
// favouriteColor[0] = prompt("What is your favouriteColor N1", "");
// favouriteColor[1] = prompt("What is your favouriteColor N2", "");
// console.log(favouriteColor);
// const channel = prompt("What is your favourite youtuber", "");
// console.log(`https:/youtube.com/${channel}`);
// console.log(typeof (6+ "9"));

//incr,decr
// let incr = 10;
// let decr = 5;
// incr++;
// decr--;
// console.log(++incr);
// console.log(--decr);
// console.log(incr);
// console.log(decr);

// console.log(5 % 2);
// console.log(5 * 5 == 25); //Tenglikni qiymatiga qaraydi
// console.log(5 * 5 ==="25"); //Tenglikni ham qiymatiga ham ma'lumot turiga qaraydi

// Operatorlar
// && = va bunda hammasi to'g'ri bo'lishi kerak
// // = yoki bunda bitta noto'ri bo'lsa ham noto'g'ri bo'ladi
// const isAge = true;
// const isClose = true;
// const isMarried = false;
// // console.log(isAge && isClose && isMarried);
// // ! bu belgi operatorni teskariga aylantirib beradi
// console.log(isAge && isClose && !isMarried);
// console.log(2 + 2 * 2 === 8);
// console.log(2 + 2 * 2 != 8);
// const age = +prompt("How old are you", "");
// if (age>18){
//     console.log("Welcome");
// } else{
//     console.log("No entry");
// }
// if (age>25){
//     console.log("Horror Films");
// } else if(age>18 && age<25){
//     console.log("boevik Films");
// }else {
//     console.log("Cartoons");
// }
// age>25 ? console.log("Horror films") :console.log("boevik films");
const colors = prompt("What is your favourite color", "");
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slowly");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Traffic jam");
    break;
}
