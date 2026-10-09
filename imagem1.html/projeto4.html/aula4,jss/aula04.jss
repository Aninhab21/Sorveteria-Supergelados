// Variável de Estado do Carrinho
let cartCount = 0;

// Seleção de elementos do DOM
const cartBadge = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const filterBtns = document.querySelectorAll('.filter-btn');
const boloCards = document.querySelectorAll('.bolo-card');
const orderForm = document.getElementById('orderForm');

// 1. Controle do Carrinho e Exibição de Toast
function adicionarAoCarrinho(nomeBolo) {
  cartCount++;
  cartBadge.textContent = cartCount;
  
  // Exibir a notificação (Toast)
  toast.textContent = `"${nomeBolo}" adicionado ao carrinho! 🎂`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// 2. Menu Hambúrguer Responsivo
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// 3. Filtro de Categorias no Cardápio
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Atualiza botão ativo
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    boloCards.forEach(card => {
      if (filterValue === 'todos' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 4. Submissão do Formulário de Contato
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value;
  
  toast.textContent = `Obrigado ${nome}! Recebemos seu pedido.`;
  toast.classList.add('show');
  
  orderForm.reset();

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
});