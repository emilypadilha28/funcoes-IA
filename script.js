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
                afirmacao: "pensando no possível distanciamento e menor valorização do mundo natural. "
            },
            {
                texto: "Onde vamos conseguir água?",
                afirmacao: "pensando nas novas formas de aprender sobre e talvez até proteger a natureza."
            }
        ]
    },
    {
        enunciado: "Assim que você sai de casa e se depara com o acúmulo de lixo nas ruas, um noticiário local alerta sobre a capacidade esgotada do aterro sanitário e a poluição dos mares – qual seria o seu primeiro pensamento sobre o impacto do lixo no seu ambiente?",
        alternativas: [
            {
                texto: "Que nojo!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "O que podemos fazer com tanto lixo?",
                afirmacao:  "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "você respira fundo e sente o ar pesado, um amigo comenta sobre a quantidade de carros na rua e as indústrias da região – qual seria o seu primeiro pensamento sobre o impacto da poluição do ar na sua saúde?",
        alternativas: [
            {
                texto: "Preciso de ar puro!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: " Como o ar ficou tão ruim?",
                afirmacao:  "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Assim que você tenta observar um pássaro e percebe que há menos espécies na sua região, um documentário mostra a destruição de florestas e a perda de habitats – qual seria o seu primeiro pensamento sobre o impacto da perda de biodiversidade?",
        alternativas: [
            {
                texto: "Onde foram os animais?",
                afirmacao: "afirmação"
            },
            {
                texto: "Que tristeza para o planeta!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
