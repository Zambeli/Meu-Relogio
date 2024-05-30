const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

const relogio = setInterval(function time() {
    let tempoAtual = new Date()
    let hora = tempoAtual.getHours()
    let minuto = tempoAtual.getMinutes()
    let segundo = tempoAtual.getSeconds()

    if (hora < 10) hora = '0' + hora;
    if (minuto < 10) minuto = '0' + minuto;
    if (segundo < 10) segundo = '0' + segundo;

    minutos.textContent = minuto
    segundos.textContent = segundo
    horas.textContent = hora

})

