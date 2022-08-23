<script setup>
  import { useMouse } from './useMouse.js';
  const { x, y } = useMouse()

</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}
</template>
  
<style scoped>

</style>