// let a = 15;
// let b = 25;

let a = 'Bonjour';
let b = 'toi ';

function calcul(nbr1,nbr2) {
    if (!nbr1 || !nbr2) {
        return 'Attention , au moins 1 de vos paramètre est vide !' ;
    } 
    else if (typeof nbr1 != 'number' || typeof nbr2 != 'number') {
        return 'Attention , au moins 1 de vos paramètre n\'est pas un nombre !';
    } else {
        return nbr1*nbr2+nbr1+nbr2;
    }
}

console.log(calcul(a,b));