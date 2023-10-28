<template >
    <div class=" ">
        <img 
        v-motion
        :initial="{
        x: 100,
        opacity: 1,
        rotate:15
        }"
        :enter="{
        x: 0,
        opacity: 1,
        rotate:15,
        transition: {
        duration: 600,
        type: 'keyframes',
        ease: 'backInOut',
    },
}"
        class=" w-full rotate-[15deg] h-fit    " 
        :key="Shoes" 
        :src="Shoes" 
        alt="">

    <div class="flex  z-0  flex-row space-x-2">
        <div  v-for="image in images"  :key="image">
            <img 
            class=" bg-card mt-10 bg-cover p-7 h-32 w-32    object-center mx-7 rounded-lg shadow-lg"  
            @click="Shoes = image" 
            :src="image"
            alt="">
        </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import product1 from '../assets/Pictures/product1.png';
  import product2 from '../assets/Pictures/product2.png';
  import product3 from '../assets/Pictures/product3.png';
  import product5 from '../assets/Pictures/product5.png';
  import product6 from '../assets/Pictures/product6.png';
  import hero from '../assets/Pictures/hero-26fc9f87.png';



  
  
  const images = ref([product1, product2, product3, product5, product6,hero]);
  const Shoes = ref(product1);
  </script>
  
  <!-- <style>
  .image-fade-enter-active, .image-fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .image-fade-enter, .image-fade-leave-to /* .image-fade-leave-active in <2.1.8 */ {
    opacity: 0; 
  }
  </style>
   -->