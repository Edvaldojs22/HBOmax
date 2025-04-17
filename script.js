const botoesP = document.querySelectorAll('.botao');

botoesP[1].classList.add('ativo')

botoesP.forEach(botao =>{
    botao.addEventListener('click', () =>{
        botoesP.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
    })
})

