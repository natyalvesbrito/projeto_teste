document.addEventListener('DOMContentLoaded', function() {
    const Idade = document.getElementById('idade');
    const Peso = document.getElementById('peso');
    const Raca = document.getElementById('raça');
    const Cor = document.getElementById('cor');

    firebase.database().ref("Animal/Idade").once('value')
  .then((snapshot) => {
    Idade.textContent = snapshot.val(); // Atualiza o elemento HTML com a idade do animal
  });

    firebase.database().ref("Animal/Cor").once('value')
    .then((snapshot) => {
        Cor.textContent = snapshot.val(); // Atualiza o elemento HTML com a idade do animal
    });

    firebase.database().ref("Animal/Peso").once('value')
    .then((snapshot) => {
        Peso.textContent = snapshot.val(); // Atualiza o elemento HTML com a idade do animal
    });

    firebase.database().ref("Animal/Raca").once('value')
    .then((snapshot) => {
        Raca.textContent = snapshot.val(); // Atualiza o elemento HTML com a idade do animal
    });

    const selectQnt1 = document.getElementById('qnt1');
    const selectQnt2 = document.getElementById('qnt2');

    firebase.database().ref("hora-refeicao/almoco/qnt").once('value')
    .then((snapshot) => {
        selectQnt1.value = snapshot.val(); // Atualiza o elemento HTML com a idade do animal
    });

    firebase.database().ref("hora-refeicao/janta/qnt").once('value')
    .then((snapshot) => {
        selectQnt2.value = snapshot.val(); // Atualiza o elemento HTML com a idade do animal
    });

    function mostrarPagina(pageId) {
        const pages = document.querySelectorAll('.tab');
        pages.forEach(page => {
            if (page.id === pageId) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });

    }

    document.getElementById('botaoAlimentacao').addEventListener('click', function() {
        mostrarPagina('page1');
    });

    document.getElementById('botaoPrincipal').addEventListener('click', function() {
        mostrarPagina('page2');
    });

    console.log("O script está sendo executado");

    class Navegador {
        constructor(elementId, page) {
            this.element = document.getElementById(elementId);
            this.page = page;
        }

        navegar() {
            window.location.href = this.page;
        }
    }

    class Editor {
        constructor(elementId) {
            this.element = document.getElementById(elementId);
        }

        editar() {
            var novoValor = prompt(`Digite o novo valor para ${this.element.id}:`);
            if (novoValor !== null) {
                this.element.textContent = novoValor;
                return novoValor; // Retorna o novo valor
            }
            return null; // Retorna null se o usuário cancelar
        }

        getValor() {
            return this.element.textContent; // Retorna o valor atual do elemento
        }
    }




    // Instanciando objetos para edição
    const nomeEditor = new Editor("nome");
    const idadeEditor = new Editor("idade");
    const pesoEditor = new Editor("peso");
    const racaEditor = new Editor("raça");
    const corEditor = new Editor("cor");


    document.getElementById("editarIdade").addEventListener("click", function() {
        const novoValorIdade = idadeEditor.editar(); // Chama o método editar() e armazena o novo valor retornado

        // Verifica se o novo valor não é null (ou seja, se o usuário não cancelou a edição)
        if (novoValorIdade !== null) {
            firebase.database().ref("Animal").child("Idade").set(novoValorIdade);
            console.log('Novo valor de idade:', novoValorIdade);
            // Faça o que precisar com o novo valor de idade aqui
        } else {
            console.log('Edição cancelada ou sem alterações.');
        }
    });


    document.getElementById("editarPeso").addEventListener("click", function() {
        const novoValorPeso = pesoEditor.editar(); // Chama o método editar() e armazena o novo valor retornado

        // Verifica se o novo valor não é null (ou seja, se o usuário não cancelou a edição)
        if (novoValorPeso !== null) {
            firebase.database().ref("Animal").child("Peso").set(novoValorPeso);
            console.log('Novo valor de idade:', novoValorPeso);
            // Faça o que precisar com o novo valor de idade aqui
        } else {
            console.log('Edição cancelada ou sem alterações.');
        }
    });

    document.getElementById("editarRaca").addEventListener("click", function() {
        const novoValorRaca = racaEditor.editar(); // Chama o método editar() e armazena o novo valor retornado

        // Verifica se o novo valor não é null (ou seja, se o usuário não cancelou a edição)
        if (novoValorRaca !== null) {
            firebase.database().ref("Animal").child("Raca").set(novoValorRaca);
            console.log('Novo valor de raça:', novoValorRaca);
            // Faça o que precisar com o novo valor de idade aqui
        } else {
            console.log('Edição cancelada ou sem alterações.');
        }
    });

    document.getElementById("editarCor").addEventListener("click", function() {
        const novoValorCor = corEditor.editar(); // Chama o método editar() e armazena o novo valor retornado

        // Verifica se o novo valor não é null (ou seja, se o usuário não cancelou a edição)
        if (novoValorCor !== null) {
            firebase.database().ref("Animal").child("Cor").set(novoValorCor);
            console.log('Novo valor de cor:', novoValorCor);
            // Faça o que precisar com o novo valor de idade aqui
        } else {
            console.log('Edição cancelada ou sem alterações.');
        }
    });


});


