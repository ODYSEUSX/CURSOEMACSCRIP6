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

//async Await

const helloworld= () => {
    return new Promise((resolve,reject) => {
        (true)
        ?setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync= async()=> {
    const hello = await helloworld();  //La expresión await provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada, y regresa a la ejecución de la función async después del término./
    console.log(hello);
}

helloAsync();

const anotherFunction = async() => {
    try{
        const hello=await helloworld();
        console.log(hello);

    }
    catch (error){
        console.log(error);
    }
};

anotherFunction();

//ejemplo de venta de helados.

const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(400); //1. llamas a la funcion comprar helado e Ingresas el dinero
