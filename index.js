//Ejercicio1
//Utilizo bucles anidados para probar todas las combinaciones posibles de dos números en un arreglo

function SumBruteForce(nums, requiredSum) {

  //Primer bucle: recorre cada número en el arreglo desde el inicio hasta el último elemento
  for (let i = 0; i < nums.length; i++) {

 //Segundo bucle: comienza desde el siguiente elemento después de i. Así, aseguramos que no estamos sumando el mismo número dos veces
    for (let j = i + 1; j < nums.length; j++) {
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

console.log(SumBruteForce(nums1, requiredSum)); // Resultado: false
console.log(SumBruteForce(nums2, requiredSum)); // Resultado: true




//Ejercicio2
//Utilizo un conjunto (Set) para almacenar los números visitados, calcular su complemento y luego verificar si se encuentra en el conjunto

function SumOptimized(nums, requiredSum) {
  //Creo un conjunto vacío para almacenar números que he encontrado
  const seenNumbers = new Set();

  //Recorro cada número en el arreglo
  for (let num of nums) {
    //Calculo el complemento necesario
    const complement = requiredSum - num;

    //Verifico si el complemento ya fue agregado al conjunto
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

console.log(SumOptimized(nums3, requiredSum)); // Resultado: false
console.log(SumOptimized(nums4, requiredSum)); // Resultado: true
