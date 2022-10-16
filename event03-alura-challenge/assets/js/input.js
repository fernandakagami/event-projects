const inputs = document.querySelectorAll('input');
const texts = document.querySelectorAll('textarea');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        const tipoDeInput = input.dataset.tipo;        

        if(input.validity.valid) {
            input.classList.remove('input-container--invalido');
            input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';  
            input.nextElementSibling.classList.remove('input-mensagem-erro');
            input.style.marginBottom = '20px';
        } else {
            input.classList.add('input-container--invalido');    
            input.nextElementSibling.classList.add('input-mensagem-erro');
            input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
            input.style.marginBottom = 0;
        }
    })

    const tiposDeErro = [
        'valueMissing',
        'typeMismatch',
        'patternMismatch',
        'customError'
    ]

    function mostraMensagemDeErro(tipoDeInput, input) {
        let mensagem = ''
        tiposDeErro.forEach(erro => {
            if(input.validity[erro]) {
                mensagem = mensagensDeErro[tipoDeInput][erro]
            }
        })        
        return mensagem
        }
})


texts.forEach(text => {
    text.addEventListener('blur', (evento) => {              

        if(text.validity.valid) {
            text.classList.remove('input-container--invalido');
            text.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';  
            text.nextElementSibling.classList.remove('input-mensagem-erro');
            text.style.marginBottom = '20px';
        } else {
            text.classList.add('input-container--invalido');    
            text.nextElementSibling.classList.add('input-mensagem-erro');
            text.parentElement.querySelector('.input-mensagem-erro').innerHTML = 'O campo de senha não pode estar vazio.';
            text.style.marginBottom = 0;
        }
    })

})


const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.'
    }
}


    


