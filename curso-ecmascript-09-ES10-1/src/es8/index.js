const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
// entries.length sirve para traer los objetos de la const y cuenta cuantos hay

const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}

// por ende al imprimir, trae los datos frontend: oscar; backend:Isabel;
// design: ana y luego
// indica que son 3 objetos

const values = Object.values(data);
// values devuelve los valores de un objeto a un arreglo
console.log(values)
console.log(values.length)

// esto solo trae los valores Oscar, isabel, ana
// values.length trae los valores y los cuenta

const string = 'hello';
console.log(string.padStart(7, 'hi'));
// hihello da ese console.log y el 7 indica desde la 7letra
// padstart espara el inicio del string
console.log(string.padEnd(12, ' -----'))
// hello ----
// padEnd es para el final del string
console.log('food'.padEnd(12, '  -----'))

const obj = {
  name: 'oscar',
}

//promesas para trabajar con asyncawait

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
