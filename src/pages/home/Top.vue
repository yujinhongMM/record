<script setup lang="ts">
    import { inject } from 'vue';
    import animationData1 from "@/assets/lottie/animation1.json"; 
    import Button from '@/components/Button.vue';
    import Lottie from '@/components/Lottie.vue';
    import { GlobalDataInter } from '@/data/constant';
    import { langKey, globalKey } from '@/data/symbol';
    const globalValue = inject<GlobalDataInter>(globalKey);
    const langValue = inject<object>(langKey);
</script>

<template>
    <div class="content">
        <Lottie :animationData="animationData1"  class="banner" />
        <div class="left">
            <span class="title">
                {{globalValue?.configTop?.title}}
            </span>
            <span class="abstract">
                {{globalValue?.configTop?.abstract}}
            </span>
            <Button className="buttonM" type="black">{{ langValue?.['button.learnMore'] }}</Button>
        </div>
        <img class="right" :src="globalValue?.configTop?.img"/>
    </div>
</template>
  
<style lang='less' scoped>
    .content {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e8f3ecc3;
        margin: auto;
        @media (max-width: @screen-width) {
            width: 95vw;
            height: 95vw;
        }
        .banner {
            @media (min-width: @screen-width) {
               display: none;
            }
            @media (max-width: @screen-width) {
               display: block;
               position: absolute;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               z-index: -1;
               opacity: 0.5;
            }
        }
        .left {
            padding: 0 4% 1rem 8%;
            .title {
                display: block;
                font-weight: 700;
                margin-bottom: 1rem;
                font-size: 2rem
            }
            .buttonM {
                margin-top: 2rem;
            }
        }
        .right {
            @media (min-width: @screen-width) {
                display: block;
                max-width: 50%;
            }
            @media (max-width: @screen-width) {
               display: none;
            }
        }
    }
</style>