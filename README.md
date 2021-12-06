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
![image](https://user-images.githubusercontent.com/92612454/144767936-e64e02d5-afcf-41f8-b03b-7033598f4119.png)

### Ator Funcionario: 
Pode cadastrar novos funcionarios, cliente e livros ele pode tambem visualizar o relatorio de livros que é filtrado por genero, alem disso ele pode efetual locações e devoluções de livros

### Ator Cliente: 
Pode fazer locação e devolução de livros e consultar o relatorio de locação que ira informar se esta no prazo de entrega ou não, caso esteja atrasado o sistema ira calcular o valor da multa que devera ser pago.

### Ator Sistema:
Gera os relatorio de locação e de livros e salva no banco de dados todas as locações e devoluções feitas pelo funcinario 
<br><br><br>

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
<br><br><br>

# Telas do Sistema

## Tela Inicial
![image](https://user-images.githubusercontent.com/92612454/144768523-13b22a65-4c4b-4448-acc1-c47e60bf7482.png)
<br><br><br>

## Tela Principal 
![image](https://user-images.githubusercontent.com/92612454/144768560-88f8b6ce-08f8-4524-b29a-94b18f2d1ef0.png)
<br><br><br>

## Tela de cadastro de Funcionarios
![image](https://user-images.githubusercontent.com/92612454/144769187-94121003-2d62-4cae-bc71-c7b6c7d075d3.png)
<br><br><br>

## Tela de cadastro de Livros
![image](https://user-images.githubusercontent.com/92612454/144769276-145c715c-6d46-4928-b695-614085a492ab.png)
<br><br><br>

## Tela de cadastro de Clientes
![image](https://user-images.githubusercontent.com/92612454/144769427-80ae7c6c-61de-4cfe-bb8d-afe4f9305166.png)