Utilizando expressões regulares crie um software que lê um arquivo
texto que contém, em cada linha, frases que correspondem a interações
entre clientes e uma loja de produtos. As interações são descritas de
forma textual e podem ser como (com variações):

Oi, eu sou (o ou a) <nome>. Gostaria de <ação> sobre o <produto>.
Eu sou (o ou a) <nome> e queria <ação> sobre o <produto>.
Sou (o ou a) <nome> e queria <ação> um <produto>.
<nome> <ação> <produto>
Sua solução deve considerar que existem dois bancos de dados:

Banco de dados de ações (ex: saber, comprar)
banco de dados de produtos (contendo nome e preço)
Os bancos de dados podem ser considerados como arquivos texto, JSON,
bancos de dados relacionais ou outra tecnologia que possa ser usada para este fim.

O software deve processar o arquivo de entrada contendo as 
interações dos clientes com a loja e deve apresentar:

estatísticas (ex: quantidade mínima, quantidade máxima de ações, produtos, clientes)
total vendido (em Reais) -- considerar a ação "comprar" como uma compra/venda
A resposta para essa atividade deve conter:

uma ou mais expressões regulares utilizadas
um ou mais autômatos finitos representando as expressões regulares utilizadas
um link para o código do software, armazenado no Github
Os dois primeiros itens podem ser anexados à resposta (ou pode ser usado um Google Docs).