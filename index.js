//let username = window.prompt("Your name");
/**********
         * let username;
        document.getElementById("myButton").onclick = function() {
            username = document.getElementById("myText").value;
            document.getElementById("myLabel").innerHTML = username;
        };
        let age = window.prompt("How old are you?");
        console.log(typeof age);
        age = Number(age);
        age += 1;
        console.log(age);

        let a, b, c;
        a = window.prompt("side A:");
        a = Number(a);
        b = window.prompt("side B:");
        b = Number(b);
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        console.log("Side C:", c);
        **********************/

let a, b, c;

document.getElementById("submitButton").onclick = function () {
  a = document.getElementById("aTextBox").value;
  a = Number(a);
  b = document.getElementById("bTextBox").value;
  b = Number(b);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("cLabel").innerHTML = "Side C: " + c;
};
let count = 0;

document.getElementById("decBtn").onclick = function () {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("resBtn").onclick = function () {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("incBtn").onclick = function () {
  count += 1;
  document.getElementById("countLabel").innerHTML = count;
};
document.getElementById("myBtn").onclick = function () {
  if (document.getElementById("myCheckBox").checked) {
    document.getElementById("myDiv").innerText = "You are subscribed";
  } else {
    document.getElementById("myDiv").innerText = "You are NOT subscribed";
  }
};
const visa = document.getElementById("visaBtn");
const master = document.getElementById("masterCardBtn");
const diners = document.getElementById("dinersBtn");
document.getElementById("myBtn2").onclick = function () {
  if (visa.checked) {
    console.log("Visa");
  } else if (master.checked) {
    console.log("MasterCard");
  } else if (diners.checked) {
    console.log("Diners");
  }
};

let user = "User User Code";

console.log(
  user.length +
  "," +
  user.charAt(0) +
  "," +
  user.indexOf("C") +
  "," +
  user.lastIndexOf("U") +
  "," +
  user.toUpperCase() +
  "," +
  user.replaceAll(" ", ",")
);
let fullName = "Rafi Gino";
let firstName;
let lastName;
firstName = fullName.slice(0, 4);
lastName = fullName.slice(5);
console.log(firstName + " " + lastName);
console.log(fullName.slice(0, fullName.indexOf(" ")));
console.log(fullName.slice(fullName.indexOf(" ") + 1));

let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent!!!");
    break;
  case "B":
    console.log("Good!!!");
    break;
  case "C":
    console.log("OK!!!");
    break;
  case "D":
    console.log("Failed!!!");
    break;
  default:
    console.log(grade, " Not a grade");
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let y = 10;
while (y != 0) {
  console.log(y);
  y--;
}
let rows = 10;
let col = 10;
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= col; j++) {
    document.getElementById("myRec").innerHTML += " 🤪 ";
  }
  document.getElementById("myRec").innerHTML += "<br>";
}

let userName = "Rafi";
console.log(`<br>Hello ${userName}`);

function sayHello() {
  for (let i = 0; i < 10; i++) {
    document.getElementById("mypara").innerHTML =
      document.getElementById("mypara").innerHTML +
      "Hello " +
      userName +
      "<br>";
  }
}
sayHello();

let area;
let width;
let height;

width = window.prompt("Enter witdh");
height = window.prompt("Enter height");
area = getArea(width, height);
console.log("The area is: ", area);

function getArea(width, height) {
  return width * height;
}
console.log(`Width ${width}`);
console.log(`Height ${height}`);

let text = `
Width ${width}
Height ${height}
Hello ${userName}`;

document.getElementById("myLbl").innerHTML = text;

let adult = checkAge(window.prompt("Yor age?"));
console.log(adult);
function checkAge(age) {
  return age >= 18 ? true : false;
}

winner(true);

function winner(win) {
  win ? console.log("WIN!!") : console.log("LOSE");
}

let num = 123456.79;
let num1 = 5000;
let num2 = 0.35;
let num3 = 25;
num = num.toLocaleString("en-US", { style: "currency", currency: "USD" });
console.log(num);
num1 = num1.toLocaleString("eu-EU", { style: "currency", currency: "EUR" });
console.log(num1);
num2 = num2.toLocaleString(undefined, { style: "percent" });
console.log(num2);
num3 = num3.toLocaleString(undefined, { style: "unit", unit: "celsius" });
console.log(num3);

let fruits = ["apple", "orange", "banana"];
fruits.push("lemon"); //.pop to remove last
fruits.unshift("mango"); //.shift to remove first
console.log(fruits);
let vegetables = ["carrot", "onion", "potatoes"];
let meats = ["chicken", "eggs", "fish"];
let groceryList = [fruits, vegetables, meats];
groceryList[0][0] = "peach"
for (let list of groceryList) {
  //console.log(list);
  for (let food of list) {
    console.log(food);
  }
}

let prices = [5, 10, 15, 20];
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
for (let i = prices.length - 1; i >= 0; i--) {
  console.log(prices[i]);
}
for (let price of prices) {
  console.log(price);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);

let username = "User Name";
console.log(...username);

let e = 1;
let f = 2;
let g = 3;
let h = 4;
let i = 5;
console.log(sum(e, f, g, h, i));

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number
  }

  return total
}
summ(2, 3, displayCons)
function summ(x, y, callback) {
  let result = x + y;
  callback(result);
}
function displayCons(output) {
  console.log(output);
}
let students = ["mike", "bob", "kenny"];
students.forEach(captlize);
students.forEach(print);

function captlize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element) {
  console.log(element);
}
function square(element) {
  return Math.pow(element, 2);
}
let sqrNumbers = numbers.map(square);
sqrNumbers.forEach(print);

let ages = [18, 25, 33, 17, 28, 42];
let over25 = ages.filter(checkAge);
over25.forEach(print2);

function checkAge(element) {
  return element > 25;
}
function print2(element) {
  console.log(element);
}

let total = ages.reduce(sumAge);
function sumAge(total, element) {
  return total + element
}
console.log(`Total: ${total}`);

let grades = [100, 9, 75, 85, 92, 67, 55];
grades = grades.sort(descendingSort);
grades.forEach(print);

function descendingSort(x, y) {
  return y - x;
}
function ascendingSort(x, y) {
  return x - y;
}
const greeting = function () {
  console.log("Hello");
}
greeting();

const greeting2 = (user_name) => console.log(`Hello ${user_name}`)

greeting2("Rafi");

const precent = (x, y) => x / y * 100;

console.log(`${precent(75, 100)}%`);



let cards = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
document.getElementById('mypara').textContent = cards;
shuffle(cards);
console.log(cards);
cards.forEach(card => console.log(card));

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length)
    currentIndex -= 1;
    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
document.getElementById("shf").onclick = () => {
  shuffle(cards);
  document.getElementById('mypara').textContent = cards;
}



