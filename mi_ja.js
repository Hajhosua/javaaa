//funcion tipo flecha
let sumar=(number) =>{
    return number+5
}
//funciones asignadas a una variable
let f= sumar;

console.log(f(5));//usando f

console.log(sumar(5));//usar sumandpo




//callback functions-------------------------------
//se trata de mandarle como parametro entrada de una funcion a otra funcion

const esPar = (numero)=>{
    return numero%2==0;//regresa ub boolean
}

const validarParidad =(num,callbackFn)=>{
    const esPar = callbackFn(num);
    console.log("el numero  es entero?: "+esPar );
}

validarParidad(7,esPar);


//calback function
const divideporDos =(numero)=>{
    return numero/2;
}

const divideNumero =(numero,callbackFn)=>{
     return callbackFn(numero);
}

console.log(divideNumero(10,divideporDos));

/*  metodos para arreglos*/

const numeros = [1,2,3,4,5,6,7,11,22];
let numeroDos =[1,2,3,4,5,65,88,10,4,2];

//.reduce() lo reduce a un solo valor

const sumaValores = numeros.reduce((acumulador,ValorActual)=>{
    return acumulador+ValorActual;
});

console.log(sumaValores);

//.foreach()

const fnDos = numeroDos.forEach(number =>{
    console.log(number);
});


//.filter()

const fntres = numeroDos.filter(number =>{
       //como voy a filtrar, la condicion

       return number>10;
});

console.log(fntres);


//.map()

const nombresPersonas =["jhosua","angelica","juan pablo","maria elena"];

const anuncios = nombresPersonas.map(miembro =>{
    return miembro + "se unio al grupo";
});

console.log(anuncios);


//hacer una funcion con dos con callbac
/*
const divideporDos =(numero)=>{
    return numero/2;
}

const divideNumero =(numero,callbackFn)=>{
     return callbackFn(numero);
}

console.log(divideNumero(10,divideporDos));*/


//tareaaaa---------

const multiplicaPordos = (numeros)=>{
       return numeros*10;
}

const multiNumero =(numeros,callB)=>{
    return callB(numeros);
}
 console.log(multiNumero(10,multiplicaPordos))




