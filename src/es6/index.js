let name="oscar";
let age=32;
//es5
obj={name: name, age:age};
//es6
obj2={name ,age};

console.log(obj2)

//arrow functions

const names=[
    {name:'oscar',age='32'},
    {name:'yesica',age='27'}
]

let listOfnames= names.map(function(item){
    console.log(item.name);
}

let listOfnames2= names.map(item=> console.log(item.name))

const listoOfnames3=(name,age,country)=>{
    ...
}

consta listOfnames4=> name {
    ...
}

const square = num=> num*num;

//promesas

const helloPromise=() =>{
    return new Promise((resolve,reject)=>{
        if (true){
            resolve('hey');
        }else{
            reject('ups');
        }
    });
}

helloPromise()
.then(response=>console.log(response))
.then(()=> console.log('hola'))
.catch(error => console.log(error));