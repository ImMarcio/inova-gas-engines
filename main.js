// Copyright
function atualizarAnoAtual() {
    document.getElementById('ano-atual').textContent = new Date().getFullYear();
}

atualizarAnoAtual();
setInterval(atualizarAnoAtual, 1000);