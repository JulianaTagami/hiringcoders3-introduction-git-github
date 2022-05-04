var elements  = [];
var topo      = -1;
const MAX     =10;

function push(num){
    if (topo < MAX){
        topo = topo + 1;
        elements[topo] = num;
    }
    else{
        console.log("Pilha esta cheia");
    }
}

function estaVazia(){
    return topo == -1;
}


function pop(){
    if (topo!= -1){
        let num = elements[topo];
        topo = topo -1;
        return num;
    }
    else{
        console.log("Pilha esta vazia");
    }
}



push(10);
push(20);
push(30);

console.log(elements);

console.log(pop());
console.log(pop());
console.log(pop());