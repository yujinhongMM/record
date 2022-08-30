<script setup lang="ts">
 
</script>
    
<template>
    <div class="modular">
        <img class="left" src="https://img0.baidu.com/it/u=2299704842,2935196786&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1661965200&t=07e9ae2d8aaaedcac478ba6666acd764"/>
        <div class="right">
            <div class="tab">
                <h4>最新发表</h4>
            </div>
            <div class="list">
                <img src="https://pic4.zhimg.com/80/v2-ea948333468d3dd9b692acf6a9b8c3ef_1440w.jpg"/>
                <div class="content">
                    <div class="title">Nasa's IceSat space laser makes height maps of Earth</div>
                    <div class="desc">Jake Bittle in LOVE/HATE</div>
                    <div class="time">Dec 12 · 5 min read</div>
                </div>
            </div>
            <div class="list">
                <img src="https://pic4.zhimg.com/80/v2-ea948333468d3dd9b692acf6a9b8c3ef_1440w.jpg"/>
                <div class="content">
                    <div>Nasa's IceSat space laser makes height maps of Earth</div>
                    <div>Jake Bittle in LOVE/HATE</div>
                    <div>Dec 12 · 5 min read</div>
                </div>
            </div>
            <div class="list">
                <img src="https://pic4.zhimg.com/80/v2-ea948333468d3dd9b692acf6a9b8c3ef_1440w.jpg"/>
                <div class="content">
                    <div>Nasa's IceSat space laser makes height maps of Earth</div>
                    <div>Jake Bittle in LOVE/HATE</div>
                    <div>Dec 12 · 5 min read</div>
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
        animation: bounceInLeft 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 alternate forwards;
        .left {
            height: 30rem;
        }
        .right {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            padding-left: 5%;
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
                display: flex;
                img {
                    width: 12rem;
                    height: 8rem;
                    margin-right: 2rem;
                }
                .content {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                    .title {
                        width: 100%;
                        font-size: 1.2rem;
                        font-weight: 700;
                        color: #212529;
                    }
                    .desc {
                        width: 100%;
                        font-size: 1rem;
                    }
                    .time{
                        align-self: flex-end;
                        color: #6c757d;
                    }
                }
            } 
        }
    }
</style>