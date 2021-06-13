function newFunction(name,age,country){
    var name =name || "oscar";
    var age= age || 32;
    var country =country || "MX";
    console.log(name, age, country)
}

// es6
function newFunction2(name ="oscar", age= 32, country= "MX"){
    console.log(name,age,country);
};
newFunction2();
newFunction2("Ricardo","23","CO");

//
let hello = "hello";
let world= "world";
let epicPhrase= hello + " "+ world;
console.log(epicPhrase);
let epicPhrase2= `${hello} ${world}`;
console.log(epicPhrase2);

// let y const , Multilinea,spread
let lorem= "wwlwjddlkdldñdldñddñdñdq,dkjkdk \n"+ "otra frase epica que necesitamos";

//es6
let lorem2=`otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person={
    "name": "oscar",
    "age":32,
    "country":"MX"
}

console.log(person.name,person.age);

//es6
let {name,age}=person;
console.log(name,age);

//
let team1=["oscar","julian","ricardo"];
let team2=["valeria","yesica","camila"];

let education =["david",...team1,...team2];

console.log(education);

{
    var globalvar="Global Var";
}

{
    let globallet ="gLOBAL Let";
    console.log(globallet);
}

console.log(globalvar);

//uso del const

const a="b";
a="a";
