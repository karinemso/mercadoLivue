<template>
<div>
<h1>PRODUTO 1</h1>

</div>

</template>


<script>

let categories = [
    {
    title: "Entre na sua conta",
    img: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg",
    label: "Aproveite ofertas para comprar tudo o que quiser",
    cta: "Entrar na sua conta"
},
    {
    title: "Meios de pagamento",
    img: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg",
    label: "Pague suas compras com rapidez e segurança",
    cta: "Mostrar meios"
},
    {
    title: "Menos de R$100",
    img: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/mlb-low-price-product.svg",
    label: "Confira produtos com preços baixos",
    cta: "Mostrar Produtos"
},
    {
    title: "Mais vendidos",
    img: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/top-sale.svg",
    label: "Explore os produtos que são tendência",
    cta: "Ir para Mais vendidos"
},
    {
    title: "Compra garantida",
    img: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/buy-protected.svg",
    label: "Você pode devolver sua compra grátis",
    cta: "Como funciona"
},
    {
    title: "Lojas oficiais",
    img: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/store-official.svg",
    label: "Suas marcas preferidas",
    cta: "Mostrar lojas"
},
    {
    title: "Nossas categorias",
    img: "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/categories.svg",
    label: "Encontre celulares, roupas, imóveis e muito mais",
    cta: "Ir para Categorias"
},


]
    export default {
        name: "ProductsCategories",
        data(){
            categories
        }
    }

</script>