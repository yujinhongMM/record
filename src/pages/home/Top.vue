<script setup lang="ts">
    import { inject } from 'vue';
    import Button from '@/components/Button.vue';
    import { langKey } from '@/data/symbol';
    const langValue = inject<object>(langKey);
</script>

<template>
    <div class="content">
        <div class="left">
            <span class="title">
                yujinhongMM的博客
            </span>
            <span class="abstract">
                用于记录英语学习，各种前端技术学习的私人博客
            </span>
            <Button className="button" type="black">{{ langValue?.['button.learnMore'] }}</Button>
        </div>
        <img class="right" src="https://img1.baidu.com/it/u=3671171695,655325715&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661878800&t=9e39c2af51b01c846836724131820027"/>
    </div>
</template>
  
<style lang='less' scoped>
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e8f3ec;
        animation: bounceInLeft 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
        .left {
            padding: 0 4% 0 8%;
            .title {
                display: block;
                font-weight: 700;
                margin-bottom: 1rem;
                font-size: 2rem
            }
            .button {
                margin-top: 2rem;
                width: 5rem;
            }
        }
        .right {
            max-width: 50%;
        }
    }

    @keyframes bounceInLeft {
		0% {
			opacity: 0;
			transform: translate3d(-3000px, 0, 0);
		}

		60% {
			opacity: 1;
			transform: translate3d(25px, 0, 0);
		}

		75% {
			transform: translate3d(-10px, 0, 0);
		}

		90% {
			transform: translate3d(5px, 0, 0);
		}

		100% {
			transform: none;
		}
    }
</style>