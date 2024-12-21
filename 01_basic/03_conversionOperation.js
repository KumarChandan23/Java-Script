
// ▶️ Change into Number
let score = "33jfsl"; //when you change string to number the type will be change to number but value will be NaN
let score2 = null; // when you change null to number the type will be number and value will be 0
let score3 = undefined; // when you change undefined to number the type will be number and value will be NaN
let score4 = true; // when you change boolean to number then type will be number but in case of true value will be 1 and in case of false value will be 0

// let valueInNumber = Number(score); 
// console.log("Initial value:", score, " And Type: ", typeof score)
// console.log("Changed value:", valueInNumber, "And Type:",typeof valueInNumber) 

// let nullToNumber = Number(score2);
// console.log("Initial value:", score2, " And Type: ", typeof score2)
// console.log("Changed Value:", nullToNumber, "And Type:",typeof nullToNumber)

// let undefinedToNumber = Number(score3);
// console.log("Initial value:", score3, " And Type: ", typeof score3)
// console.log("Changed Value:", undefinedToNumber, "And Type:",typeof undefinedToNumber);

// let booleanToNumber = Number(score4);
// console.log("Initial value:", score4, " And Type: ", typeof score4)
// console.log("ChangedValue:", booleanToNumber ,"And Type:",typeof booleanToNumber);

// ▶️ Change into Boolean
let isLoggedIn = 0; // 0 is false and all the other numbers will be true
let isLoggedIn2 = "7k"; // if you enter empty string ("") the value will be printed nothing and type will be string when you change it into boolean value will be false and type will be boolean but is enter any thing in side quotes ("d2") value will be true and type will boolean
let isLoggedIn3 = null; // after conversion value will be false and type will be boolean but initially value is null and type is object
let isLoggedIn4 = undefined; // after conversion value will be false and type will be boolean but initally value is undefined and type is also undefined okey

// let numberToBoolean = Boolean(isLoggedIn)
// console.log("Initial Value:", isLoggedIn, "And Type:" , typeof isLoggedIn);
// console.log("Chnage Value:",numberToBoolean, "And Type:", typeof numberToBoolean);

// let stringToBoolean = Boolean(isLoggedIn2)
// console.log("Initial Value:", isLoggedIn2, "And Type:" , typeof isLoggedIn2);
// console.log("Chnage Value:",stringToBoolean, "And Type:", typeof stringToBoolean);

// let nullToBoolean = Boolean(isLoggedIn3)
// console.log("Initial Value:", isLoggedIn3, "And Type:" , typeof isLoggedIn3);
// console.log("Chnage Value:",nullToBoolean, "And Type:", typeof nullToBoolean);


// let undefinedToBoolean = Boolean(isLoggedIn4)
// console.log("Initial Value:", isLoggedIn4, "And Type:" , typeof isLoggedIn4);
// console.log("Chnage Value:",undefinedToBoolean, "And Type:", typeof undefinedToBoolean);

// ▶️ Change into String
let value1 = 123; // value will be 123 and type will be string
let value2 = null; // initially value will be null and type will be object but after conversion value will be null and type will be string
let value3 = undefined; // same like null value will be undefined and type will be object and 

// let numberToString = String(value1)
// console.log("Initial Value:", value1, "And Type:" , typeof value1);
// console.log("Chnage Value:",numberToString, "And Type:", typeof numberToString);

// let nullToString = String(value2)
// console.log("Initial Value:", value2, "And Type:" , typeof value2);
// console.log("Chnage Value:",nullToString, "And Type:", typeof nullToString);

let undefinedToString = String(value3)
console.log("Initial Value:", value3, "And Type:" , typeof value3);
console.log("Chnage Value:",undefinedToString, "And Type:", typeof undefinedToString);