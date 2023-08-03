/* O que precisamos fazer? - quando clicaremos no botão troca de tma, temos
que alterar a cor do tema dapágina para as cores do tema claro ou escuro

Objetivo 1- quando clicar no botão troca de tema, adicionar a classe modo-escuro
no body pra que os estilos no modo escuro sejam aplicados e mudar a imagem pra lua

Passo 1- pegar o JS o elemento HTML correspondente ao botão de troca de tema

Passo 2- pegar no JS o elemento HTML coreespondente ao body

Passo 3- identificar o clique do usuário no botão de troca de tema

Passo 4- adicionar a classe modo escuro no body

passo 5- trocar a imagem do botão de alterar tema para lua

Objetivo 2- quando clicar no botão de trocar de tema, caso o body já tenha a classe
modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem para sol

Passo 6-Verificar se o body possui a classe modo-escuro

Passo 7- remover a classe modo-escuro do body

Passo 8- trocar a imagem do botão de alterar tema pra sol

*/



//   Objetivo 1- quando clicar no botão troca de tema, adicionar a classe modo-escuro
//   no body pra que os estilos no modo escuro sejam aplicados e mudar a imagem pra lua

//Passo 1- pegar o JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2- pegar no JS o elemento HTML coreespondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
// Passo 3- identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

// Objetivo 2- quando clicar no botão de trocar de tema, caso o body já tenha a classe
    // modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem para sol

    // Passo 6-Verificar se o body possui a classe modo-escuro
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    // Passo 7- remover a classe modo-escuro do body
    if (modoEscuroAtivo) 
        {body.classList.remove("modo-escuro");

        // Passo 8- trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens-pokemon/sun.png");
    }
    else {
        body.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", ".src/imagens-pokemon/moon.png");
    
    // Passo 4- adicionar a classe modo escuro no body
    body.classList.add("modo-escuro");

    // passo 5- trocar a imagem do botão de alterar tema para lua
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens-pokemon/moon.png");

    }
});

