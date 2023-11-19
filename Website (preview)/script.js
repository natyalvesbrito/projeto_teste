console.log("O script está sendo executado");

/*
class Editor {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    editar() {
        var novoValor = prompt(`Digite o novo valor para ${this.element.id}:`);
        if (novoValor !== null) {
            this.element.textContent = novoValor;
        }
    }
}
*/

// teste editor novo
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



class Navegador {
    constructor(elementId, page) {
        this.element = document.getElementById(elementId);
        this.page = page;
    }

    navegar() {
        window.location.href = this.page;
    }
}

// Instanciando objetos para edição
const nomeEditor = new Editor("nome");
const idadeEditor = new Editor("idade");
const pesoEditor = new Editor("peso");
const racaEditor = new Editor("raça");
const corEditor = new Editor("cor");

// Adicionando event listeners para edição

/*
document.getElementById("editarIdade").addEventListener("click", function() {
    idadeEditor.editar();
});
*/


document.getElementById("editarIdade").addEventListener("click", function() {
    const novoValorIdade = idadeEditor.editar(); // Chama o método editar() e armazena o novo valor retornado

    // Verifica se o novo valor não é null (ou seja, se o usuário não cancelou a edição)
    if (novoValorIdade !== null) {
        console.log('Novo valor de idade:', novoValorIdade);
        // Faça o que precisar com o novo valor de idade aqui
    } else {
        console.log('Edição cancelada ou sem alterações.');
    }
});






document.getElementById("editarPeso").addEventListener("click", function() {
    pesoEditor.editar();
});

document.getElementById("editarRaca").addEventListener("click", function() {
    racaEditor.editar();
});

document.getElementById("editarCor").addEventListener("click", function() {
    corEditor.editar();
});

// Instanciando objetos para navegação
const alimentacaoNav = new Navegador("botaoAlimentacao", "paginaalimentacao.html");
const principalNav = new Navegador("botaoPrincipal", "paginaprincipal.html");
const saudeNav = new Navegador("botaoSaude", "paginasaude.html");

// Adicionando event listeners para navegação
document.getElementById("botaoAlimentacao").addEventListener("click", function() {
    alimentacaoNav.navegar();
});

document.getElementById("botaoPrincipal").addEventListener("click", function() {
    principalNav.navegar();
});

document.getElementById("botaoSaude").addEventListener("click", function() {
    saudeNav.navegar();
});


