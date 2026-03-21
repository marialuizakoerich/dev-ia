// ---------------- MODAL TERMO DE USO E POLITICA DE PRIVACIDADE ----------------
// SELECIONAR OS MODAIS
const modalTermos = document.querySelector('.container-modal-termos') as HTMLElement
const modalPrivacidade = document.querySelector('.container-modal-privacidade') as HTMLElement
const modalEsqueceuSenha = document.querySelector('.container-modal-formulario-senha') as HTMLElement

//SELECIONA OS LIKNS
const linksTermos = document.querySelectorAll('a[href="#termos"]')
const linksPrivacidade = document.querySelectorAll('a[href="#privacidade"]')

//SELECIONA OS BOTÕES DE FECHAR
const botoesFechar = document.querySelectorAll('.botao-fechar-janela')
const botoesPadraoLaranja = document.querySelectorAll('.botao-padrao-laranja')

//ABRIR MODAIS
function abrirModal (modal: HTMLElement) {
    modal.classList.add('ativo')
}
//FECHAR MODAIS
function FecharModal (modal: HTMLElement) {
    modal.classList.remove('ativo')
}

//LISTNERS ABERTURA
//TERMOS
linksTermos.forEach (link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault()
        abrirModal(modalTermos)
    })
})
//PRIVACIDADE
linksPrivacidade.forEach (link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault()
        abrirModal(modalPrivacidade)
    })
})

//LISTNERS FECHAMENTO
//BOTÃO FECHAR JANELA
botoesFechar.forEach(botao => {
    botao.addEventListener('click', () => {
        FecharModal(modalTermos)
        FecharModal(modalPrivacidade)
        FecharModal(modalEsqueceuSenha)
    })
})

//BOTÃO LARANJA - ENTENDI
botoesPadraoLaranja.forEach(botao => {
    botao.addEventListener('click', () => {
        FecharModal(modalTermos)
        FecharModal(modalPrivacidade)
    })
})

// ---------------- MODAL RECUPERAÇÃO DE SENHA ----------------

//SELECIONAR O LINK
const linkEsqueceuSenha = document.querySelector('a[href="#esqueceusenha"]')

const linkVoltarLogin = document.querySelector('a[href="#voltarlogin"]')

//ABRIR MODAL
function abrirModalEsqueceuSenha (modal: HTMLElement) {
    modal.classList.add('ativo')
}
//FECHAR MODAIS
function FecharModalEsqueceuSenha (modal: HTMLElement) {
    modal.classList.remove('ativo')
}

//LISTNER ABERTURA 
linkEsqueceuSenha?.addEventListener('click', (evento) => {
        evento.preventDefault()
        abrirModal(modalEsqueceuSenha)
    })

//LISTNER FECHAR PELO LINK VOLTAR AO LOGIN
linkVoltarLogin?.addEventListener('click', (evento) => {
        evento.preventDefault()
        FecharModalEsqueceuSenha(modalEsqueceuSenha)
    })



// ---------------- ALTERNAR FORMULÁRIO DE ENTRAR PARA CRIAR A CONTA ----------------

// SELECIONAR DIVS
const divContainerTituloDireita = document.querySelector('.container-titulo-direita') as HTMLElement
const divFormTabs = document.querySelector('.form-tabs') as HTMLElement
const divLogarCadastrarUsuario = document.querySelector('.logar-cadastrar-usuario') as HTMLElement

const divPoliticas = document.querySelector('.politicas') as HTMLElement


// SELECIONAR BOTÕES
const buttonEntrar = document.querySelector('#button-entrar') as HTMLElement
const buttonCadastrar = document.querySelector('#button-cadastrar') as HTMLElement

//SPAN
const spanDeVolta = document.querySelector('.span-volta')
const pSpan = document.querySelector('.frase-header')



//OCULTAR PALAVRA "DE VOLTA."
function ocultarPalavraVolta (valorBotao: number) {
    if (valorBotao == 0) {
        spanDeVolta?.classList.remove('oculta')
    } else {
        spanDeVolta?.classList.add('oculta')
    }
}

//TROCAR FRASE DO HEADER
function trocarFraseHeader (fraseEntrar: HTMLElement)  {
    fraseEntrar.innerText = 'Crie sua conta e começe agora'
} 

//OCULTAR LABEL E INPUT DO NOME
const labelNome = document.querySelector('#label-cadastro-nome') as HTMLElement
const inputNome = document.querySelector('#input-cadastro-nome') as HTMLElement

function ocultarLabelNome () {
    labelNome?.classList.add('oculta')
}

function ocultarInputNome () {
    inputNome?.classList.add('oculta')
}

//OCULTAR LABEL E INPUT DO CONFIRMAR SENHA
const labelConfirmarSenha = document.querySelector('#label-confirmar-senha') as HTMLElement
const inputConfirmarSenha = document.querySelector('#input-confirmar-senha') as HTMLElement

function ocultarLabelConfirmarSenha () {
    labelConfirmarSenha?.classList.add('oculta')
}

function ocultarInputConfirmarSenha () {
    inputConfirmarSenha?.classList.add('oculta')
}

//OCULTAR DIV ESQUECEU SENHA
const divEsqueceuSenha = document.querySelector('.esqueceu-senha') as HTMLElement
function ocultarEsqueceuSenha () {
    divEsqueceuSenha?.classList.add('oculta')
}

//TROCAR TEXTO DO BOTÃO
function trocarTextoBotao (textoBotao: HTMLElement) {
    textoBotao.innerText = 'Cadastrar'
}



// LISTNER ALTERAR TELA DE LOGIN DE ENTRAR PARA CRIAR CONTA
function clicarEntrar(valorBotao: number){
    ocultarPalavraVolta (valorBotao)

}



// SE BOTAO ENTRAR ESTIVER SELECIONADO ENTAO: 
//ocultar label e input nome
//ocultar labl e input confirmar senha

//SE BOTAO CADASTAR ESTIVER SELECIONADO ENTAO:
//ocultar texto "de volta."
//alterar frasdo header 
//ocultar campo esqueceu senha
//alterar texto botao de etrar para cadastrar










