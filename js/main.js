var _interacoes = [];
var _acoes = [];
var _produtos = [];
var _regex_acoes = /comprar|saber|informações/gim;
var _regex_produtos = /\w+$/gimu;
var _regex_clientes = /[Oi,\s|eu\s|Sou\s|a\s|o\s]|\w+/gim;
var _regex_compra = /[^comprar o|a|um|uma]\w+$/gim;
var _resultado = {
    acoes: 0,
    produtos: 0,
    clientes: 0,
    total: 0.00
};

function ler_arquivos() {
    $.get('./base/interacoes.base', function (data) {
        _interacoes = data.split("\n");
    });

    $.get('./base/acoes.json', function (data) {
        _acoes = JSON.parse(data);
    });

    $.get('./base/produtos.json', function (data) {
        _produtos = JSON.parse(data);
    });
}

function verifica_acoes() {
    $.each(_interacoes, function (i, int) {
        var aux = _regex_acoes.exec(int);
        if (aux) {
            $.each(_acoes, function (j, aco) {
                if (aux[0] === aco.nome) {
                    _resultado.acoes = _resultado.acoes + 1;
                }
            })
        }
    });
}

function verifica_clientes() {
    $.each(_interacoes, function (i, int) {
        var aux = _regex_clientes.exec(int);
        if (aux) {
            _resultado.clientes = _resultado.clientes + 1;
        }
    });
}

function verifica_produtos() {
    $.each(_interacoes, function (i, int) {
        var aux = _regex_produtos.exec(int);
        if (aux) {
            $.each(_produtos, function (j, pro) {
                if (aux[0] === pro.nome) {
                    _resultado.produtos = _resultado.produtos + 1;
                }
            })
        }
    });
}

function verifica_compra() {
    $.each(_interacoes, function (i, int) {
        var aux = _regex_compra.exec(int);
        if (aux) {
            $.each(_produtos, function (j, pro) {
                if (aux[0] === pro.nome) {
                    _resultado.total = _resultado.total + pro.preco;
                }
            })
        }
    });
}


function exibir() {
    verifica_acoes();
    verifica_clientes();
    verifica_produtos();
    verifica_compra();
    $('#r_acoes').html('Total de Ações: ' + _resultado.acoes);
    $('#r_produtos').html('Total de Produtos: ' + _resultado.produtos);
    $('#r_clientes').html('Total de Clientes: ' + _resultado.clientes);
    $('#r_total').html('Valor em Compra: ' + _resultado.total);
}

ler_arquivos();

setTimeout(exibir, 1000);
