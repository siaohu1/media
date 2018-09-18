<template>
  <section class="footer_add">
    <div class="footer_add_container">
      <div class="footer_add_item">
        <div class="footer_add_title">
          <p>{{$t('m.policy')}}</p>
        </div>
        <div class="footer_add_content">
          <ul>
            <li v-for="item in news1">
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
                <p><span><img src="../../static/images/time_black.png" alt=""></span>
                  {{item.publishTime.split(' ')[0]}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer_add_item">
        <div class="footer_add_title">
          <p>{{$t('m.research')}}</p>
        </div>
        <div class="footer_add_content">
          <ul>
            <li v-for="item in news2">
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
                <p><span><img src="../../static/images/time_black.png" alt=""></span>{{item.publishTime.split(' ')[0]}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer_add_item">
        <div class="footer_add_title">
          <p>{{$t('m.character')}}</p>
        </div>
        <div class="footer_add_content">
          <ul>
            <li v-for="item in news3">
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
                <p><span><img src="../../static/images/time_black.png" alt=""></span>{{item.publishTime.split(' ')[0]}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer_add_item">
        <div class="footer_add_title">
          <p>{{$t('m.technology')}}</p>
        </div>
        <div class="footer_add_content">
          <ul>
            <li v-for="item in news4">
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
                <p><span><img src="../../static/images/time_black.png" alt=""></span>{{item.publishTime.split(' ')[0]}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  import * as apiRequest from '../api/index'
  export default {
    name: "footer-news",
    data(){
      return {
        news1:[],
        news2:[],
        news3:[],
        news4:[]
      }
    },
    methods:{
      //政策新闻
      getNew1(){
        apiRequest.ContentList({
          type:'policy',
        }).then(
          data=>{
            this.news1 = data.data
          }
        )
      },
      //研究
      getNew2(){
        apiRequest.ContentList({
          type:'research',
        }).then(
          data=>{
            this.news2 = data.data
          }
        )
      },
      //人物
      getNew3(){
        apiRequest.ContentList({
          type:'character',
        }).then(
          data=>{
            this.news3 = data.data
          }
        )
      },
      //科技
      getNew4(){
        apiRequest.ContentList({
          type:'technology',
        }).then(
          data=>{
            this.news4 = data.data
          }
        )
      }
    },
    mounted(){
      this.getNew1()
      this.getNew2()
      this.getNew3()
      this.getNew4()
    }
  }
</script>

<style scoped lang="less">
  .footer_add{
    margin-top: 40px;
    /*height: 456px;*/
    background: black;
    padding-top: 48px;
    .footer_add_container{
      width: 1400px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .footer_add_item{
        width: 320px;
        .footer_add_title{
          height: 35px;
          line-height: 35px;
          p{
            font-size:12px;
            font-family:NotoSansCJKkr-Bold;
            color:rgba(255,255,255,1);
            border-bottom: 2px solid #313131;
          }
        }
        .footer_add_content{
          ul{
            li:last-of-type{
              border-bottom: none;
            }
            li{
              height: 113px;
              display: flex;
              flex-direction: row;
              padding-top: 20px;
              border-bottom: 1px solid #212121;
              .li_left{
                width: 109px;
                height: 72px;
                img{
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                }
              }
              .li_right{
                width: 216px;
                padding-left: 10px;
                h1{
                  font-size:11px;
                  font-family:NotoSansCJKkr-Medium;
                  color:rgba(245,245,245,1);
                  line-height:18px;
                  cursor: pointer;
                  height: 36px;
                }
                p{
                  font-size: 12px;
                  color: #d8d8d8;
                  position: relative;
                  top: 18px;
                  height: 34px;
                  margin-top: 10px;
                  cursor: pointer;
                  span{
                    img{
                      margin-right: 2px;
                    }
                  }
                }
              }
            }
          }
        }
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
