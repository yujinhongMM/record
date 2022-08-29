<script setup lang="ts">
  import { inject } from 'vue';
  import Button from '@/components/Button.vue';
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
  <header>
    <nav>
      <h2>yujinhongMM</h2>
      <li>{{ langValue?.['menu.englishStudy']}}</li>
      <li>{{ langValue?.['menu.englishStudy']}}</li>
      <li>{{ langValue?.['menu.englishStudy']}}</li>
      <li>{{ langValue?.['menu.englishStudy']}}</li>
      <li>{{ langValue?.['menu.englishStudy']}}</li>
    </nav>
    <div class="setting">
      <Button @click="changeLang">按钮1</Button>
    </div>
  </header>
</template>
  
<style lang='less' scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  box-shadow: 0 0px 1px 0 rgb(0 0 0 / 5%);
  transition: all .08s;
  font-weight: 400;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #fff;
  nav {
    display: flex;
    align-items: center;
    h2 {
      margin-right: 2rem;
      font-size: 1.25rem;
      font-weight: 500;
      cursor: pointer;
    }
    li {
      display: block;
      padding: 0.8rem 1rem;
      color: #6c757d;
      cursor: pointer;
    }
    li:hover {
      color: #212529;
    }
  }
  .setting {
    display: flex;
  }

  @media (min-width: 992px) {
    width: 90%;
  }
}
</style>