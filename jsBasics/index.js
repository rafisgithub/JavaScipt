// //1.Ways to print in JavaScript
// console.log('Hello JavaScript', 10 + 12, "Rafi ahmed");
// // alert("How are you?");
// document.write("Hey this is documnet");

// //2.JavaScript console API
// console.log("How are you?")
// console.warn("this is warning");
// console.error("this is an error!");
// console.clear();
// console.table(data) //Heere data array or object to be displayed in a table.
// console.assert();
// console.trace();

//.3 varibales

var number1 = 20;
var number2 = 23;

// console.log(number1+number2);

// 4. Data types in JavaScript
//numbers
var n1 = 32;
var n2 = 23.43;
//string
var str1 = "This is a string";
var str2 = 'this is a string';

//Objects
var marks = {
    rafi:90,
    shakib:80,
    harry:10
}
// console.log(marks)

//Bolean

var x=true;
var y = false;

// console.log(x,y)


// var und = undefined;
var und;
// console.log(und)


var n = null;
// console.log(n)


/*At a very hight level, There are two type of data type in JavaScript

1. Primitive data types :  undefined, null, number, string , boolean, Symbol
2. Reference data types : Arrays and Objects

*/

var arr = [1,2,3,4,5,6,"Rafi",'ahmed']



//Operator in javaScript

var a = 100;
var b = 10;

// console.log("The value of a+b =", a+b )
// console.log("The value of a-b =", a-b )
// console.log("The value of a/b =", a/b )
// console.log("The value of a%b =", a%b )


//Assigment operators

var c = b;
c -= 2;
// console.log(c);
//comparision operator
// console.log(c==a)
// console.log(c<=a)

//Logical operator

// console.log(true && true)
// console.log(true && false)
// console.log(true || true)
// console.log(true || false)
// console.log(!false)

//JavaScript Function
//DRY = Don't repeat yourself
function avg(a,b){
    return (a+b)/2;
}
c1= avg(4,5);
c2 = avg(7,6);
// console.log(c1)
// console.log(c2)
//Conditional in javascript

// var age = 18;
// if(age < 18){
//     console.log('Yu are not a kid');
// }else{
//     console.log('you are a kid');
// }

var arr = [12,34,54,65,67,87];

// console.log(arr);


// for(var i =0; i<arr.length;i++){
//     console.log(arr[i]);
// }
// var names = ["Rafi Ahmed","Shakil al shaown","Meghla", "Nurani"]
// names.forEach(function(element){
//     console.log(element)
// })

// document.getElementById("paragraph").innerHTML = "Hell Rafi"
// document.getElementById("paragraph").style.fontSize= "30px";
// document.getElementById("paragraph").style.background ="#ffffff";

let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)
// let myArr = ["Fan", "camera", 34, null, true,];

//Array methods
// console.log(myArr.length);
// myArr.push("Rafi")
// myArr.pop();
// myArr.shift()
// myArr.unshift()
// console.log(myArr);


//String method in JavaScript

let myLovelyString = "Rafi is a good boy";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("boy"))

// console.log(myLovelyString.slice(0,4))

// x=myLovelyString.replace("Rafi","Ahmed");

// console.log(x)

// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getHours());

// let elem = document.getElementById('click');

// console.log(elem);

// let elemClass = document.getElementsByClassName("container");

// console.log(elemClass)

// elemClass[0].style.background = "yellow"
// elemClass[1].classList.add("bg-primary")
// elemClass[1].classList.add("text-success")

// function clicked(){
//     console.log("the button is clicked")
// }

// window.onload = function(){
//     console.log("the document was loaded")
// }

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<br> we have clicked</br>"
//     console.log("click on container")
// })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// })
// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container")
// })
// firstContainer.addEventListener('mouseup',function(){
//     console.log("mouse up when clicked on Container")
// })
// firstContainer.addEventListener('mousedown',function(){
//     console.log("mouse down clicked on container")
// })

// setTimeout and setInterval

// Arrow Function
// function sum(a, b){
//     return (a+b);
// }

// sum = (a, b)=>{
//     return (a+b);
// }
// logkaro = ()=>{
//     console.log("I'm your log")
// }
// setTimeout(logkaro, 2);