/* comentário 
de bloco */ 
/*function xxx () {
    corpo da função - comandos js 
}

arrow functions:
() => {

} */

document.querySelector('#botao').addEventListener('keydow', () => {
    /* neste momento o js vai pegar o nome digitado e armazenar numa 
    variável de memória - porção da memória ram */

/*JS FIQUE OUVINDO NO DOCUMENTO QUANDO OUVIR CLICK FAÇA ISSO....*/


    let nome; /*declaração da variável de memória nome */
    nome = document.getElementById('nome').value; /* atribuindo o nome digitado para a variável nome */

    let sobrenome = document.getElementById('sobrenome').value;


    /*IMPRIMIR: O NOME DIGITADO É: SILVIA */

    /* juntar = concatenar (+)*/

    document.write('O nome digitado é '+nome+''+sobrenome);
})


/* criar um evento para escutar o botão */

document.querySelector('#botao').addEventListener('click', ()=>{
    /*corpo da função*/

    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;

    /*cubo rosa = método -> vai fazer alguma ação */
    /*juntar = concatenar*/
    alert('O nome digitado é '+nome+''+sobrenome);
})