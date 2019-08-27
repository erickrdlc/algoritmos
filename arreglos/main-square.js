//Hallar el minimo de los cuadrados



let a = [4, 8, 2, 5, 10, 3]
console.log(getMin(a))
function getMin() {
    let min = a[0]
    if(a.length == 0) return -1
    for(let i = 0; i < a.length; i++) {   //se inicia la verificacion
        if (square(a[i]) < min) min = square(a[i])     //se compara con el siguiente valor del arreglo y coge la respuesta
    }
    return min
}
console.log(getMax(a))
function getMax() {

    let max = a[0]
    for(let i = 0; i < a.length; i++) {
        if (square(a[i]) > max) max = square(a[i])
    }
    return max
}

function square (n){
    return n*n
}


