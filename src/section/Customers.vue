<template>
    <div class="bg-JiJi-0 px-10 py-5 mt-10">
        <div class="flex flex-col justify-center items-center  ">
            <h1 class=" text-5xl font-black capitalize font-Palanquin">what our <span class=" text-Orange-0">Customers</span> say</h1>
            <p class=" font-Montserrat text-Gray-0">
                Hear genuine stories from our satisfied customers about <br>
                their exceptional experiences with us.
            </p>
        </div>
        <CustomerCard/>
    </div>
</template>
<script setup>
import CustomerCard from '../components/CustomerCard.vue';
</script>