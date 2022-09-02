<script setup lang="ts">
    import notFoundData from "@/assets/lottie/404.json"; 
    import Lottie from '@/components/Lottie.vue';
</script>

<template>
    <Lottie :animationData="notFoundData"  class="notFound" />
</template>
    
<style lang='less' scoped>
    .notFound {
        height: 30rem;
        margin: auto;
    }
</style>