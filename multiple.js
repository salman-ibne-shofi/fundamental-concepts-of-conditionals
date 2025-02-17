const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;

// if(salary > 20000 && height > 66){
//     console.log('supatro');
// }
// else{
//     console.log('onno patro khuji');
// }

if(salary > 25000 || height > 72){
    console.log('eso baba kobul');
}
else{
    console.log('vaag tui mogbul');
}

// more and more condition
// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log('eso baba kobul');
// }
// else{
//     console.log('vaag tui mogbul');
// }

if(salary > 25000 && height > 72 && isBCS == true){
    console.log('eso baba kobul');
}
else{
    console.log('vaag tui mogbul');
}

// --------------------------- Complex condition--------------------------
if((salary > 25000 && hasCar == true) || isBCS == true){
    console.log('tomar 14 gosti raji');
}

if((salary > 25000 || hasCar == true) && isBCS == true){
    console.log('tomar 14 gosti raji');
}
