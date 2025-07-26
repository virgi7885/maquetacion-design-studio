$(document).ready(function (){
    let banner = $("#banner");

// Definir altura dinamica para el banner

function alturaBanner(){
    let vpaltura = $(window).height();
    banner.css('height', vpaltura);
}

alturaBanner();

$(window).resize(alturaBanner);

});