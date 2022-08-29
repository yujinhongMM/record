<script setup lang="ts">
    const props = defineProps<{
        content?: string
        type?: string
        className?: string
    }>()
    const classContent = `button ${props.type} ${props.className}`;
</script>

<template>
  <a :class="classContent">
    <slot></slot>
  </a>
</template>
  
<style lang='less' scoped>
    .button {
        display: block;
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
        &:hover {
            background: transparent;
            color:  #212529 !important;
            border: 1px solid  #212529;
        }
    }
</style>