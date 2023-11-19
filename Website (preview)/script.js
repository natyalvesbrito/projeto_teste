console.log("O script está sendo executado");

// Firebase teste -------------------------------------
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMÍNIO.firebaseapp.com",
    projectId: "SEU_ID_DE_PROJETO",
    storageBucket: "SEU_BUCKET.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  

const dbRef = firebase.database().ref('animais');

dbRef.on('value', (snapshot) => {
  const animais = snapshot.val();

  for (const key in animais) {
    const animal = animais[key];
    console.log(`Nome: ${animal.nome}, Idade: ${animal.idade}, Peso: ${animal.peso}, Raça: ${animal.raça}, Cor: ${animal.cor}, Horário: ${animal.horario}, Quantidade: ${animal.quantidade}`);
  }
});
// ---------------------------------------


// Testes na classe Editor
class Editor {
    constructor(elementId, firebaseRef) {
        this.element = document.getElementById(elementId);
        this.firebaseRef = firebaseRef;
    }

    editar() {
        var novoValor = prompt(`Digite o novo valor para ${this.element.id}:`);
        if (novoValor !== null) {
            this.element.textContent = novoValor;

            // Obtenha o ID do animal associado ao elemento
            const animalId = this.element.dataset.animalId;

            // Atualize os dados no Firebase
            const novoDado = {
                [this.element.id]: novoValor
            };
            this.firebaseRef.child(animalId).update(novoDado, (error) => {
                if (error) {
                    console.error('Erro ao atualizar dados:', error);
                } else {
                    console.log('Dados atualizados com sucesso!');
                }
            });
        }
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
const idadeEditor = new Editor("idade");
const pesoEditor = new Editor("peso");
const racaEditor = new Editor("raça");
const corEditor = new Editor("cor");

// Adicionando event listeners para edição
document.getElementById("editarIdade").addEventListener("click", function() {
    idadeEditor.editar();
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


