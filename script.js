const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você liga a torneira e percebe que a água está racionada na sua região, um vizinho comenta sobre a falta de chuvas e a poluição dos rios – qual seria o seu primeiro pensamento sobre o impacto da escassez de água no seu dia a dia?",
        alternativas: [
            {
                texto: "Preciso economizar!",
                afirmacao: "Racionamento e poluição da água levam à urgência de economizar."
            },
            {
                texto: "Onde vamos conseguir água?",
                afirmacao: "Racionamento,seca e poluição da água geram preocupação sobre o suprimento para o dia a dia."
            }
        ]
    },
    {
        enunciado: "Assim que você sai de casa e se depara com o acúmulo de lixo nas ruas, um noticiário local alerta sobre a capacidade esgotada do aterro sanitário e a poluição dos mares – qual seria o seu primeiro pensamento sobre o impacto do lixo no seu ambiente?",
        alternativas: [
            {
                texto: "Que nojo!",
                afirmacao: "Ver lixo na rua, com alerta sobre aterro e poluição marinha, provoca repulsa imediata."
            },
            {
                texto: "O que podemos fazer com tanto lixo?",
                afirmacao:  "O lixo acumulado e aterros cheios levam à urgente busca por soluções para os resíduos."
            }
        ]
    },
    {
        enunciado: "você respira fundo e sente o ar pesado, um amigo comenta sobre a quantidade de carros na rua e as indústrias da região – qual seria o seu primeiro pensamento sobre o impacto da poluição do ar na sua saúde?",
        alternativas: [
            {
                texto: "Preciso de ar puro!",
                afirmacao: "O ar pesado, carros e indústrias geram preocupação instintiva por ar puro e saúde."
            },
            {
                texto: " Como o ar ficou tão ruim?",
                afirmacao:  "O ar pesado, carros e indústrias levam à curiosidade e preocupação sobre sua deterioração."
            }
        ]
    },
    {
        enunciado: "Assim que você tenta observar um pássaro e percebe que há menos espécies na sua região, um documentário mostra a destruição de florestas e a perda de habitats – qual seria o seu primeiro pensamento sobre o impacto da perda de biodiversidade?",
        alternativas: [
            {
                texto: "Onde foram os animais?",
                afirmacao: "A diminuição de pássaros e a destruição de habitats "
            },
            {
                texto: "Que tristeza para o planeta!",
                afirmacao: "A redução de espécies e a destruição de habitats geram profunda tristeza pelo impacto na biodiversidade e no planeta."
            }
        ]
    },
    {
        enunciado: "Uma campanha na internet alerta sobre o acúmulo de lixo nos aterros sanitários. Qual seria o seu primeiro pensamento sobre o impacto do consumo excessivo no planeta?",
        alternativas: [
            {
                texto: "Devo priorizar produtos com menos embalagem!",
                afirmacao: "Alerta de lixo e consumo excessivo estimula a priorizar produtos com menos embalagem."
            },
            {
                texto: "Nunca vamos conseguir resolver isso!",
                afirmacao: "Alerta de lixo e consumo excessivo gera desânimo sobre a solução do problema."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Esse é o futuro...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
