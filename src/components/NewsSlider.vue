<template>
  <div class="main_container_right_slide1">
    <div class="main_container_right_slide1_header">
      <div class="main_container_right_slide1_header_text">
        <p>{{$t('m.hotr')}}</p>
      </div>
      <div class="main_container_right_slide1_header_button"></div>
    </div>
    <ul>
      <li v-for="item in newsList">
        <div class="li_left black">
          <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
          <img :src="item.cover" alt="">
            <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
          </router-link>
        </div>
        <div class="li_right">
          <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
          <h1>{{item.title}}</h1>
          </router-link>
          <p><span><img src="../../static/images/timea.png" alt=""></span>{{item.publishTime.split(' ')[0]}}</p>
        </div>
      </li>
      <!--<li>-->
        <!--<div class="li_left">-->
          <!--<img src="../../static/images/asia3.png" alt="">-->
        <!--</div>-->
        <!--<div class="li_right">-->
          <!--<h1>리플, 마돈나와 말라위 고아 기금 모금 파트너십 체결</h1>-->
          <!--<p><span><img src="../../static/images/timea.png" alt=""></span>March 12,2018</p>-->
        <!--</div>-->
      <!--</li>-->

    </ul>
  </div>
</template>

<script>
  import * as apiRequest from '../api'
  export default {
    name: "news-slider",
    data(){
      return {
        newsList:[]
      }

    },
    mounted(){
      this.getSlideNewsList()
    },
    methods:{
      //侧边新闻列表
      getSlideNewsList(){
        apiRequest.LatestNews({
          language:1,
        }).then(
          data =>{
            if(data.code == 1000){
              this.newsList = data.data
            }else{
              this.$message(data.msg)
            }

          }
        )
      }
    }
  }
</script>

<style scoped lang="less">
  .main_container_right_slide1{
    height: auto;
    padding: 20px;
    background: white;
    margin-top: 65px;
    .main_container_right_slide1_header{
      width: 100%;
      height: 36px;
      display: flex;
      flex-direction: row;
      .main_container_right_slide1_header_text{
        width: 120px;
        height: 36px;
        line-height: 36px;
        background: black;
        p{
          text-align: center;
          font-size:13px;
          font-family:NotoSansCJKkr-Bold;
          color:rgba(255,255,255,1);
        }
      }
      .main_container_right_slide1_header_button{
        width: 140px;
        border-bottom: 2px solid #d5d5d5;
      }

    }
    ul{
      li{
        height: 118px;
        background: white;
        border-bottom: 1px solid #d5d5d5;
        display: flex;
        flex-direction: row;
        padding-top: 20px;
        .li_left{
          width: 109px;
          height: 72px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .li_right{
          width: 151px;
          padding-left: 13px;
          padding-right: 19px;
          position: relative;
          h1{
            height:48px;
            font-size:11px;
            font-family:NotoSansCJKkr-Medium;
            color:rgba(0,0,0,1);
            line-height:18px;
          }
          a{
            text-decoration: none;
            height:48px;
            font-size:11px;
            font-family:NotoSansCJKkr-Medium;
            color:rgba(0,0,0,1);
            line-height:18px;
          }
          p{
            font-size: 12px;
            color: #d8d8d8;
            position: absolute;
            bottom: 22px;
            span{
              img{
                margin-right: 2px;
              }
            }
          }

        }
      }
      li:last-of-type{
        border: none;
      }
    }
  }
  .black{
    position: relative;
  }
  .black:hover div{

    background: rgba(0,0,0,0.5);
  }
</style>












