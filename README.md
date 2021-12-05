# Sistema-de-Biblioteca
## Trabalho para n2 da matéria de programação orientada a objetos
Aluno Carlos Moroni Barbosa Gil<br>
professor Edkallenn Lima <br>
Programação Orientada a Objetos WEB <br>
7º periodo<br><br><br>


## Descrição do Projeto
---
O sistema foi feito ultilizando o frameworq Electron que cria aplicativos desktop 
multiplataforma ultilizando as tecnologias

- JavaScript
- HTML 5
- CSS 3

O sistema atende uma biblioteca com livros, classificando-os em diversos tipos,
como Autoajuda, ficção, não-ficção, científico, concursos, didáticos, etc.

- O sistema deve possibilitar o cadastro de funcionários também.
- Elaborar relatórios de livros por tipo (mostrando o ISBN dos livros e o valor deles)
- O sistema deve possibilitar a locação e devolução de livros (mostrando um relatório para o cliente e para o balconista)
- O sistema deve calcular uma multa caso a quantidade de diárias seja excedida.
<br><br><br>

## Relatórios
 
### Diagrama de classe
![image](https://user-images.githubusercontent.com/92612454/144765788-0b1cb9a2-7f06-4ec5-97c6-b8bb1eeebf14.png)


- Classe Pessoa: é uma classe abstrata e pai de Funcionario e Cliente
- Classe Cliente: estende Pessoa 
- Classe Funcionario: estende Pessoa e tem apenas um atributo, cargo
- Classe Locacao: recebe 3 atributos livro, cliente e funcionario tres objetos que são necessários para a inserção no banco de dados
- CLasse Livro: gera novos livros 

Em atualizações futuras pode-se adicionar novos tipos de produtos alem dos livros, exemplo: audio books, revistas, video aulas.<br><br>
Tudo com muita facilidades apenas criando novas classes e colocando seus objetos na instancia da classe locação, fazendo com que todo e qualquer produto seja inserido no banco de dados assim como os livros.

### Diagrama de caso de uso
![image](https://user-images.githubusercontent.com/92612454/144765182-6abf8c18-4abc-4b3c-82b0-e8e391ddd5f2.png)

Ator Funcionario: pode cadastrar novos funcionarios, cliente e livros, o funcionario 

## Implementação

### Classe Pessoa
``` js
class Pessoa{
    constructor(nome,idade,sexo, cpf, email, telefone){
        if(this.constructor == Pessoa){
            throw new Error('Classe abstrata nao pode ser instanciada!')
        }
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }

    dataDia(){
        const data = new Date();
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }
}
```

A classe Pessoa primeiramente testa se a instanciação que esta sendo feita é a propia classe Pessoa, se for verdadeiro ele lança o erro ' Classe abstrata nao pode ser instanciada! '.<br>

As unicas classes que podem ser instanciadas são as classes filhas Cliente e Funcionario <br>

Seus atributos são: nome, idade, sexo, cpf, email e telefone;<br><br><br>


### Classe Funcionario
```` js
class Funcionario extends Pessoa{
    constructor(nome,idade,sexo, cargo, cpf, email, telefone){
        super(nome,idade,sexo, cpf, email, telefone);
        this.cargo = cargo;
    }
}
````

A classe Funcinario estende Pessoa e herda quase todos os atributos da classe pai.

O unico atributo que é exclusivo da classe Funcionario é o cargo.<br><br><br>

### Classe Cliente
````js
class Cliente extends Pessoa{
    constructor(nome,idade,sexo, cpf, email, telefone){
        super(nome,idade,sexo, cpf, email, telefone)
    }
}
````

A classe Cliente nao possui nenhum atributo exclusivo todos os atributos são herdados da classe pai Pessoa.
<br><br><br>


### Classe Livro
````js
class Livro{
    constructor(titulo,autor,genero,editora,isbn,paginas, valor){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.editora = editora;
        this.isbn = isbn;
        this.paginas = paginas;
        this.valor = valor;
    }
}
````
Seus atributos bases sao: titulo, autor, genero, editora, isbn, paginas, valor ela nao estende e nem é estendida por nenhuma outra. <br><br><br>


### Classe Locação
````js
class Locacao{
    constructor(livro, cliente, funcionario){
        this.livro = livro;
        this.cliente = cliente;
        this.funcionario = funcionario;
    }

    geraObjeto(){
        obj = {
            livro: this.livro,
            cliente: this.cliente,
            funcionario: this.funcionario
        }
        return obj
    }
}
````
Classe Locacao gera o objeto que sera inserido no na tabela locacao no banco de dados 
