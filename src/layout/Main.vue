<script setup lang="ts">
  import Home from '@/pages/home/index.vue';
</script>

<template>
    <div class="main">
        <Home />
    </div>
</template>
  
<style lang='less' scoped>
    .main {
        overflow: hidden;
        margin: auto;
        @media (min-width: @screen-width) {
            width: 90%;
            padding: 4rem 0 6rem;
        }
        @media (max-width: @screen-width) {
            width: 95%;
            padding: 4rem 0 4rem;
        }
    }
    
</style>