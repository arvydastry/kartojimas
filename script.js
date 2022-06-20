// const userName = "Rokas";
// const goodbye = `Viso gero ${userName}, lauksime sugrįžtant!`;

// const salary = 10000;
// const dollarSymbol = "$";

// const price = 10;

// if (price > 10) {
//   console.log("Perku");
// } else {
//   console.log("Neperku");
// }

// let result = "";
// if (price > 10) {
//   result = "Perku";
// } else {
//   result = "Neperku";
// }
// console.log(result);

// let result1 = "Neperku";
// if (price > 10) {
//   result1 = "Perku";
// }

// const hours = 24.5;
// let result = "";

// if (hours >= 0 && hours < 6) {
//   result = "Naktis";
// } else if (hours >= 6 && hours < 12) {
//   result = "Rytas";
// } else if (hours >= 12 && hours < 18) {
//   result = "Diena";
// } else if (hours >= 18 && hours <= 24) {
//   result = "Vakaras";
// } else {
//   result = "Netinkamas skaicius";
// }

// console.log(result);

// const price = 10;
// const result = price > 10 ? "Perku" : "Neperku";

// const hours = 5;
// const message =
// hours >= 0 && hours < 6
// ? "Naktis"
// : hours >= 6 && hours < 12
// ? "Rytas"
// : hours >= 12 && hours < 18
// ? "Diena"
// : hours >= 18 && hours <= 24
// ? "Vakaras"
// : "blogas laikas";
// console.log(message);

// const myName = "Julija";
// const nameLength = myName.length;
// const firstChar = myName[0]; // charAt(0)
// const lastChar = myName[myName.length - 1]; // myName.charAt(nameLength - 1)

// console.log(firstChar);
// console.log(lastChar);
// console.log(myName.length);

// for (let i = 0; i < nameLength; i++) {
// const char = myName[i];
// console.log(char);
// }

// for (let i = 0; i < myName.length; i++) {
// const char = myName[i];
// console.log(`${i + 1} raide yra ${char}`);
// }

// Turi return

// function square(number) {
//   // 5*5
//   return number * number;
// }

// const squared = square(5);

// console.log(squared);
// console.log(square(5))

// Neturi return

// Gražina Kubu
// function cube(number) {
//   return number * number * number;
// }

// const cubed = cube(3);

// console.log(cubed);
// console.log(cube(3));

// // priima du skaičius ir grąžina jų sandaugą
// function multiNumbers(number) {
//   return number * number;
// }

// const multiNumbered = multiNumbers(2);

// console.log(multiNumbered);
// console.log(multiNumbers(2));

// // priima du skaičius ir grąžina jų sudėti
// function plusNumber(number) {
//   return number + number;
// }

// const plusNumbers = plusNumber(3);

// console.log(plusNumbers);
// console.log(plusNumber(3));

// //priima du skaičius ir grąžina jų atimtį
// function minus(number) {
//   return number - number;
// }

// const minused = minus(3);

// console.log(minused);
// console.log(minus(3));

// // priima du skaičius ir grąžina jų dalybą
// function divide(number) {
//   return number / number;
// }

// const divided = divide(20);

// console.log(divided);
// console.log(divide(20));

// Nauja uzduotis - sukurti funkcija kuri priims stringa kaip argumenta ir grazins kiek jame raidziu
// const myString = "Rokas, labadiena @@!@#123";

// function stringLength(string) {
//   return string.length;
// }

// console.log(stringLength(myString));

// function compareNumbers(num1, num2) {
//   // return num1 > num2;
//   // return num1 > num2 ? true : false;
//   if (num1 > num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(compareNumbers(10, 5));

// function firstAndLastChar(string) {
//   // charAt
//   // slice(-1)
//   return string[0] + string[string.length - 1];
// }

// console.log(firstAndLastChar("Zveriukas"));

// function myName() {
//   return "Arvydas";
// }

// console.log(myName());

// function randomNumber(min, max) {
//   let random = Math.random();
//   random = random * max;
//   random = random - min;
//   random = Math.floor(random);
//   return random;
// }

// console.log(randomNumber(1, 5));

// function getNameAndSurnameLength(name, surname) {
//   return name.length + surname.length;
// }
// console.log(getNameAndSurnameLength("Arvydas", "Trybe"));

// function getLetterByIndex(index) {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   return alphabet[index];
// }
// console.log(getLetterByIndex(3));

// function calculate(n1, n2, operator) {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "div":
//       return n1 / n2;
//     case "multi":
//       return n1 / n2;
//   }
// }
// console.log(calculate(1, 20, "sum"));

function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

function squareNumber(number) {
  return Math.pow(number, 2);
}

console.log(squareNum(generateRandomNumber()));
