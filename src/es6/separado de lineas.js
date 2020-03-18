let lorem  = "qui consequatur. Commodi. Ipsum vel duis yet minima \n" + "Otra frase epicaque necesitamos"
//  \n sirve para realizar una nueva linea


// Es6
let lorem2 = `otra frase epica que necesitamos
ahora esta es otra fraseepica
`;

console.log(lorem)
console.log(lorem2)


// asignacionde valores
let person = {
  'name': 'oscar',
  'age': 32,
  'country': 'MX'
}

console.log(person.name, person.age, person.country)

let {name, age, country} = person;
console.log(name, age, country);
