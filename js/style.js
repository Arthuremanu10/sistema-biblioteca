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