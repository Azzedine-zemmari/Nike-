<script setup>
import {defineProps} from 'vue';
const props = defineProps(['src','title','paragraph'])
</script>
<template>
    <div class="">
        <div class=" w-96 h-40 rounded-lg shadow-2xl shadow-slate-300 bg-white flex flex-col space-y-5">
            <img class=" bg-Orange-0 rounded-full w-10 h-10 mt-2" :src="props.src" >
            <h2 class="text-xl font-Palanquin text-black font-bold mt-3 ">{{ props.title }}</h2>
            <p class="text-lg text-Nblack-0 font-Montserrat mt-2 whitespace-pre overflow-ellipsis">{{ props.paragraph }}</p>

        </div>
    </div>
</template>