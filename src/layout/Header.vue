<script setup lang="ts">
  import { inject, ref } from 'vue';
  import Button from '@/components/Button.vue';
  import { globalKey, langKey } from '@/data/symbol';
  import { Theme, GlobalDataInter, Language } from '@/data/constant';
  import MenuSVG from '@/assets/svg/menu.vue';
  const globalValue = inject<GlobalDataInter>(globalKey);
  const langValue = inject<object>(langKey);
  const menuClass = ref('');
  const changeTheme = () => {
    globalValue.value.theme = globalValue.value.theme === Theme.Light ? Theme.Dark :  Theme.Light;
  }
  const changeLang = () => {
    globalValue.value.language = globalValue.value.language === Language.CN ? Language.EN : Language.CN;
  }
  const menu = () => {
    menuClass.value = menuClass.value ? '' : 'show';
  }
  
</script>

<template>
  <header>
      <h2>yujinhongMM</h2>
      <ul :class="menuClass">
        <nav>
          <li>{{ langValue?.['menu.home'] }}</li>
          <li>{{ langValue?.['menu.englishStudy'] }}</li>
          <li>{{ langValue?.['menu.componentWheel'] }}</li>
          <li>{{ langValue?.['menu.bug'] }}</li>
        </nav>
        <Button @click="changeLang" type="greenNoBorder">{{ langValue?.['button.languageChange'] }}</Button>
      </ul>
      <MenuSVG class='menuSvg' @click="menu"/>
  </header>
</template>
  
<style lang='less' scoped>

header {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 1px 0 rgb(0 0 0 / 5%);
  transition: all .08s;
  font-weight: 400;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background-color: #fff;
  @media (max-width: 992px) {
    position: relative;
  }
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
      li {
        display: block;
        padding: 0.8rem 1rem;
        color: #6c757d;
        cursor: pointer;
        &:hover {
          color: #212529;
        }
      }
    }
    @media (max-width: 992px) {
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
    @media (max-width: 992px) {
      display: block;
    }
  }
  @media (min-width: 992px) {
    width: 90%;
  }
  @media (max-width: 992px) {
    width: 95%;
  }
  .show {
    @media (max-width: 992px) {
      display: block;
      overflow: hidden;
      animation: show 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
    }
  }
  @keyframes show {
    00% {
			opacity: 0;
			height: 0;
		}

		5% {
			opacity: 1;
			height: 6rem;
		}

    99% {
      opacity: 1;
      height: 15.25rem;
    }

    100% {
      height: auto;
    }
  }
}
</style>