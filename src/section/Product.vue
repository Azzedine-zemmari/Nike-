<template>
    <div class="mt-10 ml-10 ">
        <h1 class="text-5xl font-black font-Montserrat">Our <span class="text-Orange-0">Popular</span> Products</h1>
        <p class=" text-Gray-0 mt-5 ">Experience top-notch quality and style with our sought-after <br> selections. Discover a world of comfort, design, and value</p>
        <div  class="flex flex-col flex-wrap space-x-7 justify-center items-center mt-5 lg:flex-row  md:flex-row sm:flex-row">
            <div  v-for="item in data">
                <Products
                :src="item.src"
                :rating="item.rating"
                :price="item.price"
                :title="item.title"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import Products from '../components/Products.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';




const data = [
    {src:"/src/assets/Pictures/product1.png",rating:'(4.7)',title:"Nike Air Jordan-10",price:"$230.00"},
    {src:"/src/assets/Pictures/product2.png",rating:'(4.7)',title:"Nike Air Jordan-10",price:"$230.00"},
    {src:"/src/assets/Pictures/product3.png",rating:'(4.7)',title:"Nike Air Jordan-10",price:"$230.00"},
    {src:"/src/assets/Pictures/product5.png",rating:'(4.7)',title:"Nike Air Jordan-10",price:"$230.00"},
    {src:"/src/assets/Pictures/product6.png",rating:'(4.7)',title:"Nike Air Jordan-10",price:"$230.00"},
];
</script>

