document.getElementById('qtd-pista').innerText = 100;
document.getElementById('qtd-superior').innerText = 200;
document.getElementById('qtd-inferior').innerText = 400;

function comprar () {
    let area = document.getElementById('tipo-ingresso').value;
    let quantidade = Number(document.getElementById("qtd").value);

    if(!verificarQuantidade(quantidade,area)) return; 

    if(!confirm("Confirma a compra?")) return;

    let currentAvailability = document.getElementById(`qtd-${area}`).innerText;
    document.getElementById(`qtd-${area}`).innerText = currentAvailability - quantidade;
    alert("Compra realizada com sucesso!");
}

function verificarQuantidade (qtd,area) {
    if(qtd < 1) {
        alert("Você deve comprar ao menos um ingresso");
        return false;
    } else if (qtd > 10){
        alert("Só é permitido comprar até 10 ingressos!");
        return false;
    } else if (Number(document.getElementById(`qtd-${area}`).innerText) === 0) {
        alert("Os ingressos para a area selecionada já estão esgotados!");
        return false;
    } else if (Number(document.getElementById(`qtd-${area}`).innerText) < qtd) {
        alert("O número de ingressos selecionados é maior que o número de ingressos disponíveis!")
        return false;
    }
    return true;
}