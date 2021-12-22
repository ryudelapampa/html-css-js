let tab = [0,20,20,20,20,20];
let tab2 = [0,20,15,20,'test'];
let tab3 = [];

function calculMoy(tableau) {
    let flag = false;
    let i = 0;
    let somme = 0;

    if (tableau.length == 0 ) {
        return 'Moyenne = '+0;
    } else {
        while (i<tableau.length){
            if (typeof tableau[i] == 'number'){
                flag = true;
            } else {
                flag = false;
                break;
            }
            i++;
        }
    
        if (flag == true) {   
            i = 0;
            while (i<tableau.length) {
                somme = somme + tableau[i];
                i++;
            } 
            return 'Moyenne = '+somme / tableau.length;
        } else {
            return "Attention , certaines valeurs du tableau ne sont pas des nombres !";
        }
        
    }
}

    

console.log(calculMoy(tab));
console.log(calculMoy(tab2));
console.log(calculMoy(tab3));