// entries sacar las llaves y su value en arrays independientes  y  saber cuantos elementos hay en el objeto

const data ={
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana'
}

const entries= Object.entries(data);
console.log(entries);
console.log(entries.length);

//sacar los value de cada llave y ponerlo en un array
const data ={
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana'
}

const values= Object.values(data);
console.log(values);
console.log(values.length)

//padding

const string ='hello';
console.log(string.padStart(7,'hi'));   // añade caracteres o simbolos al inicio de un string ,(donde 7 es el numero total de caracteres que tendra)
console.log(string.padEnd(12,'-------')) ;  //añade caracteres o simbolos al final de un string ,(donde 12 es el numero total de caracteres que tendra)
console.log('food'.padEnd(12,' -------'));