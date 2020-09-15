var objetoSemaforo = new Object();

objetoSemaforo.divVerde = "#verde";
objetoSemaforo.divAmarelo = "#amarelo";
objetoSemaforo.divVermelho = "#vermelho";
objetoSemaforo.labelTimeSemaforo = "#timeSemaforo";
objetoSemaforo.labelTimeSemaforoPedestres = "#timeSemaforoPedestres";
objetoSemaforo.tempo = 0;

objetoSemaforo.timeSetControl = "";

//1 verde
//2 amarelo
3// vermelho

objetoSemaforo.EstagioSemaforo = 1;

objetoSemaforo.MontaEstagioSemaforos = function () {
    switch (objetoSemaforo.EstagioSemaforo) {
        case 1:
        default:
            objetoSemaforo.RemoveClasse();
            $(objetoSemaforo.divVerde).addClass("semaforoVerdeLigado");
            objetoSemaforo.EstagioSemaforo = 2;
            setTimeout(objetoSemaforo.MontaEstagioSemaforos, 10000);
            clearTimeout(objetoSemaforo.timeSetControl);
            break;
        case 2:
            objetoSemaforo.RemoveClasse();
            $(objetoSemaforo.divAmarelo).addClass("semaforoAmareloLigado");
            objetoSemaforo.EstagioSemaforo = 3;
            setTimeout(objetoSemaforo.MontaEstagioSemaforos, 5000);
            clearTimeout(objetoSemaforo.timeSetControl);
            break;
        case 3:
            objetoSemaforo.RemoveClasse();
            $(objetoSemaforo.divVermelho).addClass("semaforoVermelhoLigado");
            objetoSemaforo.EstagioSemaforo = 1;
            setTimeout(objetoSemaforo.MontaEstagioSemaforos, 10000);
            clearTimeout(objetoSemaforo.timeSetControl);
            break;
    }

    objetoSemaforo.IniciaTime();
}

objetoSemaforo.RemoveClasse = function () {
    $(objetoSemaforo.divVerde).removeClass("semaforoVerdeLigado");
    $(objetoSemaforo.divAmarelo).removeClass("semaforoAmareloLigado");
    $(objetoSemaforo.divVermelho).removeClass("semaforoVermelhoLigado");
}

objetoSemaforo.IniciaTime = function () {
    if (objetoSemaforo.EstagioSemaforo == 2) {
        if (objetoSemaforo.tempo == 0)
            objetoSemaforo.tempo = 15;
    }
    if (objetoSemaforo.EstagioSemaforo == 1 && objetoSemaforo.tempo == 0) {
        objetoSemaforo.tempo = 10;
    }
    if (objetoSemaforo.tempo >= 0) {
        objetoSemaforo.tempo--;
    }
    if (objetoSemaforo.EstagioSemaforo >= 2) {
        $(objetoSemaforo.labelTimeSemaforoPedestres).text("PARE");
        $(objetoSemaforo.labelTimeSemaforo).text(objetoSemaforo.tempo);
        //$(objetoSemaforo.labelTimeSemaforo).removeClass("classePare");
    }

    if (objetoSemaforo.EstagioSemaforo == 1) {
        $(objetoSemaforo.labelTimeSemaforo).text("PARE");
        $(objetoSemaforo.labelTimeSemaforoPedestres).text(objetoSemaforo.tempo);
        //$(objetoSemaforo.labelTimeSemaforoPedestres).removeClass("classePare");
    }

    objetoSemaforo.timeSetControl = setTimeout(objetoSemaforo.IniciaTime, 1000);
}

$(function () {

    objetoSemaforo.MontaEstagioSemaforos();

})