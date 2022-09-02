<script setup lang="ts">
  import { provide, ref, onMounted, reactive, watch  } from 'vue';
  import Main from '@/layout/Main.vue';
  import Header from '@/layout/Header.vue';
  import Footer from '@/layout/Footer.vue';
  import LoadingSVG from '@/assets/svg/loading1.vue';
  import request from '@/service/request.ts';
  import LANG from '@/assets/lang';
  import { globalKey, langKey } from '@/data/symbol.ts';
  import { globalValueDefault } from '@/data/initData';

  const globalValue = ref(globalValueDefault);
  const langValue = ref(LANG.CN);
  const show = ref(false);
  // 全局配置
  provide(globalKey, globalValue);
  // 语言
  provide(langKey, langValue);

  watch(() => globalValue.value.language, (lang) => {
    langValue.value = LANG[lang];
  })

  onMounted(async () => {
    const data = await request('/global', { method: 'GET', mode: 'cors'  });
    globalValue.value = data;
  })

  window.addEventListener('load', () => {
    console.log("🚀 ~ file: App.vue ~ line 31 ~ window.addEventListener ~ load")
    show.value = true
  })
  


</script>

<template>
  <div class="mantle" v-if="!show">
    <LoadingSVG class="loading"></LoadingSVG>
  </div>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>
  
<style lang='less' scoped>
  .mantle {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #e8f3eceb;
    z-index: 10000;
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -2.5rem 0 0 -2.5rem;
        width: 5rem;
        height: 5rem;
        border: 0.06rem solid #D0D3D4;
        border-top-color: #626567;
        border-radius: 50%;
        animation: rotate 1.5s linear infinite;
    }
  }
</style>
