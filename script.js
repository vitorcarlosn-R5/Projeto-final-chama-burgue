// ==========================================
// 1. MENU DO CELULAR
// ==========================================
document.getElementById('menuAlternar').onclick = function() {
    var menu = document.getElementById('linksMenu')
   
    if (menu.className === 'links-menu') {
        menu.className = 'links-menu links-menu-aberto'
    } else {
        menu.className = 'links-menu'
    }
}




// ==========================================
// 2. CARRINHO DE COMPRAS
// ==========================================
var qtdItens = 0
var valorTotal = 0
var botoes = document.getElementsByClassName('adicionar-carrinho')
var i = 0


do {
    botoes[i].onclick = function() {
        qtdItens = qtdItens + 1
        valorTotal = valorTotal + parseFloat(this.getAttribute('data-price'))      
document.getElementById('carrinhoQuantidade').innerHTML = qtdItens;
document.getElementById('carrinhoTotal').innerHTML =
"R$ " + valorTotal.toFixed(2)
    }    
    i = i + 1
} while (i < botoes.length)




// ==========================================
// 3. PRÉVIA DA FOTO
// ==========================================
document.getElementById('foto').onchange = function() {
    var previa = document.getElementById('previaFoto');
   
    // Pega a foto escolhida e mostra na tela
    previa.src = URL.createObjectURL(this.files[0]);
    previa.removeAttribute('hidden');
};




// ==========================================
// 4. FORMULÁRIO DE RESERVA
// ==========================================
document.getElementById('formularioReserva').onsubmit = function() {
    var confirmacao = document.getElementById('confirmacaoReserva');
   
    // Mostra a mensagem
    confirmacao.innerHTML = "Reserva solicitada com sucesso!";
    confirmacao.className = "confirmacao-reserva mostrar";
   
    // Limpa o formulário e esconde a foto
    this.reset();
    document.getElementById('previaFoto').setAttribute('hidden', 'true');
   
    // Impede a página de recarregar
    return false;
};



