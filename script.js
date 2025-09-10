function validarItem(cadLote, cadMaterial, cadQuant, cadMotivoDevo, cadDataDevo, cadImg) {
    let lote = document.getElementById(cadLote).value;
    let material = document.getElementById(cadMaterial).value;
    let quant = document.getElementById(cadQuant).value;
    let motivoDevo = document.getElementById(cadMotivoDevo).value;
    let dataDevo = document.getElementById(cadDataDevo).value;
    let img = document.getElementById(cadImg).value;

    if (lote == ""){
        alert("Lote em branco")
    } else if (material == ""){
        alert("Material em branco")
    } else if (quant == ""){
        alert("Quantidade em branco")
    } else if (motivoDevo == ""){
        alert("Motivo de Devolução em branco")
    } else if (dataDevo == ""){
        alert("Data da Devolução em branco")
    } else if (img == ""){
        alert("Sem foto da peça selecionada")
    } else cadastrarItem(lote, material, parseInt(quant), motivoDevo, dataDevo, img);
}

let novoItem = {lote:lote, material:material, quantidade:quant, motivo:motivoDevo, data:dataDevo, foto:img,
    get produto(){
        return this.lote;
    }
};

/*
function cadastrarItem(lote, material, quant, motivoDevo, dataDevo, img) {
    let novoItem = {lote:lote, material:material, quantidade:quant, motivo:motivoDevo, data:dataDevo, foto:img};

    if () {
        
    }
}
*/