document.addEventListener('DOMContentLoaded', function() {

    function calcularSoma() {
        var selects = document.querySelectorAll('.selecionar'); // Seleciona todos os elementos 'select' com a classe 'selecionar'

        var soma = 0;
        selects.forEach(function(select) {
        soma += parseInt(select.value); // Obtém o valor selecionado e converte para inteiro
        });

        document.getElementById('resultado').textContent = soma + "g";
    }

    var selects = document.querySelectorAll('.selecionar'); // Seleciona todos os elementos 'select' com a classe 'selecionar'

    selects.forEach(function(select) {
        select.addEventListener('change', calcularSoma); // Adiciona um event listener para 'change' em cada 'select' para recalcular a soma quando houver mudança na seleção
    });

    // Chamada inicial para calcular a soma ao carregar a página
    calcularSoma();
    

        // alterando horários

        // Selecionando os inputs de hora e minuto
        const inputHora1 = document.querySelector('input[name="hora1"]');
        const inputMinuto1 = document.querySelector('input[name="minuto1"]');

        // Adicionando eventos de mudança (change) para os inputs
        inputHora1.addEventListener('change', () => {
            // Armazenando o novo valor da hora em uma variável
            const novoValorHora1 = inputHora1.value;
            console.log('Novo valor da hora:', novoValorHora1);
            // Você pode fazer o que quiser com o novo valor da hora aqui
        });

        inputMinuto1.addEventListener('change', () => {
            // Armazenando o novo valor do minuto em uma variável
            const novoValorMinuto1 = inputMinuto1.value;
            console.log('Novo valor do minuto:', novoValorMinuto1);
            // Você pode fazer o que quiser com o novo valor do minuto aqui
        });



        
        const inputHora2 = document.querySelector('input[name="hora2"]');
        const inputMinuto2 = document.querySelector('input[name="minuto2"]');

        // Adicionando eventos de mudança (change) para os inputs
        inputHora1.addEventListener('change', () => {
            // Armazenando o novo valor da hora em uma variável
            const novoValorHora2 = inputHora2.value;
            console.log('Novo valor da hora:', novoValorHora2);
            // Você pode fazer o que quiser com o novo valor da hora aqui
        });

        inputMinuto1.addEventListener('change', () => {
            // Armazenando o novo valor do minuto em uma variável
            const novoValorMinuto2 = inputMinuto2.value;
            console.log('Novo valor do minuto:', novoValorMinuto2);
            // Você pode fazer o que quiser com o novo valor do minuto aqui
        });





    ;

});