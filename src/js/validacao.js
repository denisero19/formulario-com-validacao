const input = document.querySelectorAll('.input');
const campo = document.querySelectorAll('.campo-obrigatorio');
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    
    input.forEach((input, index) => {
        let inputEstaVazio = input.value === ""

        if (inputEstaVazio){
            input.classList.remove('campo-preenchido')
            input.classList.add('campo-requerido')
            campo[index].classList.remove('ocultar')

        } else {
            input.classList.remove('campo-requerido')
            input.classList.add('campo-preenchido')
            campo[index].classList.add('ocultar')
        }

    })
})

