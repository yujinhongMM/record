<script setup lang="ts">
import { inject } from 'vue';
import { globalKey } from '@/data/symbol';
import { Theme } from '@/data/constant';
const globalValue = inject<object>(globalKey);

const changeTheme = () => {
  globalValue.value.theme = globalValue.value.theme === Theme.Light ? Theme.Dark :  Theme.Light;
}
</script>

<template>
  {{ globalValue?.theme }}
  <button @click="changeTheme">改变</button>
</template>
  
<style scoped>

</style>