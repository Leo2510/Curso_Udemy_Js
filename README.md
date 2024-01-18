# Curso_Udemy_Js

## Leccion 1 Creación del "Hola Mundo desde Js"

<div style="text-aling: justify">
- Cuando se esta dando la información en un formulario. <br>

por ejemplo para ingresar o crear una cuenta Facebook, se espeficica el tipo de caracter, que puede ser de tipo String,  es decir, en formato de cadena, pero también puede existir en forma de número, número real, flotante. etc. <br>
Para cada uno de estos casos se tiene en cuenta que se debe definir cada varible de forma indipendiente. 
</div>

- Lo primero a tener en cuenta en la forma de definir las variales para esto se puede usar la palabra reservada **_var_** 

Por ejemplo 

```
var Nombre= "Leonardo";
```

Es necesrio tener encuenta que para que se ejecute el Js, este debe estar referenciado por un HTML, de lo contrario se debe emplear el uso de una terminal como el caso de Quokka el cual permite interpretar la información. 

Se tiene en cuenta que una misma variable se puede modificar en el transurso del código por lo que es necesario tener presente la forma en que se escribe y como se denota. 

es decir podemos cambiar en cualquer momento la cadena que se desea imprimir.

cuando se guarda los cambios realizado Quokka se finaliza. no es necesario siempre estar creando un nuevo archivo para ejecutar la extension de Quokka, para esto se puede usar la combinacion de teclas _**Ctrl + Shift + P** Lo que permite desplegar una lista de herramientas en la cual se puede buscar la extesion Quokka, luego se ingresa en la ópción Toogle(star/stop) on current file. esto quiere decir que se va a ejecutar la extension en el archivo actual. 

Es necesario recordar que se esta empleando Quokka, porque no tenemos el Js con un HTMl que permita ver los cambios desde un navegador, por lo que necesitamos tener una terminar que nos permita verificar la información. 

# Leccion 2 "Tipos de Datos en JavaScript"

Vamos a definir una variable como **var** y luego se denota de tipo cadena empleando los simbolos **="**

Para comentarios de una linea empleamos los simbolos /*  */ lo que permite tener un comentario de varias lineas y en el caso de tener lines de código que puedan afectar el funcionamiento del mismo, se puede suspender su uso empleando esto como comentarios. 

Cuando la variable a trabajar es de tipo numero entonces se emplea de la siguiente manera el código **var=1000** se tiene en cuenta que en este caso como no es un string no es necesario emplear el formato de cadena, es decir, dentro de las "comillas".

Otro tipo de dato que se puede tener en Js es el de tipo objeto en este caso para acceder a este se emplea la nomenclatura 

```
var nombre = {

}
```

donde se tiene en cuenta que al abrir las llaves nos permite definir otras variblaes del objeto, como lo son el nombre, apellido, edad etc. que a su vez pueden ser variables de tipo cadena, o de tipo numerico. <br>
***importante en este caso*** no es necesario emplear la palabra **var**, solo se pone el nombre de la variable por ejemplo.

```
var estudiante ={
    Nombre : "Leonardo",
    Apellido : "Perez",
    Edad : 28,
}
```
<br>

En JavaScript se conoce como un lenguaje de tipo de dinamico, es decir, a traves del codigo podemos dar un nuevo valor a una varialbe y apartir de ese punto se ejecutara con la nueva información. 
<br>

Ademas cuando esto ocurre no es necesario volver a emplear la palabra **var** solo es indispensable escribir el nombre de la variable y con eso serpia suficiente para poder ejecuar la variable y dar un núevo valor a la misma. 

<br>

ahora podemos determinar de que tipo es la variable con la que estamos trabajando y para esto solo basta con usar el operar type of. por ejemplo 

```
nombre = 10;
console.log(typeof nombre); number
```


