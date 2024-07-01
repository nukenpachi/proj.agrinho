document.addEventListener('DOMContentLoaded', (event) => {
    const carrinho = [];
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const span = document.getElementsByClassName("close")[0];
    const continuarBtn = document.getElementById("continuar-comprando");
    const finalizarBtn = document.getElementById("finalizar-compra");

    document.querySelectorAll('.vegetal').forEach(button => {
        button.addEventListener('click', () => {
            const vegetal = button.getAttribute('data-vegetal');
            carrinho.push(vegetal);
            modalText.textContent = vegetal + " foi adicionado ao carrinho.";
            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    continuarBtn.onclick = function() {
        modal.style.display = "none";
    }

    finalizarBtn.onclick = function() {
        // Armazenar o carrinho no localStorage (ou outra forma de persistência)
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        // Redirecionar para a página de finalização de compra (altere conforme necessário)
        window.location.href = "finalizar-compra.html";
    }
});