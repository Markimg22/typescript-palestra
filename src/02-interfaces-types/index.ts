/**
 * Interfaces
 * 
 * São muito utilizados quando precisamos reaproveitar tipagens entre vários
 * arquivos e funções da aplicação, pode herdar outras interfaces.
 */

 interface IPessoa {
  nome: string;
  endereco: {
    cep: string;
    cidade: string;
    estado: string;
    pais: string;
  }
}

interface IPessoaFisica extends IPessoa {
  cpf: string;
  idade: number;
  maiorIdade: boolean;
  seriesFavoritas?: string[];
}

interface IPessoaJuridica extends IPessoa {
  cnpj: string;
}

const pessoaFisica: IPessoaFisica = {
  nome: 'Marcos',
  endereco: {
    cep: '1231313',
    cidade: 'Cuiabá',
    estado: 'MT',
    pais: 'BR'
  },
  cpf: '5123151238913912313',
  idade: 20,
  maiorIdade: true,
  seriesFavoritas: ['The Office', 'Dark', 'Vikings']
};

const pessoaJuridica: IPessoaJuridica = {
  nome: 'Google',
  endereco: {
    cep: '123141',
    cidade: 'Menlo Park',
    estado: 'Califórnia',
    pais: 'EUA'
  },
  cnpj: '1413131513151141'
}

/**
 * Types
 * 
 * É usando quando um dado pode assumir formatos distintos mesmo que pertencendo a
 * uma mesma entidade, não pode herdar outros types.
 */

type Pessoa = 
  { nome: string, idade: number } |
  { nome: string, cidade: string, maiorIdade: boolean } |
  { nome: string, cep: string, cpf: string };

const pessoa: Pessoa = {
  nome: 'Marcos',
  idade: 20,
  cidade: 'Cuiabá',
}
