function newFunction(name, age, country){
  var name = name || 'osca';
  var age = age || 32;
  var country = conutry ||'MX';
  consoe.log(name, age, country);
}

//es6
function newFunction2(name = 'oscar', age = 32, country ="MX"){
  console.log(name, age, country);
};

newFunction2();
newFunction2('ricardo', '23', 'CO');

// Como concatenar

// Modo largo

// let hello = "Hello";
// let world = "world";
// let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase);

// Modo cort
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
