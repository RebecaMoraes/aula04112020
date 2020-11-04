document.querySelector('#btn').addEventListener('click', ()=>{
    let n1,n2, total;
    n1=parseInt(document.getElementById('n1').value);  /* '1' depois 1*/
    n2=parseInt(document.getElementById('n2').value);

    /*parseFloat*/
    
    /* todas as vezes que a informação vier de um input ela vem
    como se fosse uma string '1' */


    total = n1/n2; 
    alert('Resultado= '+total);
    /*NaN - not a number*/
    /* acrescentar os cálculos de subtração n1 - n2, multiplicação n1*n2 e divisão porém tome cuidado pois o usuário pode digitar 0 e eu não posso dividir por 0. 
    n1/n2  se n2>0.
    Mostrar os resultados no mesmo alert, somente quebrando a linha.*/

})