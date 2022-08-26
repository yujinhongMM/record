<script setup lang="ts">
  import { provide, ref, onMounted, reactive, watch  } from 'vue';
  import Main from '@/components/Main.vue';
  import Header from '@/components/Header.vue';
  import request from '@/service/request.ts';
  import LANG from '@/assets/lang';
  import { globalKey, langKey } from '@/data/symbol.ts';
  import { globalValueDefault } from '@/data/initData';

  const globalValue = ref(globalValueDefault);
  const langValue = ref(LANG.CN);
  // 全局配置
  provide(globalKey, globalValue);
  // 语言
  provide(langKey, langValue);

  watch(() => globalValue.value.language, (lang) => {
    langValue.value = LANG[lang];
  })

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
