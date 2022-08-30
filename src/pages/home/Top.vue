<script setup lang="ts">
    import { inject } from 'vue';
    import Button from '@/components/Button.vue';
    import { GlobalDataInter } from '@/data/constant';
    import { langKey, globalKey } from '@/data/symbol';
    const globalValue = inject<GlobalDataInter>(globalKey);
    const langValue = inject<object>(langKey);
</script>

<template>
    <div class="content">
        <div class="left">
            <span class="title">
                {{globalValue?.configTop?.title}}
            </span>
            <span class="abstract">
                {{globalValue?.configTop?.abstract}}
            </span>
            <Button className="button" type="black">{{ langValue?.['button.learnMore'] }}</Button>
        </div>
        <img class="right" :src="globalValue?.configTop?.img"/>
    </div>
</template>
  
<style lang='less' scoped>
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e8f3ec;
        animation: bounceInLeft 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
        .left {
            padding: 0 4% 1rem 8%;
            .title {
                display: block;
                font-weight: 700;
                margin-bottom: 1rem;
                font-size: 2rem
            }
            .button {
                margin-top: 2rem;
                width: 5rem;
            }
        }
        .right {
            max-width: 50%;
        }
    }
</style>