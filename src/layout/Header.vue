<script setup lang="ts">
  import { inject, ref } from 'vue';
  import Button from '@/components/Button.vue';
  import { globalKey, langKey } from '@/data/symbol';
  import { Theme, GlobalDataInter, Language } from '@/data/constant';
  import MenuSVG from '@/assets/svg/menu.vue';
  const globalValue = inject<GlobalDataInter>(globalKey);
  const langValue = inject<object>(langKey);
  const menuClass = ref('hidden');
  const changeTheme = () => {
    globalValue.value.theme = globalValue.value.theme === Theme.Light ? Theme.Dark :  Theme.Light;
  }
  const changeLang = () => {
    globalValue.value.language = globalValue.value.language === Language.CN ? Language.EN : Language.CN;
  }
  const menu = () => {
    menuClass.value = menuClass.value === 'hidden' ? 'show' : 'hidden';
  }
  
</script>

<template>
  <header>
      <div class="location">
        <h2>yujinhongMM</h2>
        <ul :class="menuClass">
          <nav @click="menu">
            <router-link to="/record">{{ langValue?.['menu.home'] }}</router-link>
            <router-link to="/record/classification/0">{{ langValue?.['menu.englishStudy'] }}</router-link>
            <router-link to="/record/classification/1">{{ langValue?.['menu.componentWheel'] }}</router-link>
            <router-link to="/record/classification/2">{{ langValue?.['menu.bug'] }}</router-link>
          </nav>
          <Button @click="changeLang" type="greenNoBorder" className="button">{{ langValue?.['button.languageChange'] }}</Button>
        </ul>
        <MenuSVG class='menuSvg' @click="menu"/>
      </div>
  </header>
</template>
  
<style lang='less' scoped>

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  margin: auto;
  z-index: 9999;
  @media (min-width: @screen-width) {
    width: 90%;
  }
  @media (max-width: @screen-width) {
    width: 95%;
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0px 1px 0 rgb(0 0 0 / 5%);
    transition: all .08s;
    font-weight: 400;
    z-index: 1030;
    position: relative;
    h2 {
      margin-right: 2rem;
      font-size: 1.25rem;
      font-weight: 500;
      cursor: pointer;
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      nav {
        display: flex;
        a {
          display: block;
          padding: 0.8rem 1rem;
          color: #6c757d;
          cursor: pointer;
          &:hover {
            color: #212529;
          }
        }
      }
      @media (max-width: @screen-width) {
        display: none;
        position: absolute;
        background: #fff;
        top: 4rem;
        left: -2.5%;
        right: -2.5%;
        padding-bottom: 1rem;
        text-align: center;
        
        nav {
          display: block;
        }
      }
    }
    .menuSvg {
      display: none;
      width: 2rem;
      height: 2rem;
      margin: 1rem 0;
      @media (max-width: @screen-width) {
        display: block;
      }
    }
    .button {
      display: block;
    }
    .show {
      @media (max-width: @screen-width) {
        display: block;
        overflow: hidden;
        // 展开
        max-height: 1000px;  // 尽可能大 不过满足最大高度即可
        transition: max-height 1s ease-in;
        -webkit-transform: max-height 1s ease-in;

      }
    }
    .hidden {
      @media (max-width: @screen-width) {
        display: block;
        max-height: 1000px;  // 尽可能大 不过满足最大高度即可
        overflow: hidden;
        transition: max-height 0.75s ease-out;
        -webkit-transform: max-height 0.75s ease-out;
        max-height: 0;
      }
    }
  }
  
}
</style>