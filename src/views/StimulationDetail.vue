<template>
  <section>
    <div class="stimulation_container">
      <SliderLeft/>
      <div class="stimulation_container_center">
        <div class="stimulation_container_center_banner">
          <img :src="NewsDetailInfo.content.cover" alt="">
        </div>
        <div class="stimulation_container_center_cover">
          <h3>{{NewsDetailInfo.content.tags}}</h3>
          <h1>{{NewsDetailInfo.content.title}}</h1>
          <h4>{{NewsDetailInfo.content.publishTime}}</h4>
          <div v-html="NewsDetailInfo.content.text" style="width: 718px;">

          </div>
        </div>
        <div class="bottom_za">
          <div class="d2" style="display: flex;flex-direction: row;justify-content: space-between;padding: 20px">
            <div>
              <p style="font-size:9px;
font-family:NotoSansCJKkr-Bold;
font-weight:bold;
color:rgba(115,115,115,1);
line-height:21px;">< {{$t('m.up')}}</p>
              <router-link :to="`/StimulationDetail?id=${NewsDetailInfo.previous.categoryId}&&id1=${NewsDetailInfo.previous.id}`" target='_blank'>
              <h1 style="font-size:14px;
font-family:NotoSansCJKkr-Bold;
font-weight:bold;
color:rgba(0,0,0,1);
line-height:24px;width: 298px">{{NewsDetailInfo.previous.title}}</h1>
              </router-link>
              <h1 style="font-size:14px;
font-family:NotoSansCJKkr-Bold;
font-weight:bold;
color:rgba(0,0,0,1);
line-height:24px;" v-show="JSON.stringify(NewsDetailInfo.previous)=='{}'">{{$t('m.nodata')}}</h1>
            </div>
            <div>
              <p style="font-size:9px;
font-family:NotoSansCJKkr-Bold;
font-weight:bold;
color:rgba(115,115,115,1);
line-height:21px;text-align: right">{{$t('m.down')}} ></p>
              <router-link :to="`/StimulationDetail?id=${NewsDetailInfo.next.categoryId}&&id1=${NewsDetailInfo.next.id}`" target='_blank'>
              <h1 style="font-size:14px;
font-family:NotoSansCJKkr-Bold;
font-weight:bold;
color:rgba(0,0,0,1);
line-height:24px;">{{NewsDetailInfo.next.title}}</h1>
              </router-link>
              <h1 style="font-size:14px;
font-family:NotoSansCJKkr-Bold;
font-weight:bold;
color:rgba(0,0,0,1);
line-height:24px;" v-show="JSON.stringify(NewsDetailInfo.next)=='{}'">{{$t('m.nodata')}}</h1>
            </div>


          </div>
          <div class="d3">
            <h1>{{$t('m.connect')}}</h1>
            <ul>
              <li v-for="list in NewsDetailInfo.relevant.slice(0,3)">
                <div>
                  <router-link :to="`/StimulationDetail?id=${list.categoryId}&&id1=${list.id}`" target='_blank' style="text-decoration: none">
                  <img :src="list.cover" alt="">
                  </router-link>
                </div>
                <router-link :to="`/StimulationDetail?id=${list.categoryId}&&id1=${list.id}`" target='_blank' style="text-decoration: none">
                <p style="cursor: pointer">{{list.title}}</p>
                </router-link>
              </li>
              <!--<li>-->
                <!--<div>-->
                  <!--<img src="../../static/images/ad_1.png" alt="">-->
                <!--</div>-->
                <!--<p>모건스탠리, 디지털자산시장 대표 영입… 암호화폐 투자 참여의 뜻 나타내</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<div>-->
                  <!--<img src="../../static/images/ad_1.png" alt="">-->
                <!--</div>-->
                <!--<p>모건스탠리, 디지털자산시장 대표 영입… 암호화폐 투자 참여의 뜻 나타내</p>-->
              <!--</li>-->
            </ul>
          </div>
          <div class="d4" :style="{backgroundImage:'url(' + ad2.cover + ')'}"></div>
        </div>
      </div>
      <SliderRight/>
    </div>
    <FooterNews/>
  </section>
</template>
<script>
  import SliderLeft from '../components/SliderLeft'
  import SliderRight from '../components/SliderRight'
  import FooterNews from '../components/FooterNews'
  import Tab from '../components/Tab'
  import * as apiRequest from '../api/index'

  export default {
    data() {
      return {
        NewsDetailInfo:[],
        ad2:[]
      }
    },
    mounted(){
      this.getNewsDetail()
      this.getAD1();
    },
    methods: {
      getAD1(){
        apiRequest.Advert({
          position:2
        }).then(
          data=>{
            this.ad2 = data.data[0]
          }
        )
      },
      getNewsDetail(contentId= this.$route.query.id1,categoryId = this.$route.query.id){
        apiRequest.CcontentDetail({
          contentId,
          categoryId
        }).then(
          data=>{
            console.log(data)
            this.NewsDetailInfo = data.data[0]
            console.log(this.NewsDetailInfo.title)
          }
        )
      }},
    computed: {

    },
    components:{
      SliderLeft,
      SliderRight,
      FooterNews,
      Tab
    },
  }
</script>
<style scoped lang="less">
  section{
    background: #F5F5F5;
    min-height: 500px;
    .stimulation_container{
      width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      padding-top: 20px;
      justify-content: space-between;
      min-height: 500px;
    }
  }

  .stimulation_container_center{
    width: 760px;
    /*height: 2197px;*/
    background: white;
    /*min-height: 600px;*/
    min-height: 500px;
    .stimulation_container_center_banner{
      height: 507px;
      img{
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
    }
    .stimulation_container_center_cover{
      padding: 21px;
      h3{
        width:48px;
        height:16px;
        background: black;
        font-size:10px;
        font-family:NotoSansCJKkr-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height: 16px;
        text-align: center;
      }
      h1{
        font-size:24px;
        font-family:NotoSansCJKkr-Bold;
        font-weight:bold;
        color:rgba(12,21,30,1);
        margin: 20px 0;
      }
      h4{
        font-family:NotoSansCJKkr-Regular;
        font-size: 12px;
        color: #999999;
        margin-bottom: 30px;
      }
      div{
        /*font-size:15px;*/
        /*font-family:NotoSansCJKkr-Regular;*/
        /*font-weight:400;*/
        /*color:rgba(0,0,0,1);*/
        line-height:30px;
        /*overflow: auto;*/
        /*margin-top: 33px;*/
        width: 718px!important;
        height: auto;
          p{
            /*width: 100% !important;*/
            /*!*overflow: hidden;*!*/
            color: yellow!important;
          }
        .stimulation_container_center .stimulation_container_center_cover div[data-v-365e05e0]{
          width: 718px!important;
        }
      }
    }
    .bottom_za{
      .d1{
        height: 56px;
        background: skyblue;
        margin-top: 92px;
      }
      .d2{
        height: 132px;
        /*background: orange;*/
        border-bottom: 1px solid #F2F2F2;
        margin: 14px 0 18px 0;
      }
      .d3{
        height: 210px;
        padding: 0 21px;
        h1{
          font-size:11px;
          font-family:NotoSansCJKkr-Bold;
          font-weight:bold;
          color:rgba(0,0,0,1);
          line-height:24px;
          margin-bottom: 20px;
        }
        ul{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          li{
            width: 226px;
            div{
              width: 226px;
              height: 151px;
              img{
                width: 100%;
                height: 100%;
                cursor: pointer;
              }
            }
            p{
              font-size:13px;
              font-family:NotoSansCJKkr-Bold;
              font-weight:bold;
              color:rgba(0,0,0,1);
              line-height:20px;
              margin-top: 21px;
            }
          }
        }
      }
      .d4{
        height: 90px;
        background: url("../../static/images/hengad.png");
        margin-top: 70px;
        margin-bottom: 20px;
      }
    }
  }
  .stimulation_container_right{
    width: 300px;
    .stimulation_container_right_top{
      height: 318px;
      background: #000fd7;
    }
    .stimulation_container_right_center{
      height: 796px;
      background: #000fd7;
      margin-top: 29px;
    }
    .stimulation_container_right_bottom{
      height: 381px;
      background: #000fd7;
      margin-top: 28px;
    }
  }
</style>
