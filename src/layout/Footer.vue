<script setup lang="ts">

</script>

<template>
    <div class="footer">
        <span>
            <span class="boldD">yujinhongMM</span>
            © 2022
        </span>
        <span class="right">
            作者： 
            <span class="boldP">yujinhongMM</span>
        </span>
    </div>
</template>

<style lang='less' scoped>
    .footer {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        padding: 1.2rem 0;
        color: #ced4da;
        border-top: 1px solid #ced4da;
        @media (min-width: @screen-width) {
            width: 90%;
            left: 5%;
            font-size: 1rem;
        }
        @media (max-width: @screen-width) {
            width: 95%;
            left: 2.5%;
            font-size: 0.5rem;
        }
        .right {
            text-align: right;
        }
        .boldD {
            color: #212529;
            font-weight: bold;
            @media (min-width: @screen-width) {
                font-size: 2rem;
            }
            @media (max-width: @screen-width) {
                font-size: 1rem;
            }
        }
        .boldP {
            color: #7832e2;
        }
    }
</style>