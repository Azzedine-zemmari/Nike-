<template>
    <div class="flex flex-col mt-10 lg:mx-32 lg:flex-row md:flex-row lg:justify-between md:justify-center">
        <SpecialCards/>
        <div class="flex flex-col space-y-6 mt-5 ml-5 lg:ml-40 md:ml-28">
            <h1 class=" font-Montserrat font-black text-4xl "><span class="text-Orange-0">Special</span> Offer</h1>
            <p class="whitespace-pre-wrap text-Gray-0 text-xl">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p class="whitespace-pre-wrap text-Gray-0 text-xl">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <div class="flex flex-row space-x-6">
                <button class=" w-fit flex top-96 text-white bg-Orange-0 px-7 py-3 rounded-full mb-5 md:ml-1 lg:ml-1">View details</button>
                <button class=" w-fit flex top-96 text-Gray-0 bg-white px-7 py-3 rounded-full mb-5 border-solid border-2 border-Gray-0 md:ml-1 lg:ml-1 ">Learn more</button>

            </div>
        </div>
    </div>
</template>
<script setup>

import SpecialCards from '../components/SpecialCards.vue'
</script>