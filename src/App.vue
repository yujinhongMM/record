<script setup lang="ts">
  import { provide, ref, onMounted, reactive  } from 'vue';
  import Main from '@/components/Main.vue';
  import Header from '@/components/Header.vue';
  import { globalKey } from '@/data/symbol.ts';
  import request from '@/service/request.ts';

  const globalValue = ref(null)
  
  provide(globalKey, globalValue);

  onMounted(async () => {
    const data = await request('https://www.fastmock.site/mock/d75f9145f96813a6716231c1765c9e2b/record/global', { method: 'GET', mode: 'cors'  });
    globalValue.value = data;
    console.log(data);
  })

</script>

<template>
  <Header></Header>
  <Main></Main>
</template>
  
<style scoped>

</style>
