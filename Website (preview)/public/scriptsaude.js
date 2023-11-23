document.addEventListener('DOMContentLoaded', function() {

        class Navegador {
            constructor(elementId, page) {
                this.element = document.getElementById(elementId);
                this.page = page;
            }
    
            navegar() {
                window.location.href = this.page;
            }
        }
    
        const alimentacaoNav = new Navegador("botaoAlimentacao", "index.html");
        const principalNav = new Navegador("botaoPrincipal", "index.html");
        const saudeNav = new Navegador("botaoSaude", "index.html");
    
        document.getElementById("botaoAlimentacao").addEventListener("click", function() {
            alimentacaoNav.navegar();
        });
    
        document.getElementById("botaoPrincipal").addEventListener("click", function() {
            principalNav.navegar();
        });
    
        document.getElementById("botaoSaude").addEventListener("click", function() {
            saudeNav.navegar();
        });
    
    });
    