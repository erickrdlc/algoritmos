//Obtener posicion mínimo/Máximo

let a = [4, 8, 1, 5, 10, 3]

console.log(getMinIndex(a))
function getMinIndex(a){
    if(a.length == 0) return -1
    let min = a[0]
    let minIndex = 0 
    for(let i = 0; i < a.length; i++) { //
        if (a[i] < min) { //
        min = a[i] // coge el nuevo minimo
        minIndex=i  // coge la nueva posicion
        }
    }
    return minIndex

}


console.log(getMaxIndex(a))
function getMaxIndex(a){
    if(a.length == 0) return -1
    let max = a[0]
    let maxIndex = 0
    for(let i = 0; i < a.length; i++) {
        if (a[i] > max) {
        
        max = a[i]
        maxIndex=i
        }
    }
    return maxIndex

}