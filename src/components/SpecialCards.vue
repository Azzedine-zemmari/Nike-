<template>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      navigation
        :pagination="{ clickable: true }"
      class="mySwiper"

    >
      <!-- <swiper-slide v-for="item in SpecialCard" :key="item">
        <img :src="item" alt="Image" />
      </swiper-slide> -->
      <swiper-slide>
        <img src="/src/assets/Pictures/product1.png" alt="Image" />
        </swiper-slide>
        <swiper-slide>
        <img src="/src/assets/Pictures/product2.png" alt="Image" />
        </swiper-slide>
        <swiper-slide>
        <img src="/src/assets/Pictures/product3.png" alt="Image" />
        </swiper-slide>
        <swiper-slide>
        <img src="/src/assets/Pictures/product5.png" alt="Image" />
        </swiper-slide>
        <swiper-slide>
        <img src="/src/assets/Pictures/product6.png" alt="Image" />
        </swiper-slide>
        <swiper-slide>
        <img src="/src/assets/Pictures/big-shoe2-746845c6.png" alt="Image" />
        </swiper-slide>
    </swiper>
</template>
<script>
    // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
    // Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import {SpecialCard} from '../constant/Data.vue' 
    // import required modules
import { EffectCards,Navigation, Pagination, } from 'swiper/modules';
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [EffectCards,Navigation, Pagination],
            };
        },
    };
</script>
<style scoped>
.swiper {
  width: 320px;
  height: 420px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(0.25turn, #f0efef, #FF6452);
  padding: 15px 15px;
}


</style>