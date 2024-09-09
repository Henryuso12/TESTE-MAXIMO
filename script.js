document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de próximo
    const buttons = document.querySelectorAll('.btn-proximo');

    // Adiciona um ouvinte de evento para cada botão
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Obtém o ID do próximo passo
            const nextStepId = event.target.getAttribute('data-proximo');
            
            // Oculta todas as seções
            document.querySelectorAll('.passo').forEach(passo => {
                passo.classList.remove('ativo');
            });

            // Exibe a seção correspondente ao próximo passo
            const nextStep = document.getElementById(`passo-${nextStepId}`);
            if (nextStep) {
                nextStep.classList.add('ativo');
            }
        });
    });

    // Inicialmente, exibe o primeiro passo
    document.getElementById('passo-0').classList.add('ativo');
});
