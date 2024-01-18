//Tipo de dato String

var nombre ="Carlos"; //="" se emplea para datos de tipo cadena
console.log(nombre)

/*
ejemplod de tipos de datos
en Js
*/

/*En este caso la variable numero, no es de tipo cadena, por lo cual no se emplean las comillas*/

//Tipo de dato númerico
var numero = 1000;
console.log(numero)

//Tipo de dato de objeto

//Creacion de variable de tipo objeto

var objeto = {
    nombre : "Juan",
    apellidos: "Correa",
    Edad: "28",
}

//Importante tener en cuenta que cuando estamos empleando un objeto no se emplea el =, si no :, tambien que después de cada linea se debe finalizar con una , pero ademas los numeros tambien deben estar dentro de las comillas,lo que deja en duda si estos se ejecutan como tipo string o como tipo numerico. 
console.log(objeto)

nombre= 10;

//usando el operador typeof podemos determinar de que tipo es la variable que estamos usando

console.log(typeof nombre);
console.log(nombre);