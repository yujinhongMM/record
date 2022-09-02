<script setup lang="ts">

</script>

<template>
    <div class="main">
       <router-view></router-view>
    </div>
</template>
  
<style lang='less' scoped>
    .main {
        overflow: hidden;
        margin: auto;
        @media (min-width: @screen-width) {
            width: 90%;
            padding: 4rem 0 7rem;
        }
        @media (max-width: @screen-width) {
            width: 95%;
            padding: 4rem 0 4rem;
        }
    }
    
</style>