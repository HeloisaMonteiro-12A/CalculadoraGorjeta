let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector(".conta input");
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento){
    conta = Number(evento.target.value);
    calcular()
}

const pessoasInput = document.querySelector("#pessoas");
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento){
    const paragrafoErro = document.querySelector(".pessoas #erro");
    const divErro = document.querySelector(".pessoas .input-box");

    if(evento.target.value === "0"){
        paragrafoErro.style.display = "block";
        divErro.setAttribute("id", "erro-div")    
    }else{
        paragrafoErro.style.display = "none";
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value);    
    }
    calcular()
}

const botoesTip = document.querySelectorAll(".tip input[type='button']");
botoesTip.forEach(botao => {
    botao.addEventListener("click", receberPorcentagem)
})

function receberPorcentagem(evento){
    botoesTip.forEach(botao => {
        botao.classList.remove("botao-ativo")

        if(botao.value === evento.target.value){
            botao.classList.add("botao-ativo")
        }
    })

    if(evento.target.value !== ""){
        porcentagem = parseFloat(evento.target.value) / 100
    } else{
        porcentagem = 0
    }
    
    calcular()
}

const tipInput = document.querySelector("#outra")
tipInput.addEventListener("input", receberPorcentagem)
function calcular(){
    if(conta !== 0 && pessoas !== 0 && porcentagem !== 0){
        const strongTipTotal = document.querySelector("#tip-por-pessoa");
        const strongTotal = document.querySelector("#total-por-pessoa");

        if (strongTipTotal && strongTotal) {
            strongTipTotal.innerHTML = `$${(conta * porcentagem / pessoas).toFixed(2)}`;
            strongTotal.innerHTML = `$${((conta + (conta * porcentagem)) / pessoas).toFixed(2)}`;
        }
    }
}

const botaoLimpar = document.querySelector(".resultados button");
botaoLimpar.addEventListener("click", limpar);

function limpar(){
    contaInput.value = "";

    botoesTip.forEach(botao => {
        botao.classList.remove("botao-ativo")
    })

    pessoasInput.value = "";

    tipInput.value = "";
    document.querySelector(".tip-total > strong").innerHTML = "$0.00";
    document.querySelector(".total > strong").innerHTML = "$0.00";
}
