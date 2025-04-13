const form = document.getElementById("form-contato");
const lista = document.getElementById("lista-contatos");
let contatoEditando = null;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  if (contatoEditando) {
    contatoEditando.querySelector(".td-nome").textContent = nome;
    contatoEditando.querySelector(".td-telefone").textContent = telefone;
    contatoEditando = null;
  } else {
    const linha = document.createElement("tr");
    linha.innerHTML = `
          <td class="td-nome">${nome}</td>
          <td class="td-telefone">${telefone}</td>
          <td class="actions">
            <button class="edit">Editar</button>
            <button class="delete">Remover</button>
          </td>
        `;
    lista.appendChild(linha);
  }

  form.reset();
});

lista.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }

  if (e.target.classList.contains("edit")) {
    const linha = e.target.closest("tr");
    const nome = linha.querySelector(".td-nome").textContent;
    const telefone = linha.querySelector(".td-telefone").textContent;
    document.getElementById("nome").value = nome;
    document.getElementById("telefone").value = telefone;
    contatoEditando = linha;
  }
});
