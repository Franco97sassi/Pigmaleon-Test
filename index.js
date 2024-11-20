//Ejercicio1
//Utilizo bucles anidados para probar todas las combinaciones posibles de dos números en un arreglo

function SumBruteForce(nums, requiredSum) {

    //Primer bucle: recorre cada número en el arreglo desde el inicio hasta el penúltimo elemento
    for (let i = 0; i < nums.length; i++) {

    //Segundo bucle:comienza desde el siguiente índice al del número actual asi se evitan comparaciones repetidas
        for (let j = 0; j < nums.length; j++) {

    //En cada iteración, verificamos si la suma de dos números actuales es igual a requiredSum
            if (nums[i] + nums[j] === requiredSum) {
                return true;
            }
        }
    }
    return false;
}

// Ejemplo de uso
const nums1 = [1, 4, 3, 9];
const nums2 = [1, 2, 4, 4];
const requiredSum = 8;

console.log(SumBruteForce(nums1, requiredSum));  
console.log(SumBruteForce(nums2, requiredSum));  







//Ejercicio2
//Utilizo un conjunto (Set) para almacenar los números visitados y para buscar complemento en tiempo constante
function SumOptimized(nums, requiredSum) {

    //Creo un conjunto vacío para almacenar números ya visitados
    const seenNumbers = new Set();

    //Recorro cada número en el arreglo
    for (let num of nums) {

    //Calculo el complemento necesario
        const complement = requiredSum - num;

    //Verifico si el complemento ya fue visto
        if (seenNumbers.has(complement)) {
            return true;
        }
                //Si no esta, agrego el número actual al conjunto

        seenNumbers.add(num);
     }

    //Si se recorren todos los números sin éxito retorno false
    return false;

}

// Ejemplo de uso
const nums3 = [1, 4, 3, 9];
const nums4 = [1, 2, 4, 4];

console.log(SumOptimized(nums3, requiredSum)); // Output: false
console.log(SumOptimized(nums4, requiredSum)); // Output: true
