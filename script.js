$(document).ready(function() {

    var envelope = $('#envelope');
    var b_abrir = $('#abrir');
    var b_fechar = $('#fechar');
    var isOpen = false;

    b_abrir.click(function() {
        abrir();
    })
    b_fechar.click(function() {
        fechar();
    })
    envelope.click(function() {
        if (isOpen == false) {
            abrir();
        } else {
            fechar();
        }
    })

    function abrir() {
        envelope.addClass("abrir").removeClass("fechar");
        isOpen = true;
    }
    function fechar() {
        envelope.addClass("fechar").removeClass("abrir");
        isOpen = false;
    }
}
);