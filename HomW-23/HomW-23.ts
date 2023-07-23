//Create 3 variables with number, string, boolean type definitions and initialize them with correct data 
//(try to set invalid ones and make sure that an appropriate error displays and then comment them).

let variableOne: string = "Olena Lisovska";
//variableOne = 50;
console.log(variableOne);

let variableTwo: number = 40;
//variableTwo = false
console.log(variableTwo);

let variableThree: boolean = true;
//variableThree = "Ivan Trolskyi"
console.log(variableThree);


//Create an Employee object and set a few required properties (id, firstName, lastName, email) and two optional (phone, hobby) 
//describe the type of object and initialize it.
//*id can accept numeric or string data types!!!

let employee: { id: string | number, firstName: string, lastName: string, email: string, phone?: number, hobby?: string } = {
    id: 67589,
    firstName: "Vasyl",
    lastName: "Lazarevych",
    email: "fakeemail@yopmail.com",
    phone: 380938743095
};

console.log(employee);

//Create an interface named Animal and describe a few required and optional properties at your choice
//after that create 2 objects based on the Animal interface.

interface Animal {
    name: string,
    age: number,
    gender: string,
    color?: string,
    breed?: string,
    awards?: boolean
};

let dog_1: Animal = {
    name: "Luna",
    age: 8,
    gender: "Girl",
    color: "White",
    awards: false
};
console.log(dog_1);

let dog_2: Animal = {
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

function arithmeticMeanOfTwoNumbers(x: number, y: number): number {
    return (x + y) / 2;
};

let result = arithmeticMeanOfTwoNumbers(10, 4);
console.log(result);