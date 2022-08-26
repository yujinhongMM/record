<script setup lang="ts">
  import { inject } from 'vue';
  import { globalKey, langKey } from '@/data/symbol';
  import { Theme, GlobalDataInter, Language } from '@/data/constant';
  const globalValue = inject<GlobalDataInter>(globalKey);
  const langValue = inject<object>(langKey);

  const changeTheme = () => {
    globalValue.value.theme = globalValue.value.theme === Theme.Light ? Theme.Dark :  Theme.Light;
  }
  const changeLang = () => {
    globalValue.value.language = globalValue.value.language === Language.CN ? Language.EN : Language.CN;
  }
  
</script>

<template>
  {{ globalValue.theme }}
  <button @click="changeTheme">切换主题</button>
  {{ langValue?.['menu.englishStudy']}}
  <button @click="changeLang">切换中英文</button>
</template>
  
<style scoped>

</style>