// debe imprimir numeros de 1 a n
// imiprimir fizz en vez de los numeros que sean multiplos de 3
// imprimir buzz el lugar de los numeros multiplos de 5
// imprimir fizzbuzz si el numero es multiplo de ambos

function fizzBuzz (n) {
    let i = 0;
    const arr = [];
    do {
        i = i + 1;
        if ( i% 3 === 0 && i%5 === 0) {
            arr.push('fizzbuzz');
        } else if (i%3 === 0 && i%5 !== 0) {
            arr.push('fizz');
        } else if (i%5 === 0 && i%3 !== 0) {
            arr.push('buzz')
        } else {
            arr.push(i);
        }
        
    } while (i < n);
    console.log(arr);
};

fizzBuzz(50);


