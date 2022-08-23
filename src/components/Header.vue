<script setup lang="ts">
import { inject } from 'vue';
import { globalKey } from '@/assets/symbol';
const globalValue = inject<object>(globalKey, {});
const changeTheme = () => {
  globalValue.value.theme = 'dark';
}
</script>

<template>
  {{ globalValue?.theme }}
  <button @click="changeTheme">改变</button>
</template>
  
<style scoped>

</style>