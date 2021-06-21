const obj ={
    name: 'oscar',
    age:32,
    country: 'mx'
}

let {country, ...all}=obj;
console.log(all);
//
const obj ={
    name: 'oscar',
    age:32,
    country: 'mx'
}

let {country, ...all}=obj;
console.log(country,all);

//añadir a un objeto otro objeto
const obj ={
    name: 'oscar',
    age:32
}

let obj1={
    ...obj,
    country: 'mx'
}

console.log(obj1);

//implementación de finally en las prmesas

const helloworld =() =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('hello world'),3000)
        : reject(new Error('Test Error'))
    });
};

helloworld()
  .then(response => console.log(response))
  .catch(error=>console.log(e))
  .finally(()=> console.log('Finalizo'))

  //agrupar regex en bloques

  const regexData= /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2018-04-20');
  const year = match[1]
  const month=match[2]
  const day=match[3]

  console.log(year,month,day);