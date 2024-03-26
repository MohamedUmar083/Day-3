//Task-1

let obj1 = {name: "person1", age: 45};
let obj2 = {age: 45, name: "person1"};

let Sobj1 = JSON.stringify(obj1);
let Sobj2 = JSON.stringify(obj2);

let Pobj1 = JSON.parse(Sobj1);
let Pobj2 = JSON.parse(Sobj2);

isEqual = true;

for (let key in Pobj1) {
    if (Pobj1[key] !== Pobj2[key]) {
        isEqual = false;
        break;
    }
}

if (isEqual) {
    console.log("Objects are equal.");
} else {
    console.log("Objects are not equal.");
}



//Task-2

let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send()

request.onload = function()
{
    let data = request.response;
    let result = JSON.parse(data);
    for (var i=0;i<result.length;i++)
    {
        console.log(result[i].flags.png)
    }
    

}



//Task-3

let request1 = new XMLHttpRequest();

request1.open("GET","https://restcountries.com/v3.1/all",true);

request1.send()

request1.onload = function()
{
    let data1 = request1.response;
    let result1 = JSON.parse(data1);
    for (var i=0;i<result1.length;i++)
    {
        console.log("Country Name :",result1[i].name.common,"Region :",result1[i].region,"Subregion :",result1[i].subregion,
        "Population :",result1[i].population)
    }
    

}