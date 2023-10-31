<script setup>
import {defineProps} from 'vue';
const props = defineProps(['sr','title','paragraph'])
</script>
<template>
    <div class="">
        <div class=" w-96 h-52 rounded-lg shadow-2xl shadow-slate-300 bg-white flex flex-col space-y-3 px-5 py-3">
            <div class="bg-Orange-0 rounded-full w-10 h-10 z-0">
                <img class=" w-7 h-7 mx-auto my-1" :src="props.sr">
            </div>
            <h2 class="text-xl font-Palanquin text-black font-bold mt-3 ">{{ props.title }}</h2>
            <p class="text-lg text-Nblack-0 font-Montserrat mt-2 whitespace-pre-wrap">{{ props.paragraph }}</p>
        </div>
    </div>
</template>