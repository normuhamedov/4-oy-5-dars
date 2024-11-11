//  // 1-vazifa 
// 1-masala

// const arr = [
//     { id: 1, name: "Botir", age: 20, hobby: "Football" },
//     { id: 2, name: "Anvar", age: 20, hobby: "Basketball" },
//     { id: 3, name: "Shohrux", age: 20, hobby: "Basketball" },
//     { id: 4, name: "Akram", age: 22, hobby: "Football" }
// ];
// function obj(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i].age === arr[j].age && arr[i].hobby === arr[j].hobby) {
//                 result.push(arr[i], arr[j]);
//             }
//         }
//     }
//     console.log(result);
// }
// obj(arr);

// 2-masala
// const arr2 = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3];

// function find(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let bor = true;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 bor = false;
//             }
//         }
//         if (bor) {
//             result.push(arr[i]);
//         }
//     }
//     console.log(result);
// }
// find(arr2)

// 3-masala
// const list = [22, 112, 3, 4, 222, 123, 43];
// function addMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     arr.unshift(max);   
//     return arr;
// }
// console.log(addMax(list));

// // 4-masala
// const size = parseInt(prompt("Ismlar sonini kiriting: "));
// function collectNames(size) {
//     const names = [];
//     for (let i = 0; i < size; i++) {
//         const name = prompt("Ism kiriting:");
//         names.push(name);
//     }
//     const lastName = prompt("Yana bir ism kiriting:");
//     if (names.includes(lastName)) {
//         console.log("bor");
//     } else {
//         names.push(lastName);
//         console.log(names);
//     }
// }
// collectNames(size);


// 5-masala
// let promptNum = prompt("Son kiriting : ") -0; // Promptdan kelgan son
// function collectAndReverse(num) {
//     const result = [];
//     for (let i = 0; i <= num; i++) {
//         result.push(i);
//     }
//     return result.reverse(); 
// }
// console.log(collectAndReverse(promptNum));


// // 2-vazifa


// // 1-masala
// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };
// for (let key in person) {
//     console.log(`${key} - ${person[key]}`);
// }

// // 2-masala
// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "Volleyball",
//     interest: "Sleep"
// };
// const persons = Object.assign({}, person1, person2);
// console.log(persons);


// // // 3-masala
// let arr = [1, 2, 3 , 5, 6]
// function add(list) {
//     if (list.length > 0) {
//         list[list.length - 1] += 1;
//     }
//     return list;
// }
// console.log(add(arr));

// // // 4-masala
// let arr = [2, 2, 3]
// function calc(list) {
//     let sum = 0;
//     for (let i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     if (list[0] % 2 === 0) {
//         list.unshift(sum);
//     } else {
//         list.push(sum);
//     }
//     return list;
// }
// console.log(calc(arr));


// // // 5-masala
// let arr = [1, 2, 3, 4]
// function change(list) {
//     if (list.length > 1) {
//         let temp = list[0];
//         list[0] = list[list.length - 1];
//         list[list.length - 1] = temp;
//     }
//     return list;
// }

// console.log(change(arr));

// // // 6-masala 
// function collect(times, arr = []) {
//     if (times === 0) return arr;
//     let word = prompt("So'z kiriting");
//     arr.push(word);
//     return collect(times - 1, arr);
// }
// let collectArr = collect(6);
// console.log(collectArr);

// // // 7-masala
// function askQuestion(count = 3, list = []) {
//     if (count === 0) {
//         console.log("list:", list);
//         return;
//     }
//     let question = prompt("Savol kiriting:");
//     let answer = prompt(question);
//     list.push({ savol: question, javob: answer });
//     return askQuestion(count - 1, list);
// }
// askQuestion();



// // 3-vazifa


// 1-masala
// function createArray() {
//     const size = parseInt(prompt("Size kiriting:"));
//     const array = [];
//     for (let i = 1; i <= size; i++) {
//         array.push({ id: i, name: `Name${i}`});
//     }
//     console.log(array);
// }
// createArray();


// 2-masala
// let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5,2]
// function remove(arr) {
//     console.log([...new Set(arr)]);
    
// }
// remove(nums)


// 2-usul
// let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5,2]
// function remove(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) === index);
// }
// console.log(remove(nums));


// 3-masala

// function findIndex() {
//     const arr = [88, 75, 342, 21, 45, 67];
//     const num = prompt("Son kiriting")-0
//     const index = arr.indexOf(num);   // // darsda array metodlari o'tilganki uchun for ishlatmasdan metoddan foydalandim
//     if (index !== -1) {
//         console.log(`${num} sonining indexsi: ${index}`);
//     } else {
//         console.log(`${num} mavjud emas`);
//     }
// }
// findIndex();

// 4-masaala

// function remove() {
//     let arr = [88, 75, 342, 21, 45, 67];
//     const num = prompt("Son kiriting")-0
//     arr = arr.filter(item => item !== num);     // // darsda array metodlari o'tilganki uchun for ishlatmasdan metoddan foydalandim
//     console.log(arr);
// }
// remove();

// 5-masala

// function calc() {
//     const arr = [10, 2, 3, 4, 5];
//     let maxSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const sum = arr[i] + arr[j];
//             if (sum > maxSum) {
//                 maxSum = sum;
//             }
//         }
//     }
//     console.log("Eng katta yig'indi :", maxSum);
// }
// calc();
