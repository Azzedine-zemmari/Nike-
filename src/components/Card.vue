<template>
    <div>
      <transition name="image-fade" mode="out-in">
        <img class="object-cover  w-full rotate-[15deg]   " :key="Shoes" :src="Shoes" alt="">
      </transition>
  
      <div class="flex flex-row space-x-6">
        <div v-for="image in images"  :key="image">
          <img class="bg-card w-20 h-20 mt-4 bg-cover   " @click="Shoes = image" :src="image" alt="">
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
  
  const images = ref([product1, product2, product3, product5, product6]);
  const Shoes = ref(product1);
  </script>
  
  <style>
  .image-fade-enter-active, .image-fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .image-fade-enter, .image-fade-leave-to /* .image-fade-leave-active in <2.1.8 */ {
    opacity: 0; 
  }
  </style>
  