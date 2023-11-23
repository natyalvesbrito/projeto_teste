import { initializeApp } from 'firebase/app';
import { getDatabase, ref, once, get,  child, forEach } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAB3bUSrHm-h-GzToxUFtZVMZXQJSoJXpc",
    authDomain: "projeto-integrador-46e02.firebaseapp.com",
    databaseURL: "https://projeto-integrador-46e02-default-rtdb.firebaseio.com",
    projectId: "projeto-integrador-46e02",
    storageBucket: "projeto-integrador-46e02.appspot.com",
    messagingSenderId: "844881299765",
    appId: "1:844881299765:web:97b8cef60f3c2f30a2647c"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const animalRef = ref(database, 'Animal');
get(animalRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      // 'snapshot.val()' contém os dados do nó 'Animal'
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

/*
animalRef.once('value')
  .then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const animal = childSnapshot.val();
      const cor = animal.cor;
      const idade = animal.idade;
      const nome = animal.nome;
      const peso = animal.peso;
      const raca = animal.raca;

      console.log(`Nome: ${nome}, Idade: ${idade}, Cor: ${cor}, Peso: ${peso}, Raça: ${raca}`);
    });
  })
  .catch((error) => {
    console.error(error);
});
*/

document.addEventListener('DOMContentLoaded', function() {

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


});


