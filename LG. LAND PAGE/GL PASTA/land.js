const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let index = 0;

    function showSlide(i) {
      index = (i + images.length) % images.length; // evita sair do limite
      slides.style.transform = `translateX(${-index * 600}px)`;
    }

    // Botões
    prevBtn.addEventListener('click', () => showSlide(index - 1));
    nextBtn.addEventListener('click', () => showSlide(index + 1));

    // Automático
    setInterval(() => {
      showSlide(index + 1);
    }, 5000); // troca a cada 3s

      // Recalcula ao redimensionar a tela
    window.addEventListener('resize', () => showSlide(index));