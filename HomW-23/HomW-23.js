//Create 3 variables with number, string, boolean type definitions and initialize them with correct data 
//(try to set invalid ones and make sure that an appropriate error displays and then comment them).
var variableOne = "Olena Lisovska";
//variableOne = 50;
console.log(variableOne);
var variableTwo = 40;
//variableTwo = false
console.log(variableTwo);
var variableThree = true;
//variableThree = "Ivan Trolskyi"
console.log(variableThree);
//Create an Employee object and set a few required properties (id, firstName, lastName, email) and two optional (phone, hobby) 
//describe the type of object and initialize it.
//*id can accept numeric or string data types!!!
var employee = {
    id: 67589,
    firstName: "Vasyl",
    lastName: "Lazarevych",
    email: "fakeemail@yopmail.com",
    phone: 380938743095
};
console.log(employee);
;
var dog_1 = {
    name: "Luna",
    age: 8,
    gender: "Girl",
    color: "White",
    awards: false
};
console.log(dog_1);
var dog_2 = {
    name: "Rex",
    age: 4,
    gender: "Boy",
    color: "Grey",
    breed: "German Shepherd"
};
console.log(dog_2);
//Write the function arithmeticMeanOfTwoNumbers(firstNumber, secondNumber) and implement its logic. 
//Don't forget to describe the data types of function parameters and the value it returns. 
//Call the function with different arguments and output results to the console.
function arithmeticMeanOfTwoNumbers(x, y) {
    return (x + y) / 2;
}
;
var result = arithmeticMeanOfTwoNumbers(10, 4);
console.log(result);
