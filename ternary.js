/**
 * TERNARY --> three parts
 *
 *  ?   :
 *
 * condition ? do something when true : do something when false
 */

const age = 112;

// normal if-else
// if(age >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("Ghumay thako");
// }

// simple ternary
// age >= 18 ? console.log("vote dio") : console.log("ghumai thako");

let price = 500;
const isLeader = true;

// if (isLeader === true) {
// 	price = 0;
// } else {
// 	price = price + 100;
// }
// console.log(price);

price = isLeader === true ? 0 : price + 100;
console.log(price);


// OPTIONAL: semi-advanced ternary

if(isLeader === true){
    if(price > 1000){
        price = price / 2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}

price = isLeader === true ? 0 : price + 1000;
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;