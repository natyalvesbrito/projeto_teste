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
    

        /*/ alterando horários

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
        });*/

    const hora1 = document.getElementById('hora1');
    const minuto1 = document.getElementById('minuto1');
    const botaoBloquearDesbloquear = document.getElementById('botaoBloquearDesbloquear');

    const hora2 = document.getElementById('hora2');
    const minuto2 = document.getElementById('minuto2');
    const botaoBloquearDesbloquear2 = document.getElementById('botaoBloquearDesbloquear2');
    
    let horaArmazenada1;
    let minutoArmazenado1;
    let horaArmazenada2;
    let minutoArmazenado2;

    // Função para alternar estado de bloqueio/desbloqueio dos campos
    function alternarBloqueio(hora,minuto,botao) {
        if (!hora.disabled && !minuto.disabled) {
            // Armazena os valores somente se os campos não estiverem bloqueados
            // Verificar, pois ele continuar a subir numeros iguais quando clica o botão
            // Precisa verificar se os numeros de hora e minuto são diferentes para não encher o BD
            if (hora === hora1 && minuto === minuto1) {
                horaArmazenada1 = hora.value;
                minutoArmazenado1 = minuto.value;
                console.log(horaArmazenada1,minutoArmazenado1,"alterados.")
            } 
            else if (hora === hora2 && minuto === minuto2) {
                horaArmazenada2 = hora.value;
                minutoArmazenado2 = minuto.value;
            }
        }
        hora.disabled = !hora.disabled; // Alterna o estado de desabilitado/habilitado do input de hora
        minuto.disabled = !minuto.disabled; // Alterna o estado de desabilitado/habilitado do input de minuto

    }
    // Adiciona um ouvinte de evento para o botão
    botaoBloquearDesbloquear.addEventListener('click', function() {
        alternarBloqueio(hora1,minuto1,botaoBloquearDesbloquear);
    });
    botaoBloquearDesbloquear2.addEventListener('click', function() {
        alternarBloqueio(hora2,minuto2,botaoBloquearDesbloquear2);
    });


});