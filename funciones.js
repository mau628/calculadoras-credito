const diasAnio = function () {
    const d = new Date();
    const n = d.getFullYear();
    const anio = parseInt(n);
    let dias = 365;
    if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)) {
        dias = 366;
    }
    return dias;
}();

const numberFormat = new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'GTQ',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function redondear(valor) {
    return +(Math.round(valor * 100) / 100).toFixed(2);
}

function formatoMoneda(monto) {
    return numberFormat.format(monto);
}

function sum(items, prop) {
    return items.reduce(function (a, b) {
        return a + b[prop];
    }, 0);
}

function cuota(tasa, plazo, monto) {
    return -((monto * tasa) / (1 - Math.pow(1 + tasa, -plazo)))
}