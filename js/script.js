// ==============================
// CADASTRO DE LIVROS
// ==============================

const formLivro = document.getElementById("formLivro");

if (formLivro) {

formLivro.addEventListener("submit", function(event) {

event.preventDefault();

const titulo =
document.getElementById("titulo").value;

const autor =
document.getElementById("autor").value;

const ano =
document.getElementById("ano").value;

const tabela =
document.getElementById("listaLivros");

const novaLinha =
document.createElement("tr");

novaLinha.innerHTML = `
<td>${titulo}</td>
<td>${autor}</td>
<td>${ano}</td>
`;

tabela.appendChild(novaLinha);

formLivro.reset();

alert("Livro cadastrado com sucesso!");

});

}


// ==============================
// CADASTRO DE ALUNOS
// ==============================

const formAluno = document.getElementById("formAluno");

if (formAluno) {

formAluno.addEventListener("submit", function(event) {

event.preventDefault();

const nome =
document.getElementById("nome").value;

const matricula =
document.getElementById("matricula").value;

const turma =
document.getElementById("turma").value;

const tabela =
document.getElementById("listaAlunos");

const novaLinha =
document.createElement("tr");

novaLinha.innerHTML = `
<td>${nome}</td>
<td>${matricula}</td>
<td>${turma}</td>
`;

tabela.appendChild(novaLinha);

formAluno.reset();

alert("Aluno cadastrado com sucesso!");

});

}


// ==============================
// EMPRÉSTIMOS
// ==============================

const formEmprestimo =
document.getElementById("formEmprestimo");

if (formEmprestimo) {

formEmprestimo.addEventListener("submit", function(event) {

event.preventDefault();

const aluno =
document.getElementById("alunoEmprestimo").value;

const livro =
document.getElementById("livroEmprestimo").value;

const data =
document.getElementById("data").value;

const tabela =
document.getElementById("listaEmprestimos");

const novaLinha =
document.createElement("tr");

novaLinha.innerHTML = `
<td>${aluno}</td>
<td>${livro}</td>
<td>${data}</td>
`;

tabela.appendChild(novaLinha);

formEmprestimo.reset();

alert("Empréstimo registrado com sucesso!");

});

}


// ==============================
// CADASTRO DE USUÁRIO
// ==============================

const formCadastro =
document.getElementById("formCadastro");

if (formCadastro) {

formCadastro.addEventListener("submit", function(event) {

event.preventDefault();

alert("Usuário cadastrado com sucesso!");

formCadastro.reset();

});

}