var _interacoes = [];
var _acoes = [];
var _produtos = [];
var _regex_acoes = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');
var _regex_produtos = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');
var _regex_clientes = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');
var _regex_compra = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$');

function ler_arquivos() {
    $.get('./base/interacoes.base', function (data) {
        _interacoes = data.split("\n");
    });

    $.get('./base/acoes.json', function (data) {
        _acoes = data.acoes;
    });

    $.get('./base/produtos.json', function (data) {
        _produtos = data.produtos;
    });
}

function verifica_compra() {
    $.each(_interacoes, function (i, int) {
        $.each(_produtos, function (j, pro) {
            if (_regex_compra.test(pro)) {
                console.log("Realizou a compra");
            }
        });
    });
}


function exibir() {
    $('#r_acoes').html('Total de Ações: ' + _acoes.length);
    $('#r_produtos').html('Total de Produtos: ' + _produtos.length);
    verifica_compra();
}

ler_arquivos();

setTimeout(exibir, 1000);
