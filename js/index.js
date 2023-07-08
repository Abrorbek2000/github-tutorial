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
// const colors = prompt("What is your favourite color", "");
// switch (colors) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Slowly");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Traffic jam");
//     break;
// }

// Sikllar

// // first
// let startNum = 1;
// // while(startNum<100){
// //     console.log(startNum);
// //     startNum++;
// // }

// // second
// do{
//     console.log(startNum);
//     startNum++;
// }while(startNum<100);

// third
// for (let i=2; i<100; i++) {
//     console.log(i);
// }
// const num = 1;
// for (let i = 1; i< 10; i++) {
//   console.log(num);
//   num++;
// }
// for (let i = 1; i < 10; i++) {
//   if (i === 8) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 1; i < 10; i++) {
//   if (i === 8) {
//     continue;
//   }
//   console.log(i);
// }

// Functions
// function sayHello() {
//   console.log("HEllo World");
// }
// sayHello();
// function sayHello(text) {
//   console.log(text);
// }
// sayHello("Hello World");
// function calc(a,b){
//     console.log(a+b);
//     console.log(a*b);
// }
// calc(5,10);
// calc(5,7);
// function clientName(name,surname){
//     console.log(`My name is ${name} and surname is ${surname}`);
// }
// clientName("Abrorbek","Mayunusov");
// function gf(a,b){
//     return a+b;
// }
// console.log(gf(5,6));
// function calc(a,b){ //Function declaration
//     return a+b;
// }
// const sumOfAvaB = calc(5,6); //Function expression
// console.log(sumOfAvaB);
// const calc =(a,b)=>a+b; //Arrow function
// console.log(calc(5,10));

// Metodhs
const user = "samar";
// console.log(user.length);
// const arr = [1, 2, 3];
// console.log(arr.length)
// console.log(user[1]);
// console.log(user.toUpperCase());
// console.log(user.toLowerCase());
// console.log(user.indexOf("m"));
// console.log(user.slice(1,3));
// console.log(user.slice(0));
// console.log(user.substring(0));
// const num = 5.5;
// console.log(Math.round(num));
// const borderAge = "13.8px";
// console.log(parseInt(borderAge));
// console.log(parseFloat(borderAge));

// Callback
// function edu(subject,callback){
//     console.log(`I wanna teach ${subject}`);
//     callback();
// }function done(){
//     console.log(`That is great`);
// }
// edu("Javascript",done);
// function edu(subject,callback){
//     console.log(`I wanna teach ${subject}`);
//     callback();
// }
// edu("Javascript",function done(){
//     console.log("That is great");
// });

// Object
const thief = {
  jacket: "black",
  height: 1.8,
  colors: {
    hair: "green",
    style: "curvey",
  },
//   howout: function(){
//     console.log(`Fast through doors`);
// },
};
// thief.howout();
// console.log(thief.height);
// deleat thief.jacket; objectni elementini o'chirish
// console.log(Object.keys(thief).length);
// for (let key in thief) {
//   if (typeof thief[key] === "object") {
//     for (let i in thief[key]) {
//       console.log(`Property ${i} has value ${thief[key][i]}`);
//     }
//   }else{
//     console.log(`Property ${key} has value ${thief[key]}`);
//   }
// }
// const hair = thief.colors.hair;
// const style = thief.colors.style;
// console.log(hair);
// console.log(style);
// const {hair,style} = thief.colors;
// console.log(hair);
// console.log(style);

// Massivlar
// const arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// arr.push(7);
// arr.shift();
// arr.unshift(0);
// console.log(arr);
// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }
// for(let value of arr){
//   console.log(value);
// }
// arr.forEach(function(item, index, arr){  //callback qaytaradi 
//   console.log(`${item}: ${index} in ${arr}`);
// })
// const movie = prompt("What is your favourite movies", "");
// const userMovies = movie.split(", ");
// userMovies.sort();
// console.log(userMovies);
// const movie = prompt("What is your favourite movies", "");
// const userMovies = movie.split(", ");
// console.log(userMovies.join('- '));
const arr = [1 ,88, 66, 45, 12, 77];
arr.sort(arrFunction());
console.log(arr);
function arrFunction(a,b){
  return a-b;
}
