let animado = false;

window.addEventListener('scroll', () => {
    const container = document.querySelector('.containerJogos');

    if (container && !animado) {
        const distanciaTopo = container.getBoundingClientRect().top;

        console.log('distância do topo:', distanciaTopo); // <-- Agora está seguro

        if (distanciaTopo <= 490) {
            document.querySelectorAll('.listaJogos').forEach(el => {
                if (el.classList.contains('baixo')) {
                    el.classList.add('animate-right');
                } else {
                    el.classList.add('animate-left');
                }
            });

            animado = true;
        }
    }
});



document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        const link = item.querySelector('.nav-link');
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Impede o comportamento padrão do link
            event.preventDefault();

            // Scroll suave até o elemento alvo
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Supondo que você tenha uma lista de valores para calcular a média
const valores = [100, 200, 300, 350]; // Substitua com os valores reais

// Calcula a média dos valores
const media = valores.reduce((total, num) => total + num, 0) / valores.length;

// Só faz a alternância do display se a média for menor que 370
if (media < 370) {
    document.querySelectorAll('.btnList').forEach(item => {
        item.addEventListener('click', function () {
            const navbar = document.querySelector('.navbar');
            const section = document.querySelector('section');

            // Verifica se o navbar existe e alterna o display
            if (navbar) {
                if (navbar.style.display === 'flex') {
                    navbar.style.display = 'none';
                    section.style.marginTop = '40px';
                } else {
                    navbar.style.display = 'flex';
                    section.style.marginTop = '165px';
                }
            }
        });
    });
}



