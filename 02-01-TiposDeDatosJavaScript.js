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
// Para poner mas propiedades es necesario separar con , 

var objeto = {
    nombre : "Juan",
    apellidos: "Correa",
    Edad: "28",
    Telefono: "3107202739"
}

//Importante tener en cuenta que cuando estamos empleando un objeto no se emplea el =, si no :, tambien que después de cada linea se debe finalizar con una , pero ademas los numeros tambien deben estar dentro de las comillas,lo que deja en duda si estos se ejecutan como tipo string o como tipo numerico. 
console.log(objeto)

nombre= 10.5;
// las cadenas se pueden definir con comillas simples o dobles. 
//usando el operador typeof podemos determinar de que tipo es la variable que estamos usando

//Leccion 3 typeof. 
/*
Js es un lenguaje de programación dinamico, es decir, las variables pueden cambiar con el tiempo. 
*/

console.log(typeof nombre);
console.log(nombre);
console.log(typeof objeto);

//tipo de dato booblean (true, False)

var bandera = true;
console.log(typeof bandera); 
// se observa que el tipo es boleado. 

bandera= false;
console.log(typeof bandera);
// Otro tipo de dato empleado en Js

//Una función es una su vez otro tipo de dato en Js
/*
Una funcion contiene cierta cantidad de lineas de código, entonce spodemos reutilizar estas linea de codigo las veces que sena necesarias llamadno esta función, es decir, una funcion permite reutilizar unas lineas de código
*/

function miFuncion (){}
console.log(typeof miFuncion);

//Tipo de datos simbol

var simbolo = Symbol("mi simbolo");
console.log(simbolo);

// Tipo clase es una function

class persona{
    constructor(nombre, apellido) {
        this.nombre= nombre;
        this.apelido = apellido;
    }
}

console.log(typeof persona)

//Tipo de dato undefined
var x;
console.log(x);
//No esta definida pero tiene un valor. es decir, es un tipo de dato. 

//null significa ausencia de valor 

var y= null;
console.log(typeof y)

// variables de tipos arrays y son de ipo object

var autos = ["BMW", "Audi", "Volvo"]
console.log(autos);
console.log(typeof autos);

//Tipo de variables vacias

var z= '';
console.log(z);
console.log(typeof z);

//concatenación de cadenas en JaaScript