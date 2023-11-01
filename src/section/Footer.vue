<template>
    <div class="flex mt-10 flex-wrap py-10 justify-between px-5  bg-black text-white">
        <div class=" flex flex-col mx-10">
            <img src="../assets/Pictures/footer-logo.svg" alt="" class=" max-w-[220px]">
            <p class=" mt-5">
                Get shoes ready for the new term at your <br>
                nearest Nike store. Find Your perfect Size <br>
                In Store. Get Rewards
            </p>
            <div class="flex flex-row gap-3 mt-5 ">
                <a href="https://www.facebook.com/profile.php?id=100082265501825"><img  src="../assets/icons/facebook.svg" alt=""></a>
                <a href="https://instagram.com/azzedine.exe?igshid=OGY3MTU3OGY1Mw=="><img src="../assets/icons/instagram.svg" alt=""></a>
                <a href=""><img src="../assets/icons/twitter.svg" alt=""></a>
            </div>
        </div>
        <div class="flex flex-col mx-10">
            <p class=" font-bold text-lg text-white">Products</p>
            <p v-for="product in Products">
                {{ product }}
            </p>
        </div>
        <div class="flex flex-col mx-10">
            <p class=" font-bold text-lg text-white">Help</p>
            <p v-for="H in help">
                {{ H }}
            </p>
        </div>
        <div class="flex flex-col mx-10">
            <p class=" font-bold text-lg text-white">Get Intouch</p>
            <p v-for="item in GetIntouch">
                {{ item }}
            </p>
        </div>
    </div>
    <div class=" bg-black h-fit flex flex-row justify-between text-white px-10">
        <p class=" flex  whitespace-nowrap "> <img class="mr-2" src="../assets/icons/copyright-sign.svg" alt=""> Copyright. All rights reserved.</p>
        <p>Terms and Condition</p>
    </div>
    <div class="bg-black">..</div>
</template>
<script setup>
import {Products,help,GetIntouch} from '../constant/Data.vue';
</script>