/**
 * Tipos Básicos
 * 
 * number: qualquer tipo numérico => 1, 3.4, -1
 * boolean: apenas dois valores verdadeiro ou falso: true, false
 * string: frase ou caractere, tudo que estiver entre aspas => 'olá', '20', "Bom dia"
 * array: lista de dados => ['Marcos', 'João', 'Pedro', 'Lucas'], [20, 50, 100, 105, 1231]
 * 
 * Outros tipos:
 * 
 * any: utilizado quando não se sabe o tipo, logo, ele aceita qualquer um.
 * void: ao contrário do 'any', nenhum tipo de dado, muito ultilizado no retorno das funções
 * undefined: não teve um valor atribuído.
 */ 

const idade: number = 20; // number
const maiorDeIdade: boolean = true; // boolean
const nome: string = 'Marcos'; // string

const seriesFavoritas: string[] = ['The Office', 'Dark', 'Vikings'];
const lazeres: Array<string> = ['Jogar', 'Pescar']; // *

const naoSeiValor: any = 'Sabe de nada';
const naoTenhoValor: undefined | string = 'Tem sim'; // *

function digaOla(): void {
  console.log('Olá');
}
