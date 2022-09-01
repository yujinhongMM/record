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
        padding-top: 2rem;
        margin: auto;
        @media (min-width: @screen-width) {
            width: 90%;
        }
        @media (max-width: @screen-width) {
            width: 95%;
        }
    }
    
</style>