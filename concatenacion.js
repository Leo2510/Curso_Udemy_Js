var nombre= 'Juan';
var apellido= 'Pérez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2= 'Carlos'+ ' ' + 'Lara';
console.log(nombreCompleto2);

//JavaScript lee de izquierda a derecha, como se observa la primer variable de la concatenacion es un noombre, es decir, una varaible de tipo cadena, luego se esta concaenando con una var de tipo numerico, sin embargo, Js, toma el número como tipo cadena, ya que inicialmente leyo la var de nombre como string y no realiza cambios o ajustes a esto. 
var x = nombre + 219;
console.log(x)

x = nombre+2+4;
console.log(x)
/*
Ahora bien si lo que deseamos es que al concatenar los números se sumen, en este caso ponemos los números entre parentesis, y lo que ocurre es que javascript toma como prioridad la suma ya que esta dentro de un parentesis de operación. 
*/

x = nombre + (2+4);
console.log(x);