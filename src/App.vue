<script setup lang="ts">
  import { provide, ref, onMounted  } from 'vue';
  import Main from '@/components/Main.vue';
  import Header from '@/components/Header.vue';
  import { globalKey } from '@/assets/symbol.ts';

  const globalValue = ref(null)
  
  provide(globalKey, globalValue);

  onMounted(() => {
    fetch('https://www.fastmock.site/mock/d75f9145f96813a6716231c1765c9e2b/record/global',  { method: 'GET', mode: 'cors'  }).then(res => console.log(res)).then(res => console.log(res))
  })

</script>

<template>
  <Header></Header>
  <Main></Main>
</template>
  
<style scoped>

</style>
