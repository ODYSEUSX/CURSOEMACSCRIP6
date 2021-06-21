//flat (utilizado para aplanar elementos(arrays))

let array =[1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(1));
console.log(array.flat(2));

//flat map 

let array =[1,2,3,4,5];

console.log(array.flatMap(value=> [value,value*2]));
resultado en pantalla[1,2,2,4,3,6,4,8,5,10]

//trim

let hello = 'hello world       ';
console.log(hello);
console.log(hello.trimStart());
//trim end u start
let hello = 'hello world       ';
console.log(hello);
console.log(hello.trimEnd());

//convertir elementos a objetos

let entries=[["name","oscar"],["age",32]];

console.log(Object.fromEntries(entries));

resultado en pantalla"{ name: 'oscar', age: 32 }"

//accder a la información de un simbolo

let mySymbol= 'My Symbol';
let symbol= Symbol(mySymbol);
console.log(symbol.description);


