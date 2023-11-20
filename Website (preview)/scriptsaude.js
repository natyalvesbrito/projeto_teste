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
    
        const alimentacaoNav = new Navegador("botaoAlimentacao", "paginaalimentacao.html");
        const principalNav = new Navegador("botaoPrincipal", "paginaprincipal.html");
        const saudeNav = new Navegador("botaoSaude", "paginasaude.html");
    
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
    