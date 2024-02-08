// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista() {
    console.log(lenguajesDeProgramacion);
}

mostrarLista();

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguajesEnOrdenInverso() {
    for (let i  = lenguajesDeProgramacion.length -1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
        
    }
    
}

mostrarLenguajesEnOrdenInverso();

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
    let suma = 0;
    for (let index = 0; index < lista.length; index++) {
        suma += lista[index];
        
    }
    return suma / lista.length;
}

let numeros = [10, 55, 60, 88, 90, 100];
let promedio = calcularPromedio(numeros);
console.log("El promedio es:", promedio);

// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function encontrarNumeroMenorMayor(listado) {
    let numeroMayor = listado[0];
    let numeroMenor = listado[0];

    for (let b = 1; b < listado.length; b++) {
        if (listado[b] > numeroMayor) {
            numeroMayor = listado[b];
        }
        if (listado[b] < numeroMenor) {
            numeroMenor = listado[b];
            
        }
        
    }
    
    console.log("El numero mayor es: ", numeroMayor);
    console.log("El numero menor es: ", numeroMenor);

}

let numerosComparables = [17, 8, 65, 23, 215, 31];
encontrarNumeroMenorMayor(numerosComparables);

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaDeElementos(listaParaSumar) {
    let sumatoria = 0;
    for (let f = 0; f < listaParaSumar.length; f++) {
        sumatoria += listaParaSumar[f];
        
    }
    return sumatoria;
}

let elementos = [3, 9, 22, 16, 62];
let sumatoria = sumaDeElementos(elementos);
sumaDeElementos(elementos);
console.log("La sumatoria de los elementos de la lista es: ", sumatoria);


// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function encontrarPosicion(lista, elemento) {
    for (let g = 0; g < lista.length; g++) {
        if (lista[g] === elemento) {
            return g;
        }                
    }
    return -1;
}

let lista = [11, 4, 55, 31, 230];
let elemento = 230;
let posicion = encontrarPosicion(lista, elemento);

console.log (posicion);


// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaPrimaria = [1, 23, 9, 9, 30, 17];
let listaSecundaria = [9, 7, 11, 1, 0, 3];
let listaResultado =[];

function sumarElementosListas(listaPrimaria, listaSecundaria) {
  for (let i = 0; i < listaPrimaria.length; i++) {
    listaResultado[i] = listaPrimaria[i] + listaSecundaria [i];
  }
  return listaResultado.push();
}

sumarElementosListas(listaPrimaria, listaSecundaria);
console.log(listaResultado);



// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let numerosBase = [2, 4, 6, 8];
let cuadrados = [];

function cuadradoDeNumeros(numerosBase) {
    for (let i = 0; i < numerosBase.length; i++) {
        cuadrados[i] = numerosBase[i]*numerosBase[i];        
    }
    return cuadrados.push();
}

cuadradoDeNumeros(numerosBase);
console.log(cuadrados);
