function validarItem(cadLote, cadMaterial, cadQuant, cadMotivoDevo, cadDataDevo, cadImg) {
    let lote = document.getElementById(cadLote).value;
    let material = document.getElementById(cadMaterial).value;
    let quant = document.getElementById(cadQuant).value;
    let motivoDevo = document.getElementById(cadMotivoDevo).value;
    let dataDevo = document.getElementById(cadDataDevo).value;
    let img = document.getElementById(cadImg).value;
    if (lote == "") {
        alert("Lote em branco")
    } else if (material == "") {
        alert("Material em branco")
    } else if (quant == "") {
        alert("Quantidade em branco")
    } else if (motivoDevo == "") {
        alert("Motivo de Devolução em branco")
    } else if (dataDevo == "") {
        alert("Data da Devolução em branco")
    } else if (img == "") {
        alert("Sem foto da peça selecionada")
    } else cadastrarItem(lote, material, parseInt(quant), motivoDevo, dataDevo, img);
}

function cadastrarItem(lote, material, quant, motivoDevo, dataDevo, img) {
    let novoItem = { lote: lote, material: material, quantidade: quant, motivo: motivoDevo, data: dataDevo, foto: img };
    if (typeof (Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        produtos.push(novoItem);
        localStorage.setItem("produtos", JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso " + quant + " unidades do produto" + produto + "!");
    } else {
        alert("Seu navegador é muito antigo para rodar esse programa")
    }
}

function mostrarItens() {
    let produtos = localStorage.getItem("produtos");
    if (produtos) {
        produtos = JSON.parse(produtos);
    } else {
        produtos = [];
    }
    const gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = '';
    produtos.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("grid-item");
        itemDiv.innerHTML = `
        <img src="${item.foto}" alt="Foto do produto">
        <span><strong>Lote:</strong> ${item.lote}</span>
        <span><strong>Material:</strong> ${item.material}</span>
        <span><strong>Quantidade:</strong> ${item.quantidade}</span>
        <span><strong>Motivo:</strong> ${item.motivo}</span>
        <span><strong>Data:</strong> ${item.data}</span>
        `;
        gridContainer.appendChild(itemDiv);
    });
}