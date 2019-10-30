
let dados = [];
let a, b, r;
let somatorios = {};

$('.add').click(function() {
	
	let iptPeriodo = $('input[name="periodo"]');
	let iptDemanda = $('input[name="demanda"]');
	
	let x = parseInt(iptPeriodo.val());
	let y = parseFloat(iptDemanda.val());


	let row = {'x': x, 'y': y, 'xy': (x * y), 'x2': Math.pow(x, 2), 'y2': Math.pow(y, 2), 'previsao': 0};

	dados.push(row);

	addRow(row);

	iptPeriodo.val(x+1);
	iptDemanda.val('');
	iptDemanda.focus();

});


$('.clear').click(function() {
    location.reload();
});


$('.result').click(function() {

    somatorio();
    calcularB();
    calcularA();
    calcularPrevisoes();
    somatorio();

    calcularR();

    $('.resultados')
        .replaceWith(
            '<li><b>B:</b> ' + b.toFixed(3) + '</li>' +
            '<li><b>A:</b> ' + a.toFixed(3) + '</li>' +
            '<li><b>R:</b> ' + r.toFixed(3) + '%</li>'
        );

    var ctx = document.getElementById('scatter');

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: makeLabels().labels,
            datasets: [{
                type: 'line',
                label: 'Previsão',
                data: makeLabels().labels,
                fill: false,
                backgroundColor: "rgba(218,83,79, .7)",
                borderColor: "rgba(218,83,79, .7)",
                pointRadius: 0
            }, {
                type: 'bubble',
                label: 'Real',
                data: makeBubbles().labels,
                backgroundColor: "rgba(76,78,80, .7)",
                borderColor: "transparent"
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        autoSkip: true,
                        max: Math.max(...makeLabels().arr)
                    }
                }],
            }
        }
    });

});


function addRow(row) {
	$('#tabelaPrevisao tbody').append(
    	"<tr>" + 
            "<td>" + row['x'] + "</td>" +
            "<td>" + row['y'] + "</td>" +
            "<td>" + row['xy'] + "</td>" +
            "<td>" + row['x2'] + "</td>" +
            "<td>" + row['y2'] + "</td>" +
            "<td class='previsao'>" + row['previsao'].toFixed(3) + "</td>" +
        "</tr>"
	);
}


function somatorio() {

    somatorios = {'x': 0, 'y': 0, 'xy': 0, 'x2': 0, 'y2': 0, 'previsao': 0};

    for (let i = 0; i < dados.length; i++) {
        somatorios['x'] += dados[i]['x'];
        somatorios['y'] += dados[i]['y'];
        somatorios['xy'] += dados[i]['xy'];
        somatorios['x2'] += dados[i]['x2'];
        somatorios['y2'] += dados[i]['y2'];
        somatorios['previsao'] += dados[i]['previsao'];
    }

    $('#tabelaPrevisao tfoot tr').replaceWith(
        "<tr>" + 
            "<td>" + somatorios['x'].toFixed(3) + "</td>" +
            "<td>" + somatorios['y'].toFixed(3) + "</td>" +
            "<td>" + somatorios['xy'].toFixed(3) + "</td>" +
            "<td>" + somatorios['x2'].toFixed(3) + "</td>" +
            "<td>" + somatorios['y2'].toFixed(3) + "</td>" +
            "<td class='totalPrevisao'>" + somatorios['previsao'].toFixed(3) + "</td>" +
        "</tr>"
    ); 
}


function calcularB() {
    let n = dados.length;
    b = ((n * somatorios['xy'] - somatorios['x'] * somatorios['y']) 
        / (n * somatorios['x2'] - Math.pow(somatorios['x'], 2)));
}


function calcularA() {
    let n = dados.length;
    a = ((1 / n) * somatorios['y'] - (b / n) * somatorios['x']);
}

function calcularPrevisoes() {
    let tds = $('.previsao');
    for (let i = 0; i < dados.length; i++) {
        let y = (a + b * dados[i]['x']);  
        dados[i]['previsao'] = y;
        $(tds[i]).text(y.toFixed(3));
    }
}


function calcularR() {
    let n = dados.length;
    let numerador = (n * somatorios['xy']) - (somatorios['x'] * somatorios['y']);
    let aa = n * somatorios['x2'] - Math.pow(somatorios['x'], 2);
    let bb = n * somatorios['y2'] - Math.pow(somatorios['y'], 2);
    r = numerador / Math.sqrt(aa * bb);    
    r = (Math.pow(r, 2) * 100.0);
}


function makeLabels() {
    let arr = [];
    for (let i = 0; i < dados.length; i++) {
        arr.push(dados[i]['previsao']);
    }
    arr = arr.sort((a, b) => a - b);
    let labels = arr.map(item => ({ x: item, y: item }));
    return {
        labels,
        arr
    };
};


function makeBubbles() {
    let arr = [];
    for (let i = 0; i < dados.length; i++) {
        arr.push(dados[i]['y']);
    }
    let lineLabels = makeLabels().arr
    let labels = arr.map((item, i) => ({ x: lineLabels[i], y: item }))
    return { labels, arr };
};
