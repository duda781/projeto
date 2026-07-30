const form = document.querySelector("form");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const tbody = document.querySelector("tbody");

form.addEventListener("submit", function (event) {
    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores
    const nomeValor = nome.value.trim();
    const idadeValor = idade.value;

    // Validação simples
    if (nomeValor === "" || idadeValor === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Cria uma nova linha
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${nomeValor}</td>
        <td>${idadeValor}</td>
        <td>
            <button type="button">Excluir</button>
        </td>
    `;

    // Adiciona a linha na tabela
    tbody.appendChild(linha);

    // Limpa o formulário
    form.reset();
});