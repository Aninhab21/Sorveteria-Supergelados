let carrinho = [];

function adicionarEComprar(nomeProduto, precoProduto) {
  carrinho.push({ nome: nomeProduto, preco: precoProduto });
  atualizarCarrinho();
  document.getElementById('carrinho-card').scrollIntoView({ behavior: 'smooth' });
}

function atualizarCarrinho() {
  const cardCarrinho = document.getElementById('carrinho-card');
  const listaCarrinho = document.getElementById('lista-carrinho');
  const spanTotal = document.getElementById('valor-total');

  cardCarrinho.style.display = 'block';
  listaCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach((item) => {
    total += item.preco;
    let li = document.createElement('li');
    li.style.padding = '0.5rem 0';
    li.style.borderBottom = '1px solid #eee';
    li.innerHTML = `🛒 ${item.nome} - <strong>R$ ${item.preco.toFixed(2)}</strong>`;
    listaCarrinho.appendChild(li);
  });

  spanTotal.innerText = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
  const btnFinalizar = document.getElementById('btnFinalizar');
  const btnSolicitarTopo = document.getElementById('btnSolicitar');

  if (btnFinalizar) {
    btnFinalizar.addEventListener('click', () => {
      if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
      }
      alert('Compra efetuada com sucesso! Obrigado por escolher a Supergelados Ana.');
      carrinho = [];
      document.getElementById('carrinho-card').style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnSolicitarTopo) {
    btnSolicitarTopo.addEventListener('click', () => {
      document.querySelector('.products-grid').scrollIntoView({ behavior: 'smooth' });
    });
  }
});