// 1. Validador de Palíndromos
function esPalindromo(texto) {
    const limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return limpio === limpio.split('').reverse().join('');
}

// 2. Generador de Fibonacci
function fibonacci(n) {
    let arreglo = [0, 1];
    for (let i = 2; i < n; i++) {
        arreglo.push(arreglo[i - 1] + arreglo[i - 2]);
    }
    return arreglo.slice(0, n);
}

// 3. Detector de Anagramas
function sonAnagramas(p1, p2) {
    let a = p1.toLowerCase().split('').sort().join('');
    let b = p2.toLowerCase().split('').sort().join('');
    return a === b;
}

// Aquí ejecutas y vemos los resultados en la terminal:
console.log("1. Palíndromo:", esPalindromo("oro")); // true
console.log("2. Fibonacci:", fibonacci(5));            // [0, 1, 1, 2, 3]
console.log("3. Anagrama:", sonAnagramas("amor", "roma")); // true