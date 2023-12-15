
// const names = ["Rafi Ahmed", "Meghla", "Nurani", "Abuu", "Ammu"];
// let index = -1;
// let name = names[++index];

// setInterval(()=>{
//     name = names[index++]
//     console.log(name, name.length);

//     if(index == names.length){
//         index = 0;
//     }
// },1000)

// while(true){
    
//     let num = Math.ceil(Math.random()*100)
//     console.log("Rafi Ahmed", num);
//     if(num == 99){
//         break;
//     }
// }


// do {
//     console.log("It will run at least once");
// }while(false);



// const students = ['rafi','anick','meghla','nurani']
// for(let i = 0; i<students.length;i++){
//     console.log(students[i] , students[i].toLowerCase());
// }

// const matrix = [
//     [23,53,54],
//     [34,65,67],
//     [53,54,76]
// ]

// console.log(matrix);

// for(let i =0;i<3;i++){
//     for(let j=0;j<3;j++){
//         console.log(matrix[i][j])
//     }
// }


//Object

const student = ['rafi','rafi@gmail.com',21,true];

const student1 = {
    name : "Rafi Ahmed",
    email : "rafi@gmail.com",
    age :21,
    attent :true
}
const student2 = {
    name : "meghla Ahmed",
    email : "meghla@gmail.com",
    age :21,
    attent :true
}

const student3 = {
    name : "piya Ahmed",
    email : "piya@gmail.com",
    age :21,
    attent :true
}
const allStudents = [student1,student2,student3];
// console.log(allStudents);

// for(let i = 0;i<allStudents.length;i++){
//    let getEmail =  allStudents[i].email ;
//    sendEmail(getEmail);
// }

// function sendEmail(x){
//     console.log("Send email to ",x)
// }

// for(let i=0;i<allStudents.length;i++){
 
//     // console.log(allStudents[i])
//     sendEmail(allStudents[i].email)
   
// }

// function sendEmail(x){
//     console.log('Sending mail to ',x);
// }


// allStudents.forEach((item)=> console.log(item.email));

// allStudents.forEach((item)=>{
//     console.log(item.age)
// })

// function nameOfTheFunction(name){
//     if(!name){
//         console.log("Please provide your name:")
//     }else{
//         console.log('Hello',name);
//     }
    
// }
// nameOfTheFunction("Rafi Ahmed");
// nameOfTheFunction();


// const randomNumber1 = Math.round(Math.random()*10)
// const randomNumber2 = Math.round(Math.random()*100)


// function generateRandomNumber(min, max){
//     const randomNumber3 = Math.floor(Math.random() * min + (max-min))

//     return randomNumber3;
// }

// console.log(generateRandomNumber(5, 10))


const numbers = [23,54,54,56,65,65];
// let sum = 0;
// for(let i=0;i<numbers.length;i++){
//     sum += numbers[i];
    
// }
// console.log(sum);


// numbers.forEach(function(){

// })
// const cb = () => {
//     console.log("Hello")
// };
// numbers.forEach(cb)

// numbers.forEach(()=>{
//     console.log("Hello")
// })

// numbers.forEach(function(value, index, arr){
//     if(value%2==0){
//         console.log(value, index, arr)
//     }
    
// })

