import geraSenha from './generators';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumber = document.querySelector('.chk-number');
const chkSymbol = document.querySelector('.chk-symbol');
const buttonSenha = document.querySelector('.gerar-senha');

export default function(){
    buttonSenha.addEventListener('click', ()=>{
        senhaGerada.innerHTML = gera();
    });
};

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumber.checked,
        chkSymbol.checked,
    );

    return senha || 'selecione a senha';
}