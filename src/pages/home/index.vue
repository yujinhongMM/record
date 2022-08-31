<script setup lang="ts">
import Top from './Top.vue'
import Modular from './Modular.vue'
</script>

<template>
    <div class="home">
        <Top />
        <Modular />
    </div>
</template>
  
<style lang='less' scoped>
    .home {
        div {
            &:nth-child(odd){
                animation: bounceInLeft 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
            }
            &:nth-child(even){
                animation: bounceInRight 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
            }
        }
    }
</style>