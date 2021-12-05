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
![image](https://user-images.githubusercontent.com/92612454/144765719-ea6f76b4-5e3c-4062-95bc-aac2cb08d083.png)


- Classe Pessoa: é uma classe abstrata e pai de Funcionario e Cliente
- Classe Cliente: estende Pessoa 
- Classe Funcionario: estende Pessoa e tem apenas um atributo, cargo
- Classe Locacao: recebe 3 atributos livro, cliente e funcionario tres objetos que são necessários para a inserção no banco de dados
- CLasse Livro: gera novos livros   

### Diagrama de caso de uso
![image](https://user-images.githubusercontent.com/92612454/144765182-6abf8c18-4abc-4b3c-82b0-e8e391ddd5f2.png)
