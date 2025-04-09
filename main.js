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