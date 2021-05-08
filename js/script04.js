'use strict';


 let input = document.querySelector('.field');
function btn1 (){
    let out = '';
    for(let i = 0; i <= input.value ; i++){
        for(let k = 0; k < i; k++){
           
        
        out += '*';
        }
    
    out += '<br>';
    document.querySelector('.two').innerHTML = out;
}
}


document.querySelector('.btn').onclick = btn1;
