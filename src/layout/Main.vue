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
        padding-top: 3.5rem;
        margin: auto;
    }
    @media (min-width: 992px) {
        .main {
            width: 90%;
        }
    }
</style>