<template>
    <div id="#Home" class="mt-10 ml-32 grid grid-cols-2 grid-flow-col" >
        <div class="flex flex-col space-y-7">
            <p class=" text-Orange-0 font-Montserrat text-base  ">Our Summer Collection</p>
            <h1 class="  whitespace-nowrap capitalize text-8xl font-bold font-Palanquin z-10">The new arrival <br>  <span class=" whitespace-nowrap text-Orange-0 font-Palanquin">nike</span> shoes</h1>
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
        <div class=" col-start-2">
            <svg class=" z-0 h-screen   " width="610" viewBox="0 0 506 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="505.626" height="502.15" rx="30" fill="#C1C4DE"/>
                <mask id="mask0_2_359" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0">
                <rect width="505.626" height="504.485" rx="30" fill="#C1C4DE"/>
                </mask>
                <g mask="url(#mask0_2_359)">
                <path d="M509.14 26.8594C487.59 78.4654 442.211 161.373 413.456 210.304C409.855 216.433 405.468 222.36 402.111 228.57C396.81 238.375 393.097 253.415 394.465 263.998C397.664 288.728 431.044 310.455 455.631 322.107C472.986 330.331 488.113 341.758 507.424 346.996" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
                <path d="M478.708 -11.6797C451.053 58.5165 392.677 137.217 355.776 203.776C351.155 212.112 345.525 220.175 341.217 228.621C334.415 241.958 329.649 262.416 331.406 276.811C335.51 310.45 378.346 340.004 409.897 355.853C432.056 368.202 478.158 393.029 505.628 402.886" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
                <path d="M460.564 -87.5859C419.278 12.0524 366.347 98.4086 311.258 192.884C304.359 204.716 295.955 216.161 289.523 228.151C279.368 247.081 272.253 276.119 274.875 296.552C281.003 344.301 344.953 386.251 392.056 408.746C425.306 424.626 473.312 454.081 510.307 464.195" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
                </g>
            </svg>

        </div>
    </div>
</template>
<script setup>
import { statistics } from '../constant/Data.vue';
</script>