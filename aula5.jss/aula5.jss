let carrinho = [];
let totalGeral = 0;

// Adiciona o produto ao carrinho e atualiza o visual da tela
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

// Atualiza a lista de itens e o valor total na página
function atualizarCarrinho() {
    let lista = document.getElementById("lista-carrinho");
    let spanTotal = document.getElementById("valor-total");
    
    lista.innerHTML = "";
    totalGeral = 0;

    if (carrinho.length === 0) {
        lista.innerHTML = '<li style="color: #888;">Seu carrinho está vazio.</li>';
        spanTotal.innerText = "0,00";
        return;
    }

    carrinho.forEach((item) => {
        totalGeral += item.preco;
        let li = document.createElement("li");
        li.innerHTML = ${item.nome} <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>;
        lista.appendChild(li);
    });

    spanTotal.innerText = totalGeral.toFixed(2).replace('.', ',');
}

// Função que adiciona o produto clicado e já dispara o processo de pagamento
function adicionarEComprar(nome, preco) {
    adicionarAoCarrinho(nome, preco);
    efetuarPagamento();
}

// Valida se há itens e efetua o pagamento
function efetuarPagamento() {
    let valorTotal = document.getElementById("valor-total").innerText;

    // Verifica se o carrinho está vazio
    if (valorTotal === "0,00") {
        alert("Seu carrinho está vazio! Adicione algum produto antes de pagar.");
        return;
    }

    // Exibe a mensagem de sucesso com o valor total correto
    alert(Pedido no valor de R$ ${valorTotal} confirmado com sucesso! Redirecionando para a forma de pagamento...);
    
    // Limpa o carrinho após o pagamento
    carrinho = [];
    atualizarCarrinho();
}