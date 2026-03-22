// ---------------- MODAL TERMO DE USO E POLITICA DE PRIVACIDADE ----------------
// SELECIONAR OS MODAIS
const modalTermos = document.querySelector(
  ".container-modal-termos",
) as HTMLElement;
const modalPrivacidade = document.querySelector(
  ".container-modal-privacidade",
) as HTMLElement;
const modalEsqueceuSenha = document.querySelector(
  ".container-modal-formulario-senha",
) as HTMLElement;

//SELECIONA OS LIKNS
const linksTermos = document.querySelectorAll('a[href="#termos"]');
const linksPrivacidade = document.querySelectorAll('a[href="#privacidade"]');

//SELECIONA OS BOTÕES DE FECHAR
const botoesFechar = document.querySelectorAll(".botao-fechar-janela");
const botoesPadraoLaranja = document.querySelectorAll(".botao-padrao-laranja");

//ABRIR MODAIS
function abrirModal(modal: HTMLElement) {
  modal.classList.add("ativo");
}
//FECHAR MODAIS
function FecharModal(modal: HTMLElement) {
  modal.classList.remove("ativo");
}

//LISTNERS ABERTURA
//TERMOS
linksTermos.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    abrirModal(modalTermos);
  });
});
//PRIVACIDADE
linksPrivacidade.forEach((link) => {
  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    abrirModal(modalPrivacidade);
  });
});

//LISTNERS FECHAMENTO
//BOTÃO FECHAR JANELA
botoesFechar.forEach((botao) => {
  botao.addEventListener("click", () => {
    FecharModal(modalTermos);
    FecharModal(modalPrivacidade);
    FecharModal(modalEsqueceuSenha);
  });
});

//BOTÃO LARANJA - ENTENDI
botoesPadraoLaranja.forEach((botao) => {
  botao.addEventListener("click", () => {
    FecharModal(modalTermos);
    FecharModal(modalPrivacidade);
  });
});

// ---------------- MODAL RECUPERAÇÃO DE SENHA ----------------

//SELECIONAR O LINK
const linkEsqueceuSenha = document.querySelector('a[href="#esqueceusenha"]');

const linkVoltarLogin = document.querySelector('a[href="#voltarlogin"]');

//ABRIR MODAL
function abrirModalEsqueceuSenha(modal: HTMLElement) {
  modal.classList.add("ativo");
}
//FECHAR MODAIS
function FecharModalEsqueceuSenha(modal: HTMLElement) {
  modal.classList.remove("ativo");
}

//LISTNER ABERTURA
linkEsqueceuSenha?.addEventListener("click", (evento) => {
  evento.preventDefault();
  abrirModal(modalEsqueceuSenha);
});

//LISTNER FECHAR PELO LINK VOLTAR AO LOGIN
linkVoltarLogin?.addEventListener("click", (evento) => {
  evento.preventDefault();
  FecharModalEsqueceuSenha(modalEsqueceuSenha);
});

// ---------------- ALTERNAR FORMULÁRIO DE ENTRAR PARA CRIAR A CONTA ----------------

//MOSTRAR E OCULTAR PALAVRA "DE VOLTA."
const spanDeVolta = document.querySelector(".span-volta") as HTMLElement;

function removeClassOcultaSpan() {
  spanDeVolta?.classList.remove("oculta");
}
function addClassOcultaSpan() {
  spanDeVolta?.classList.add("oculta");
}

//MOSTRAR E OCULAR A FRASE HEADER: ENTRAR
const pHeader = document.querySelector("#p-header") as HTMLElement;

function fraseOpcaoEntrar() {
  pHeader.innerText = "Entre na sua conta para continuar de onde parou";
}
function fraseOpcaoCadastrar() {
  pHeader.innerText = "Crie sua conta e começe agora";
}

//MOSTRAR E OCULTAR LABEL: NOME
const labelNome = document.querySelector("#label-cadastro-nome") as HTMLElement;

function removeClassOcultaLabelNome() {
  labelNome?.classList.remove("oculta");
}
function addClassOcultaLabelNome() {
  labelNome?.classList.add("oculta");
}

//MOSTRAR E OCULTTAR INPUT: NOME
const inputNome = document.querySelector("#input-cadastro-nome") as HTMLElement;

function removeClassOcultaInputNome() {
  inputNome?.classList.remove("oculta");
}
function addClassOcultaInputNome() {
  inputNome?.classList.add("oculta");
}

//MOSTRAR E OCULTAR LABEL: CONFIRMAR SENHA
const labelConfirmarSenha = document.querySelector(
  "#label-confirmar-senha",
) as HTMLElement;

function removeClassOcultaLabelConfirmarSenha() {
  labelConfirmarSenha?.classList.remove("oculta");
}
function addClassOcultaLabelConfirmarSenha() {
  labelConfirmarSenha?.classList.add("oculta");
}

//MOSTRAR E OCULTAR INPUT DO CONFIRMAR SENHA
const inputConfirmarSenha = document.querySelector(
  "#input-confirmar-senha",
) as HTMLElement;

function removeClassOcultaInputConfirmarSenha() {
  inputConfirmarSenha?.classList.remove("oculta");
}
function addClassOcultaInputConfirmarSenha() {
  inputConfirmarSenha?.classList.add("oculta");
}

//MOSTRAR E OCULTAR DIV: ESQUECEU SENHA
const divEsqueceuSenha = document.querySelector(
  ".esqueceu-senha",
) as HTMLElement;

function removeClassOcultaEsqueceuSenha() {
  divEsqueceuSenha?.classList.remove("oculta");
}
function addClassOcultaEsqueceuSenha() {
  divEsqueceuSenha?.classList.add("oculta");
}

//TROCAR TEXTO DO BOTÃO
const textoBotao = document.querySelector(".texto-button") as HTMLElement;

function textoOpcaoEntrar() {
  textoBotao.innerText = "Entrar";
}

function textoOpcaoCadastrar() {
  textoBotao.innerText = "Cadastrar";
}

// ALTERNAR COR BOTÃO ENTRAR/CRIAR CONTA
//const divFormTabs = document.querySelector('.form-tabs') as HTMLElement
const botaoEntrar = document.querySelector("#button-etrar") as HTMLElement;
const botaoCadastrar = document.querySelector(
  "#button-cadastrar",
) as HTMLElement;


function BotaoCadastrar() {
  botaoEntrar?.classList.remove("active");
  botaoCadastrar?.classList.add("active");
}

function BotaoEntrar() {
  botaoEntrar?.classList.add("active");
  botaoCadastrar?.classList.remove("active");
}


function clicarEntrar(isMostraEntrar: boolean) {
  if (isMostraEntrar == true) {
    removeClassOcultaSpan();
    fraseOpcaoEntrar();
    addClassOcultaLabelNome();
    addClassOcultaInputNome();
    addClassOcultaLabelConfirmarSenha();
    addClassOcultaInputConfirmarSenha();
    removeClassOcultaEsqueceuSenha();
    textoOpcaoEntrar();
    BotaoEntrar();
  } else {
    addClassOcultaSpan();
    fraseOpcaoCadastrar();
    removeClassOcultaLabelNome();
    removeClassOcultaInputNome();
    removeClassOcultaLabelConfirmarSenha();
    removeClassOcultaInputConfirmarSenha();
    addClassOcultaEsqueceuSenha();
    textoOpcaoCadastrar();
    BotaoCadastrar();
  }
}
