// ---------------- MODAL TERMO DE USO E POLITICA DE PRIVACIDADE ----------------
// SELECIONAR OS MODAIS
const modalTermos = document.querySelector('.container-modal-termos') as HTMLElement
const modalPrivacidade = document.querySelector('.container-modal-privacidade') as HTMLElement

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
// SELECIONAR O MODAL
const modalEsqueceuSenha = document.querySelector('.container-modal-formulario-senha') as HTMLElement

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





