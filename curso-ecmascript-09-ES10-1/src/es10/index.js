let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

// flat(x) resuelve el 2°nivel
// si no hubiera numero en el parentesis, se resolveria como
// [1,2,3,1,2,3,[1,2,3]]

// al tener un 2
// [1,2,3, 1,2,3, 1,2,3]

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));
// mapea los elementos [1, 2, 3, 4, 5]
// pero el cosnsole.log pide el valor y el valor por 2 dando como resultado
// [1,2,2,4,3,6,4,8,5,10]


let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());
// trimStart elimina los espacios en blanco de los string
// trimStart para el inicio del string

let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd());
//trimEnd para el final del string

// forma anterior de enunciar un error
// try {
// 
// } catch (error) {
//   error
// }

try {

} catch {
  error
}


let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));
// con fromEntries se genera un objeto con los valores del let
// {name: 'oscar', age: 32}

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);
