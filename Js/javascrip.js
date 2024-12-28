// JavaScript Document
// console.log(x);
// var x = 10;
// x = 99.99;
// console.log(x);
// x="Hello puk ah jmr";
// console.log(x);
// var x="testing";
// console.log(x);
// display();
// function display(){
// 	var y=10;
// 	console.log(x);
// 	console,log(y);
// }
// console.log(y);
// let a=10;
// console.log(a);
// a="hello";
// console.log(a);
// const pi=3.14;
// console.log(pi);
// let age = 25;
// console.log(age);
// let price = 99.99;
// console.log(price);
// let name = "devit";
// name = 'Dumamai';
// name=`qinite`;
// console.log(`My name is ${name}`);
// console.log("My name is "+ name);
// let firstName;
// console.log(firstName);
// let lastName = Null;
// console.log(lastName);
// var data = {"firstName": "Data", "lastName":"Test"};
// console.log(data);
// console.log(data["firstName"]);
// let colors =['red' , 'green' , 'blue'];
// console.log(colors);
// function test(){
//     var funtionVar = 'I am developer';
//     console.log(funtionVar);
// }
//block scope
// if(true){
//     let abc="hi";
//     console.log(abe);
// }
//Operater
// let a=5;
// let b=2;
// dayOfweek = "a-b=" + (a  % b);

// let x=5;
// let y=5;
// document.getElementById("div").innerHTML = "<u>x+y</u> =" + ( x *= y );

// var z=true;
// var v=false;
// document.getElementById("p2").innerHTML = "z + v =" + (!v);

// let m=5;
// let w=5;
// document.getElementById("mw").innerHTML = "m + w =" + (w); 

// let age ="17";
// let isAdult = (age >=18) ? "Yes":"No";
// console.log(isAdult);
// document.getElementById("age").innerHTML= isAdult;

// let score = 49;
// let grade = (score >= 90) ? "A" : 
//             (score >= 80) ? "B" : 
//             (score >= 70) ? "C" : 
//             (score >= 60) ? "D" : "F" ;
// console.log(grade);
// document.getElementById("score").innerHTML=grade;

// let userScore = 10;
// let finalScore = userScore ?? 100;
// console.log(finalScore);
// document.getElementById("user").innerHTML=finalScore;

// let  age1 = 19;
// if (age1>=18){
//     console.log("You are an adult=");
// }else{
//     console.log("You are not an adult=");
// }

// function Test {
//     console.log(document.getElementById("score").value);
//     document.getElementById("p3").innerHTML="F";
// }
// function checkGrade() {
//     const score = document.getElementById("score").value;
//     const result = document.getElementById("result");

//     if (score >= 90){
//         result.textContent = "You grade: A";
//     } else if (score >= 80){
//         result.textContent = "You grade: B";
//     } else if (score >= 70){
//         result.textContent = "You grade: C";
//     } else if (score >= 60){
//         result.textContent = "You grade: D";
//     } else if (score >= 50){
//         result.textContent = "You grade: E";
//     } else {
//         result.textContent = "You grade: F";
//     }
// }

// function Test (){
//     let day = Number (document.getElementById("score").value);
//     let dayOfweek ="";
//     switch(day){
//         case 1:
//             dayOfweek = "Monday";
//             break;
//         case 2:
//             dayOfweek = "Tuesday";
//             break;
//         case 3:
//             dayOfweek = "Wednesday";
//             break;
//         case 4:
//             dayOfweek = "Thursday";
//             break;
//         case 5:
//             dayOfweek = "Friday";
//             break;
//         case 6:
//              dayOfweek = "Saturday";
//              break;
//         case 7:
//             dayOfweek = "Sunday";
//             break;
//         default:
//             dayOfweek = "Invalid day";
//             break;
//     }
//     document.getElementById("p1").innerHTML = dayOfweek;
// }
// function Test(){
//     let day = Number(document.getElementById("score").value);
//     let count ="";
//     for (let i = 0; i <= day; i++){
//         count += `KDMV Ah Jmr: ${i}<br/>`;
//     }
//     document.getElementById("p1").innerHTML=count;

// }

// document.getElementById("generateBtn").addEventListener("click", () => {
//     const n = parseInt(document.getElementById("numberInput").value);
//     const output = document.getElementById("output");
  
//     if (isNaN(n) || n <= 0) {
//       output.textContent = "Please enter a valid positive number.";
//       return;
//     }
  
//     let result = "";
//     for (let i = 1; i <= n; i++) {
//       const spaces = " ".repeat(n - i); 
//       const stars = "*".repeat(2 * i - 1); 
//       result += spaces + stars + "\n";
//     }
  
//     output.textContent = result;
//   });
// let count = 1;
// while (count <= 10){
//   console.log(`count: ${count}`);
//   count++;
// }

// let count = 6;
// do{
//   console.log(`Count: ${count}`)
//   count++;
// } while (count <= 5);

// let age = 15;
// let citizen = true;
 
// if (age >= 18 && citizen){
//   console.log ("Eligible to vote.");
// }else{
//   console.log("Not eligible to vote.");
// }

// let num = 4;
// if (num % 2 === 0){
//   console.log("Even number");
// }else {
//   console.log("Odd number");
// }

// function checkFebruaryDays() {
//   const yearInput = document.getElementById('year');
//   const resultElement = document.getElementById('result');
//   const year = parseInt(yearInput.value, 10);

//   if (isNaN(year)) {
//     resultElement.textContent = 'Please enter a valid year!';
//     resultElement.style.color = 'red';
//     return;
//   }

//   const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//   const daysInFebruary = isLeapYear ? 29 : 28;

//   resultElement.textContent = `In the year ${year}, February has ${daysInFebruary} days.`;
//   resultElement.style.color = 'green';
// }

//Array
// let fruits = ["Apple","Banana","Cherry",10];
// console.log(fruits);

// let numbers = [1, 2, 3, 4, 5];
// let mixedArray = ["Hello", 42, ture];
//Access Array
// let colors = ["Red", "Green", "Blue"];
// console.log(colors[0]); //Red
// console.log(colors[1]); //green
// //Motify
// colors[1] = "Yellow";
// console.log(colors);

// console.log(colors.length);
//Add element
// let numbers = [1, 2, 3];
// numbers.push(4); //last index
// console.log(numbers);
// numbers.unshift(0); //start index
// console.log(numbers);
// //Remove element
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

// let animals = ["Cat", "Dog", "Bird"];
// for (let i = 0; i < animals.length; i++){
//   console.log(`Index: ${i} Value: ${animals[i]}`);
// }
// //loop value
// for (let item in animals){
//   console.log(item);
// }
// //loop index
// for (let item of animals){
//   console.log(item);
// }
// //foreach
// animals.forEach((item)=>console.log(item));
// //Array Methods
// let nums = [1, 2, 3, 4];
// let spuare = nums.map((num)=>num * num);
// console.log(spuare);

// let even = spuare.filter((num)=>num  % 2 === 0);
// console.log(even);

// let colors = ["Red", "Blue", "Yellow"];
// console.log(colors);
// //Remove Yellow
// console.log(colors.filter((color)=> color !=="Yellow"));
// //keep only Yellow
// console.log(colors.filter((color)=> color ==="Yellow"));
// let colors =["Red"];
// function AddFirst(){
//     let color = document.getElementById("color").value;
//     if(color){
//         colors.unshift(color);
//         let result ="";
//         colors.forEach((color)=>{
//             result += "<li>" + color + "</li>";
//         });
//         document.getElementById("p1").innerHTML= result;
//         document.getElementById("color").value="";
//     }else{
//         alert("Please enter color");
//     }   
// }    

// function AddTheEnd(){
//     let color = document.getElementById("color").value;
//     if (color){
//         colors.push(color);
//         let result ="";
//         colors.forEach((color)=>{
//             result += "<li>"+ color +"</li>";
//         });
//         document.getElementById("p1").innerHTML=result;
//         document.getElementById("color").value="";
//     }else{
//         alert("Please enter color");
//     }
// }
// function Remove(){
//     let color = document.getElementById("color").value;
//     if (color){
//         let selectColors = colors.filter((item)=> item !== color);
//         let result ="";
//         selectColors.forEach((color)=>{
//             result += "<li>"+ color +"</li>";
//         });
//         document.getElementById("p1").innerHTML=result;
//         //Clear value in textbox
//         document.getElementById("color").value="";
//     }else{
//         alert("Please enter color");
//     }
// }
// function sortDesc() {
//   const items = Array.from(p1.children);
//   items.sort((a, b) => b.textContent.localeCompare(a.textContent));
//   p1.innerHTML = '';
//   items.forEach(item => p1.appendChild(item));
// }

// function sortAsc() {
//   const items = Array.from(p1.children);
//   items.sort((a, b) => a.textContent.localeCompare(b.textContent));
//   p1.innerHTML = '';
//   items.forEach(item => p1.appendChild(item));
// }

// let num =[1, 2, 3, 4, 5, 6];
// let even = num.filter((num)=>num % 2 === 0);
// console.log(even);

// let nums =[1, 2, 3, 4];
// let total = nums.reduce((a,b)=>a * b, 2);
// console.log(total);

// let [first, second, third] = [10, 20, 30];
// console.log(first);
// console.log(second);
// console.log(third);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2);

// let found = num.find((a)=>a >=4);
// console.log(found);
// let filter = nums.filter ((a)=> a>=4);
// console.log(filter);

// let fruits = ["apple, banana, yy"];
// fruits.sort();
// fruits.sort((a,b)=>b.localeCompare(a));
// console.log(fruits);
// nums.sort((a,b)=> b-a);
// console.log(nums);

// let nested = [[1, 2], [3, 4], [5, 6]];
// let flat = nested.flat(2);
// console.log(flat);

// let duplicate = [1, 2, 3, 4, 5, 1, 2, 3];
// let unique = [...new Set(duplicate)];
// console.log(unique);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 4);
// console.log(arr);

// let valueToRemove = 3;
// let index = arr.indexOf(valueToRemove);
// if (index !== -1){
//   arr.splice(index, 1);
// }
// console.log(arr);

// let str = "Hello";
// console.log(str.charAt(5));
// console.log(str.concat("World"));


// work3
document.getElementById("calculate-btn").addEventListener("click", function () {
    const dobInput = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const result = document.getElementById("result");
  
    if (!dobInput) {
      result.textContent = "សូមជ្រើសរើសថ្ងៃខែឆ្នាំកំណើតឲ្យបានត្រឹមត្រូវ។";
      return;
    }
  
    const dob = new Date(dobInput);
    let retirementAge = gender === "Male" ? 60 : 55;
  
    const retirementDate = new Date(dob);
    retirementDate.setFullYear(retirementDate.getFullYear() + retirementAge);
  
    // Convert day of the week to Khmer
    const daysInKhmer = [
      "ថ្ងៃអាទិត្យ",
      "ថ្ងៃច័ន្ទ",
      "ថ្ងៃអង្គារ",
      "ថ្ងៃពុធ",
      "ថ្ងៃព្រហស្បតិ៍",
      "ថ្ងៃសុក្រ",
      "ថ្ងៃសៅរ៍",
    ];
  
    // Convert months to Khmer
    const monthsInKhmer = [
      "មករា",
      "កុម្ភៈ",
      "មិនា",
      "មេសា",
      "ឧសភា",
      "មិថុនា",
      "កក្កដា",
      "សីហា",
      "កញ្ញា",
      "តុលា",
      "វិច្ឆិកា",
      "ធ្នូ",
    ];
  
    // Convert year and day to Khmer numerals
    function toKhmerNumerals(number) {
      const khmerDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
      return number
        .toString()
        .split("")
        .map((digit) => khmerDigits[parseInt(digit, 10)])
        .join("");
    }
  
    const dayOfWeek = daysInKhmer[retirementDate.getDay()];
    const day = toKhmerNumerals(retirementDate.getDate());
    const month = monthsInKhmer[retirementDate.getMonth()];
    const year = toKhmerNumerals(retirementDate.getFullYear());
  
    result.textContent = `ថ្ងៃចូលនិវត្ត៖ ${dayOfWeek} ទី${day} ខែ${month} ឆ្នាំ${year}`;
  });
  
  
  
  

//   function greet(name) {
//     return "Hello, " + name + "!";

//   }
//   console.log(greet("Allice"));

// const sum = (a,b)=>a + b;
// let total = sum(2,2);
// console.log(total);


// let results = getRectangleProperties(2, 4);
// console.log(results);
// function factorial(n){
//     if (n===0  || n===1) return 1;
//     return * n * factorial(n-1);

// }

const spuare = (n) => n* n;
console.log(spuare(4));