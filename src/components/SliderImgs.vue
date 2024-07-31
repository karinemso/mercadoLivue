<template>
    <div class="relative"  @mouseenter="handleHover" @mouseleave="handleHover"> 
    <img :src="imgs[indexImg]" alt="" class="h-40 min-w-full sm:h-full object-cover">
    
    


<div v-if="aparece" class="absolute flex w-full top-40 justify-between">
    <div><button class="p-4 bg-white text-purple rounded-tr-full rounded-br-full" @click="prevImg">ANTES</button></div>
    <div><button class="p-4 bg-white text-purple rounded-tl-full rounded-bl-full" @click="nextImg">DEPOIS</button></div>
</div>
    

    <div class="bg-custom-gradient h-24 absolute bottom-0 right-0 z-10 w-full">

    </div>
    </div>

</template>

<script>






export default {
  name: 'SliderImgs',
 props: {
    imgs : {
        type : Array,
        required: true

    }
 },
 data(){
    return {
        aparece : false,
        indexImg: 0,
        
    }
 },

 methods: {
    handleHover(){
    console.log("PASSOU")
    this.aparece = !this.aparece
},

 nextImg(){
    this.indexImg = this.indexImg + 1 > this.imgs.length -1? 0 : this.indexImg+ 1
},

prevImg(){
    this.indexImg  = this.indexImg - 1 >= 0 ? this.indexImg - 1: this.imgs.length - 1
},

autoSlide(){
    setInterval(() => {

        if(!this.aparece){
            this.indexImg == this.imgs.length -1  ? this.indexImg = 0 : this.indexImg++
        }
}, 3000)
}


 },
 mounted() {
    this.autoSlide();
  }
}
</script>