// CHANGE LA PREMIERE LETTRE DU MOT PAR UNE MAJUSCULE
function maj(string) {
    return string.charAt(0).toUpperCase()+ string.slice(1);
}

// PHRASE A FORMATER 
let phrase = 'il faut que je test ça ! et puis bon , voila tout ...'

// FORMATE TOUs LES MOTS D'UNE PHRASE 
function majAllWorld(string) {
    let i = 0;

    // RECUPERE LE NOMBRE DE MOTS DANS MA PHRASE
    let nbrMot = string.split(/\s+/).length;
    let formatString = '';
    while (i < nbrMot) {
        formatString = formatString+' '+ maj(string.split(' ')[i]);
        i++;
    }
    return formatString;
}

console.log(majAllWorld(phrase));