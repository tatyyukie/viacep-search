const input_cep = document.getElementById('cep');
const button = document.getElementById('btn-search');
const cidade = document.getElementById('cidade');
const content_localidade = document.querySelector('.content-localidade')
const button_close = document.querySelector('.close');

button.addEventListener('click', () => { 
    let cep = input_cep.value;
    if (cep.length > 8) {
        cep = cep.slice(0, 5) + cep.slice(6, cep.length);
    }
    axios(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
        content_localidade.classList.add('slide')
        cidade.innerHTML = response.data.localidade
    })
    .catch((error) => {
        content_localidade.classList.add('slide')
        cidade.innerHTML = 'Insira um CEP válido'
    })
})
button_close.addEventListener('click',()=>{
    content_localidade.classList.remove('slide')
})