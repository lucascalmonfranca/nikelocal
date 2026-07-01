$(document).ready(function () {

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const listaElement = $("#lista");
    const totalElement = $("#total");

    function exibirCarrinho() {

        listaElement.empty();
        let totalPreco = 0;

        $.each(carrinho, function (index, item) {

            const listItem = $(`
                <div class="item-carrinho">
                    <img src="${item.poster}" width="120">
                    <div class="info">
                        <h3>${item.desc}</h3>
                        <p>R$ ${item.valor.toFixed(2)}</p>
                    </div>
                </div>
            `);

            const removeButton = $("<button>")
                .text("❌ Remover")
                .click(function () {
                    removerItem(index);
                });

            listItem.append(removeButton);

            listaElement.append(listItem);

            totalPreco += item.valor;
        });

        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`);
    }

    function removerItem(index) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        exibirCarrinho();
    }

    exibirCarrinho();

});