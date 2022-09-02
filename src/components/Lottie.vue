<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import lottie from "lottie-web"; 
    const props = defineProps<{
        animationData: object
        options?: {
            [propName: string]: any
        }
        [propName: string]: any
    }>()
    const animation = ref(null);
    const { options = {} } = props;
    onMounted(async () => {
        startAnim()
    })
    const startAnim = () => {
        lottie.loadAnimation({
            container: animation.value,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: props.animationData,
            ...options
        });
    }
</script>

<template>
    <div ref="animation"></div> 
</template>
  
<style lang='less' scoped>
</style>