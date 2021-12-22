let variable = "il faut que le 'i' du 'il' soit en majuscule ! ";
let variable2 = 'je test';

function maj(string) {
    return string.charAt(0).toUpperCase()+ string.slice(1);
}

console.log(maj(variable));
console.log(maj(variable2));