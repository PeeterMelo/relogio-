function relogio() {
    const elementoRelogio = window.document.querySelector('.relogio');
    elementoRelogio
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart (2, '0');
    const formatoMinutos = minutos.toString().padStart (2, '0');
    const formatoSegundos = segundos.toString().padStart (2, '0');
    
    //exibição:

    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;



    const frase = document.querySelector('.frase')
 //away serve para por mais dados, diferente da const, let e var.

 dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');


 mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');



 var hoje = new Date

 frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

 if (formatoHoras>= 0 && formatoHoras <=12) {
    document.body.style.backgroundImage = "url(https://njitvector.com/wp-content/uploads/2018/12/jojos-bizarre-adventure-marathon.jpg)"
 }

 else if (formatoHoras >- 12 && formatoHoras <18){
    document.body.style.backgroundImage = "url(https://rare-gallery.com/uploads/posts/1061083-fireworks-JoJos-Bizarre-Adventure-color-flower-screenshot-atmosphere-of-earth-special-effects.png)"

 }

 else{
        document.body.style.backgroundImage = "url(https://cdn.ome.lt/rTcyXm9F2rm0M7IBnoeGtBaa3Rs=/1200x630/smart/extras/conteudos/Jojos_Bizarre_Adventure.jpg)"
    }



}

setInterval(relogio, 1000);

