//Task 1
//let personName: string = "Eric";
//console.log('Hi ${Wajid Ali}, would you like to learn Programming?');


//task 2
let personName: string = "Wajid Ali";

//in lowercase 
console.log ("lowercase:", personName.toLocaleLowerCase());

//in uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

//title case
console.log("titlecase", personName.replace(/\b\w/g,c=> c. toLocaleUpperCase()))