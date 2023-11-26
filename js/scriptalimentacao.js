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

    const selectQuantidade1 = document.getElementById('qnt1');
    const selectQuantidade2 = document.getElementById('qnt2');

    selectQuantidade1.addEventListener('change', function() {
        firebase.database().ref("hora-refeicao").child("almoco").child("qnt").set(parseInt(selectQuantidade1.value));
    });
    selectQuantidade2.addEventListener('change', function() {
        firebase.database().ref("hora-refeicao").child("janta").child("qnt").set(parseInt(selectQuantidade2.value));
    });


    // Chamada inicial para calcular a soma ao carregar a página
    calcularSoma();

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
                horaArmazenada1 = parseInt(hora.value);
                minutoArmazenado1 = parseInt(minuto.value);
                firebase.database().ref("hora-refeicao").child("almoco").child("hora").set(horaArmazenada1);
                firebase.database().ref("hora-refeicao").child("almoco").child("minuto").set(minutoArmazenado1);
                console.log(horaArmazenada1,minutoArmazenado1,"alterados.")
            } 
            else if (hora === hora2 && minuto === minuto2) {
                horaArmazenada2 = parseInt(hora.value);
                minutoArmazenado2 = parseInt(minuto.value);
                firebase.database().ref("hora-refeicao").child("janta").child("hora").set(horaArmazenada2);
                firebase.database().ref("hora-refeicao").child("janta").child("minuto").set(minutoArmazenado2);
                console.log(horaArmazenada2,minutoArmazenado2,"alterados.")
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