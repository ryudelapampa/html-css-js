let tableau1 = [1,5,8,20,5];
let tableau2 = [1,5,"test",78];
let tableau3 = [];

function checkNbr(tab) {
    let flag = false;
    let i = 0;
    while (i<tab.length) {
        if (typeof tab[i] == 'number') {
            flag = true;
            // console.log(flag);
        } else {
            flag = false;
            break;
        }
        i++;
    }
    return flag;
}


console.log(checkNbr(tableau1));
console.log(checkNbr(tableau2));
console.log(checkNbr(tableau3));