class Pessoa{
    constructor(nome,idade,sexo, cpf, email, telefone){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
    }
}

class Funcionario extends Pessoa{
    constructor(nome,idade,sexo, cargo, cpf, email, telefone){
        super(nome,idade,sexo, cpf, email, telefone);
        this.cargo = cargo;
    }
}

class Cliente extends Pessoa{
    constructor(nome,idade,sexo, cpf, email, telefone){
        super(nome,idade,sexo, cpf, email, telefone)
    }

    dataDia(){
        const data = new Date();
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    }

    locaLivro(livro){
        const data = this.dataDia();
        const locacao = {
            livro,
            data
        };
        return locacao;
    }
}

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

// ------------------------ conexao com banco de dados e instanciamento de classes ------------------------
function cadastraFuncionario(){
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let cargo = document.getElementById("cargo").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    let objetoFuncionario = new Funcionario (nome,idade,sexo,cargo, cpf, email, telefone); 

    var mysql = require ('mysql');
    // passando parametros do banco
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : null, 
        database : 'sistemadebiblioteca'
    });
    // conexao com o banco de dados 
    connection.connect(function(err) {
        // em casso de erro
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }else{
            // em casso de sucesso
            console.log('conectado');
        }
    })

    var query = connection.query('INSERT INTO funcionario SET ?', objetoFuncionario, function(error,results,fields) {
        if (error) throw error;
        console.log(query.sql);
        console.log("inserção feita com sucesso!");
        alert("Funcionario registrado com sucesso!");
    })

    connection.end(function(){
        console.log('conexao finalizada')
    });
}


function cadastraCliente(){
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    let objetoCliente = new Cliente(nome,idade,sexo, cpf, email, telefone);
    
    var mysql = require ('mysql');

    // passando parametros do banco
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : null, 
        database : 'sistemadebiblioteca'
    });

    // conexao com o banco de dados 
    connection.connect(function(err) {
        // em casso de erro
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }else{
            // em casso de sucesso
            console.log('conectado');
        }
    })

    var query = connection.query('INSERT INTO cliente SET ?', objetoCliente, function(error,results,fields) {
        if (error) throw error;
        console.log(query.sql);
        console.log("inserção feita com sucesso!");
        alert("Cliente registrado com sucesso!");
    })

    connection.end(function(){
        console.log('conexao finalizada')
    });
}


function cadastraLivro(){
    event.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let genero = document.getElementById("genero").value;
    let editora = document.getElementById("editora").value;
    let isbn = document.getElementById("isbn").value;
    let paginas = document.getElementById("paginas").value;
    let valor = document.getElementById("valor").value;

    let objetoLivro = new Livro(titulo,autor,genero,editora,isbn,paginas,valor); 

    var mysql = require ('mysql');

    // passando parametros do banco
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : null, 
        database : 'sistemadebiblioteca'
    });

    // conexao com o banco de dados 
    connection.connect(function(err) {
        // em casso de erro
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }else{
            // em casso de sucesso
            console.log('conectado');
        }
    })

    var query = connection.query('INSERT INTO livro SET ?', objetoLivro, function(error,results,fields) {
        if (error) {
            alert("Ocorreu um erro na execução do banco de dados \nentre em contato com o suporte", error);
        };
        console.log(query.sql);
        console.log("inserção feita com sucesso!");
        alert("Livro registrado com sucesso!");
    })

    connection.end(function(){
        console.log('conexao finalizada')
    });
}
