var number = document.body.querySelectorAll(".num"),
    operators = document.body.querySelectorAll(".operador"),
    display = document.body.querySelector("#display"),
    result = '',
    text = ["Dark Mode", "Modo Dark", "Modo Escuro", "Melhor Modo","Modo Sombrio","Modo Noturno"],
    secret=0;
    

function addNumber (value) {
    //add valor ao visor
    show(result+value);
    result = display.value;
}

function operations (op) {
    //seleciona operação a ser realizada
    if(op=="="){
        show(eval(display.value));
        clear();
    }else if(op=="zera"){
        clear();
        show('');
    }else{
        result = display.value+op;
        show(result);
    }
}

function clear(){
    result = '';
}

function show(value){
    display.value = value;
}

number.forEach(element => {
    //adiciona event listeners aos numeros
    var value = element.value;
    element.addEventListener('click',()=>{addNumber(value)})
});

operators.forEach(element => {
    //adiciona event listeners aos operadores
    var value = element.value;
    element.addEventListener('click',()=>{operations(value)})
});

function changeText(){
    var current = document.getElementById('dm'), 
    index = text.indexOf(current.innerText);

    secret++;

    if(secret==10 || secret==50 || secret==100 || secret==1000){
        alert("New Achievement Unlocked. \n"+`${secret} Mode Changes`)
    }else if(secret == 1000){
        alert("Parabéns você zerou a calculadora!!! \n Desenvolvido por Pedro Teixeira")
    }

    if(index<text.length-1){
        current.innerText = text[index+1]
    }else{
        current.innerText = text[0]
    }
}