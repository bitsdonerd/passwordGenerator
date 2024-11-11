const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91)); // Ascii - Letras Maiúsculas 65 a 91
const geraMinuscula = () => String.fromCharCode(rand(97, 123)); // Ascii - Letras Minúsculas 65 a 91
const geraNumber = () => String.fromCharCode(rand(48, 58)); // Ascii - Números de 0 a 9 - 48 a 57
const simbolos = ',./@%&?;#$';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

// Função para gerar senha 
export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    // Array vazia para criar a senha 
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i=0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumber());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}