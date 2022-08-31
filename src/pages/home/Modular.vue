<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import request from '@/service/request.ts';
    import Icon0SVG from '@/assets/svg/icon0.vue';
    import Icon1SVG from '@/assets/svg/icon1.vue';
    import Rainbow from '@/assets/svg/rainbow.vue';
    const list = ref([]);
    onMounted(async () => {
        const data = await request('/new/list', { method: 'GET', mode: 'cors'  });
        list.value = data;
    })
</script>list
    
<template>
    <div class="modular">
        <img class="left" src="https://img0.baidu.com/it/u=2299704842,2935196786&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661965200&t=07e9ae2d8aaaedcac478ba6666acd764"/>
        <div class="right">
            <div class="tab">
                <h4>最新发表</h4>
            </div>

            <div class="list" v-for="(item, index) in list" :key="item.id">
                <img :src="item.url"/>
                <div class="content">
                    <div class="title">
                        <Icon0SVG class="icon" v-if="index % 2 === 0"></Icon0SVG>
                        <Icon1SVG class="icon" v-else></Icon1SVG>
                        <span>{{ item.title }}</span>
                    </div>
                    <div class="desc">{{ item.desc }}</div>
                    <div class="time">{{ item.time }} <Rainbow class="rainbow"/> {{ item.author }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
      
<style lang='less' scoped>
    .modular {
        display: flex;
        justify-content: space-between;
        margin: 2.5rem auto;
        .left {
            width: 30%;
            @media (max-width: 992px) {
                display: none;
            }
        }
        .right {
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            @media (min-width: 992px) {
                width: 65%;
            }
            @media (max-width: 992px) {
                width: 100%;
            }
            .tab {
                width: 100%;
                position: relative;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid #ced4da;
                h4 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #212529;
                }
                &::after {
                    content: '';
                    position: absolute;
                    width: 6.5rem;
                    height: 1px;
                    background-color: #212529;
                    bottom: -1px;
                    left: 0;
                }
            }
            .list {
                width: 100%;
                display: flex;
                justify-content: space-between;
                @media (max-width: 992px) {
                    margin-bottom: 1rem;
                    &:last-child {
                        margin-bottom: 0;
                    }
                }
                img {
                    @media (min-width: 992px) {
                        width: 25%;
                        height: 8rem;
                    }
                    @media (max-width: 992px) {
                       display: none;
                    }
                }
                .content {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    @media (min-width: 992px) {
                        width: 70%;
                    }
                    @media (max-width: 992px) {
                        width: 100%;
                    }
                    .title {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .icon {
                            @media (min-width: 992px) {
                                display: none;
                            }
                            @media (max-width: 992px) {
                                display: block;
                                width: 15%;
                            }
                        }
                        span {
                            font-size: 1.2rem;
                            font-weight: 700;
                            color: #212529;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            @media (max-width: 992px) {
                                width: 88%;
                            }
                        }
                    }
                    .desc {
                        width: 100%;
                        font-size: 1rem;
                        -webkit-line-clamp: 2;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                    }
                    .time{
                        width: 100%;
                        align-self: flex-end;
                        color: #6c757d;
                        display: flex;
                        align-items: center;
                        .rainbow {
                            width: 1.5rem;
                            height: 1.5rem;
                        }
                    }
                }
            } 
        }
    }
</style>