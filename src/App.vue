<template>

  <HeaderVue></HeaderVue>
  <SliderImgs :imgs="imgs"></SliderImgs>
  <ProductsCategories></ProductsCategories>

</template>

<script>
import HeaderVue from './components/HeaderVue.vue';
import SliderImgs from './components/SliderImgs.vue';
import ProductsCategories from './components/ProductsCategories.vue';

let imgs = ["https://http2.mlstatic.com/D_NQ_929792-MLA77873570079_072024-OO.webp", "https://http2.mlstatic.com/D_NQ_722256-MLA77920721409_072024-OO.webp", "https://http2.mlstatic.com/D_NQ_930309-MLA77706244516_072024-OO.webp"]
console.log(imgs)

export default {
  name: 'App',
  components: {
    HeaderVue,
    SliderImgs,
    ProductsCategories

  },
  data() {
      return {
        imgs}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: #ebebeb;

}
</style>
