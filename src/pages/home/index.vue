<script setup lang="ts">
 import Button from '@/components/Button.vue';
</script>

<template>
    <div class="content">
        <div class="left">
            <span class="title">
                yujinhongMM的博客
            </span>
            <span class="abstract">
                用于记录英语，各种前端技术的私人博客
            </span>
            <Button className="button" type="black">了解更多</Button>
        </div>
        <img class="right" src="https://img1.baidu.com/it/u=3671171695,655325715&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661878800&t=9e39c2af51b01c846836724131820027"/>
    </div>
</template>
  
<style lang='less' scoped>
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e8f3ec;
        .left {
            padding: 0 4% 0 8%;
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