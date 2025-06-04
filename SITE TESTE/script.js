          new window.VLibras.Widget('https://vlibras.gov.br/app');
        
        let tamanhoFonte = 16;
        
        function mudarTamanhoFonte (soma) {
            tamanhoFonte += soma;
            document.body.style.fontSize = tamanhoFonte + 'px';
        }
        
        function toggleContrast() {
            document.body.classList.toggle ('altoContraste');
             document.querySelector('section').forEach(secao =>{
        secao.style.backgroundColor = 'black';
    });
        }
        
        function lerTexto(){
            const texto = document.querySelector("main").innerText;
            const discurso = new SpeechSynthesisUtterance(texto);
            discurso.lang = 'pt-BR';
            speechSynthesis.speak(discurso);
        }
    
	function resetAcessibilidade() {
	  document.body.classList.remove('high-contrast', 'grayscale', 'daltonismo');
	  tamanhoFonte = 16;
	  document.body.style.fontSize = tamanhoFonte + 'px';
	  speechSynthesis.cancel();
	}
    
    // Atalhos de teclado
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === '1') changeFontSize(1);
        if (e.altKey && e.key === '2') changeFontSize(-1);
        if (e.altKey && e.key === '3') toggleContrast();
        if (e.altKey && e.key === '4') toggleGrayscale();
        if (e.altKey && e.key === '5') toggleDaltonismo();
        if (e.altKey && e.key === '6') lerTexto();
    });


