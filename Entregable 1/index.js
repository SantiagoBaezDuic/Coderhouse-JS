let input = prompt("Ingrese una lista de números, separados por comas (,).")

let stringArray = input.split(',');

let numberArray = [];

for (let i = 0; i < stringArray.length; i++){
    let number = parseInt(stringArray[i]);
    numberArray.push(number);
}

let result;

for (let i = 0; i < numberArray.length; i++){
    if(i !== 0){
        result += numberArray[i];
    } else {
        result = numberArray[i];
    }
}

alert('El resultado de la sumatoria de los números ingresados es ' + result);