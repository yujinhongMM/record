<script setup lang="ts">
    import { ref, onMounted, Ref, watch } from 'vue';
    import route from '@/router/index.ts';
    import Icon0SVG from '@/assets/svg/icon0.vue';
    import Icon1SVG from '@/assets/svg/icon1.vue';
    import Rainbow from '@/assets/svg/rainbow.vue';
    import request from '@/service/request.ts';
    import { ArticleInter } from '@/data/constant';
    const list: Ref<ArticleInter[]> = ref([]);

    onMounted(() => {
        const { type } = route.currentRoute.value.params;
        getList(type)
    })
  
    watch(() => route.currentRoute.value.params.type, (type) => {
        getList(type);
    })
   

    const getList = async (type: number) => {
        const data = await request(`/list?type=${type}`, { method: 'GET', mode: 'cors'  });
        list.value = data;
    }
</script>

<template>
   <div class="list">
        <div class="item" v-for="(item, index) in list" :key="item.id">
            <div class="img">
                <img :src="item.url"/>
            </div>
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
</template>
  
<style lang='less' scoped>
    .list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            width: 48%;
            height: 8rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            &:nth-child(odd){
                animation: bounceInLeft 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
            }
            &:nth-child(even){
                animation: bounceInRight 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
            }
            @media (max-width: @screen-width) {
                width: 100%;
            }
            .img {
                width: 10rem;
                height: 8rem;
                background-color: rgb(194, 69, 69);
                position: relative;
                margin-right: 1rem;
                background-color: rgba(6, 41, 29, 0.985);
                @media (max-width: @screen-width) {
                    width: 8rem;
                }
                img {
                    position:absolute;
                    height: 100%;
                    width: 100%;
                    // object-fit: cover;
                    // clip:rect(0px 14rem 8rem 0px);
                }
            }
            .content {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                flex: 1;
                overflow: hidden;
                .title {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    .icon {
                        display: block;
                        width: 10%;
                    }
                    span {
                        width: 90%;
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: #212529;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
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
</style>