function calcular() {
    const local = document.getElementById('local').value;
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const valorMetro = parseFloat(document.getElementById('valorMetro').value);

    if (
        isNaN(largura) ||
        isNaN(comprimento) ||
        isNaN(valorMetro)
    ) {
        document.getElementById('resultado').innerHTML =
            'Preencha todos os campos numéricos.';
        return;
    }

    const area = largura * comprimento;
    const valorTotal = area * valorMetro;

    document.getElementById('resultado').innerHTML = `
        <strong>Local:</strong> ${local}<br>
        <strong>Área:</strong> ${area.toFixed(2)} m²<br>
        <strong>Valor por m²:</strong> R$ ${valorMetro.toFixed(2)}<br>
        <strong>Valor Total:</strong> R$ ${valorTotal.toFixed(2)}
    `;
}