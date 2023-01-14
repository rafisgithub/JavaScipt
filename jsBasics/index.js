//This is my first javascript code
// console.log('Hello world');
// let name='Rafi';
// console.log(name);

//Declaring variable 
//cant't be a reserved keyword
//should be meaningful
//cant't start with a number 
// can't cantain a space or hyphen(-)
// let firstName = 'Rafi ';
// let latName = 'Ahmed';
// console.log(firstName)
// console.log(latName);

// let age = 25;
// let isApproved = true;
// let x = undefined;
// let y = null;

//Object array and Fucntion


//Object
let name = 'Rafi Ahmed';
let rage = 21;
let person = {
    name: 'Rafi Ahmed',
    rage:21
};


//Dot Notaions
person.name = 'Oyasick';


//Bracket Notation
person['name'] = 'Ahmed';

let selection = 'name';
person[selection]= 'Shakib';

console.log(person);


   //Array

let SelecttedColor = ['red', 'blue'];
SelecttedColor[2]= 'green';
console.log(SelecttedColor);
console.log(SelecttedColor[0]);



    //    Function 

function greet(name,x,y) {
    console.log('Hello ' + name ,x ,y);
}

greet('Rafi Ahmed',20,40);



function square(n){
    return n*n;
}
 console.log (square (3));