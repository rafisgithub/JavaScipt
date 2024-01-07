const url = "https://swapi.dev/api/people/1";

const request = fetch(url).then(response =>{
    return response.json()
}).then(data =>{
    // console.log(data);
    const table = document.getElementById('123');

    table.innerHTML = `
    <table border="1">
    <thead>
     <th>Name</th>
     <th>Height</th>
    </thead>
    <tbody>
     <td>${data.name}</td>
     <td>${data.height}</td>
    </tbody>
   </table>
    `;
}).then(error => {
    console.error(error)
})


const numbers = [23,3,45,56,76];
function myFunction(value,index,array){
console.log(value);
console.log(index);
console.log(array);
console.log("---------");
}
numbers.forEach(myFunction);


