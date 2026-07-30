const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const tbody = document.getElementById("tabelaCadastros");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeValor = nome.value.trim();
    const idadeValor = idade.value;

    if (nomeValor === "" || idadeValor === "") {
        alert("Preencha todos os campos.");
        return;
    }

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${nomeValor}</td>
        <td>${idadeValor}</td>
        <td>
            <button type="button">Excluir</button>
        </td>
    `;

    tbody.appendChild(linha);

    // Limpa o formulário
    form.reset();

    // Coloca o foco novamente no campo Nome
    nome.focus();
});