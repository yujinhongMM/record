<script setup lang="ts">
    const props = defineProps<{
        content?: string
        type?: string
        className?: string
        hasBorder?: boolean
    }>()
    const { type = '', className = '' } = props;
    const classContent = `button ${type} ${className}`;
</script>

<template>
  <div :class="classContent">
    <slot></slot>
  </div>
</template>
  
<style lang='less' scoped>
    .button {
        display: block;
        width: auto;
        cursor: pointer;
        color: #03a87c !important;
        border: 1px solid #03a87c;
        padding: 0.3rem 1rem;
        border-radius: 3px;
        font-size: .93rem;
        margin: 0.1rem;
        text-align: center;
        &:hover {
            transition: all .2s;
            background: #03a87c;
            color: #fff !important;
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
            outline: 0 !important;
        }
    }
    .blue {
        color: #35bdff !important;
        border: 1px solid #35bdff;
        &:hover {
            background: #35bdff;
            color: #fff !important;
        }
    }

    .black {
        background:  #212529;
        color: #fff !important;
         border: 1px solid  #212529;
        &:hover {
            background: transparent;
            color:  #212529 !important
        }
    }

    .greenNoBorder {
        border: none;
        &:hover {
            transition: all .2s;
            background: transparent;
            color: #06bb8b !important;
            box-shadow: none;
            outline: none;
        }
    }
</style>