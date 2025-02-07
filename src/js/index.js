document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector(".button");
    const resultado = document.getElementById("resultado");
    
    const numerosDisponiveis = Array.from({ length: 5000 }, (_, i) => i + 1); // Lista de 1 a 5000
    
    botao.addEventListener("click", function () {
        if (numerosDisponiveis.length === 0) {
            resultado.textContent = "Todos os números já foram sorteados!";
            return;
        }

        const index = Math.floor(Math.random() * numerosDisponiveis.length);
        const numeroSorteado = numerosDisponiveis.splice(index, 1)[0]; // Remove o número da lista

        resultado.textContent = numeroSorteado;
    });
});
