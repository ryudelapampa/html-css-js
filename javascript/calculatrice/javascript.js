// FONCTION RESET
function reset() {
    let affichage = document.getElementById("affichage");
    affichage.value = "";
    let affRes = document.getElementById("res");
    affRes.value ="";
}

let affOperation = document.getElementById("affichage");
let affResultat = document.getElementById("res")
let calculatrice = document.getElementById("calculatrice");
 
calculatrice.onclick = function(event) {

    if (event === undefined) event = windows.event;
    var target = 'target' in event? event.target : event.srcElement;
    if (target.id == "reset") {
        reset();
        resReset();
    } 
    else if (target.id == "result"){

        let calcul = eval(affichage.value);
        affResultat.value = calcul;
    } 
    else {
        affOperation.value = affOperation.value + target.value;
    }
}