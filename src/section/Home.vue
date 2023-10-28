<template>
    <div id="#Home" class="mt-10 ml-32 grid grid-cols-2 grid-flow-col  " >
        <div class="flex flex-col space-y-7 ">
            <p class=" text-Orange-0 font-Montserrat text-base     ">Our Summer Collection</p>
            <h1 class="  whitespace-nowrap capitalize text-8xl font-bold font-Palanquin z-10 ">The new arrival <br>  <span class=" whitespace-nowrap text-Orange-0 font-Palanquin">nike</span> shoes</h1>
            <p class="text-Gray-0 font-Montserrat">
                Discover stylish Nike arrivals, quality <br>
                comfort, and innovation for your active life.
            </p>
            <button class=" w-fit flex top-96 text-white bg-Orange-0 px-7 py-3 rounded-full mb-5">Shop Now <svg class=" ml-4 mt-1 mb-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0886 6.18499C10.8717 6.43163 10.8717 6.83153 11.0886 7.07817L13.1032 9.36842H5.55556C5.24873 9.36842 5 9.65119 5 10C5 10.3488 5.24873 10.6316 5.55556 10.6316H13.1032L11.0886 12.9218C10.8717 13.1685 10.8717 13.5684 11.0886 13.815C11.3056 14.0617 11.6574 14.0617 11.8743 13.815L14.8373 10.4466C15.0542 10.1999 15.0542 9.80005 14.8373 9.55341L11.8743 6.18499C11.6574 5.93834 11.3056 5.93834 11.0886 6.18499Z" fill="#FF6452"/>
            </svg>
            </button>
            <div class="flex space-x-10">
                <div class="" v-for="S in statistics">
                    <h2 class="font-Palanquin text-5xl">{{ S.state }}</h2>
                    <p class="font-Montserrat text-Gray-0">{{ S.name }}</p>
                </div>
            </div>
        </div>
        <div class=" bg-hero bg-cover  ">
            <div class=" flex flex-col my-6 mx-6" >
                <Card />
            </div>
        </div>
    </div>
</template>
<script setup>
import { statistics } from '../constant/Data.vue';
import Card from '../components/Card.vue';

</script>