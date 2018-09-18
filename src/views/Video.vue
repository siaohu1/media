<template>
  <section>
    <div class="stimulation_container">
      <SliderLeft/>
      <div class="stimulation_container_center">
        <div class="center_header">
          <div class="center_header_title">
            <h1>{{$t('m.video')}}</h1>
          </div>
          <div class="center_header_search">
            <!--<ul>-->
              <!--<li>모두보기</li>-->
              <!--<li>코인</li>-->
              <!--<li>ICO</li>-->
              <!--<li>거래소</li>-->
            <!--</ul>-->
          </div>
        </div>
        <div class="center_container">
          <ul>
            <li v-for="item in videoList">
              <div class="li_left">
                <a :href="item.url">
                  <img :src="item.cover" alt="">
                </a>
                  <div></div>
              </div>
              <div class="li_right">
                <div>ICO</div>
                <h1>{{item.title}}</h1>
                <h3>{{item.publishTime}}<span>{{item.clicks}}</span></h3>
                <p>{{item.description}}</p>
              </div>
            </li>

          </ul>
          <div class="pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="pageSize"
              :total="count"
              @current-change="getVideoList"
              style="background: white"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <SliderRight/>
    </div>
    <FooterNews/>
  </section>
</template>
<script>
  import SliderLeft from '../components/SliderLeft'
  import NewsSlide from '../components/NewsSlider'
  import FooterNews from '../components/FooterNews'
  import SliderRight from '../components/SliderRight'
  import * as apiRequest from '../api/index'
  export default {
    data() {
      return {
        videoList:[],
        count:0,
        page:1,
        pageSize:8
      }
    },
    mounted(){
      this.getVideoList()
    },
    methods: {
      getVideoList(page = 1){
        apiRequest.ContentList({
          type:'video',
          pageSize:this.pageSize,
          page
        }).then(
          data=>{
            this.videoList = data.data
            console.log(data)
            this.count = data.totalNums
          }
        )
      }
    },
    computed: {},
    components:{
      SliderLeft,
      NewsSlide,
      FooterNews,
      SliderRight
    },
  }
</script>
<style scoped lang="less">
  section{
    background: #F5F5F5;
    .stimulation_container{
      width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      padding-top: 20px;
      justify-content: space-between;
    }
  }

  .stimulation_container_center{
    width: 760px;
    /*height: 2197px;*/
    background: white;
    padding: 21px;
    .center_header{
      height: 42px;
      line-height: 42px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .center_header_title{
        h1{
          font-size:21px;
          font-family:NotoSansCJKkr-Bold;
          color:rgba(0,0,0,1);
          /*line-height:33px;*/
        }
      }
      .center_header_search{
        ul{
          display: flex;
          flex-direction: row;
          li{
            margin-left: 15px;
            font-size: 12px;
            line-height: 50px;
            cursor: pointer;
          }
        }
      }
    }
    .center_container{
      ul{
        li{
          width: 720px;
          height: 259px;
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;
          .li_left{
            width: 359px;
            background: white;
            cursor: pointer;
            position: relative;
            div{
              width: 44px;
              height: 44px;
              background: black;
              position: absolute;
              top: 50%;
              left: 50%;
              margin-left: -22px;
              margin-top: -22px;
              background: url("../../static/images/play.png");
            }
            img{
              height: 100%;
              width: 100%;
            }
          }
          .li_right{
            width: 359px;
            background: white;
            padding: 32px;
            border: 1px solid #d5d5d5;
            border-left: none;
            div{
              width:48px;
              height:16px;
              line-height: 16px;
              text-align: center;
              background: black;
              font-size:9px;
              font-family:NotoSansCJKkr-Light;
              color:rgba(255,255,255,1);
            }
            h3{
              background: url("../../static/images/timea.png") no-repeat 3px;
              text-indent: 15px;
              font-size: 12px;
              font-family:NotoSansCJKkr-Light;
              color: #ccc;
              span{
                margin-left: 10px;
              }
            }
            h1{
              font-size:15px;
              font-family:NotoSansCJKkr-Bold;
              color:rgba(0,0,0,1);
              line-height:23px;
              margin: 10px 0;
              cursor: pointer;
            }
            p{
              height:72px;
              font-size:12px;
              font-family:NotoSansCJKkr-DemiLight;
              color:rgba(90,90,90,1);
              line-height:20px;
              margin-top: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .stimulation_container_right{
    width: 300px;
    .stimulation_container_right_top{
      height: 318px;
      background: white;
      .main_container_right_slide1{
        padding: 20px;
        background: white;
        margin-top: 29px;
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
      }
      ul{
        padding: 0 20px;
        overflow: auto;
        height: 240px;
        li{
          border-left: 1px solid #E9E9E9;
          padding: 5px 10px 0 10px;
          height: 83px;
          position: relative;
          p{
            background-image: url("../../static/images/highzhong.png");
            background-repeat: no-repeat;
            text-indent: 15px;
            font-size: 12px;
            color: #696376;
          }
          h1{
            font-size:12px;
            font-family:NotoSansCJKkr-Medium;
            font-weight:500;
            color:rgba(25,25,25,1);
            line-height:16px;
            margin-top: 5px;
          }
          div{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #999999;
            position: absolute;
            top: 6px;
            left: -6px;
          }

        }
        li:first-of-type div{
          background: #000fd7;
        }
      }

    }
    .stimulation_container_right_center{
      height: 796px;
      background: #000fd7;
      margin-top: 29px;
    }
    .stimulation_container_right_bottom{
      /*height: 381px;*/
      /*background: #000fd7;*/
      margin-top: 28px;
    }
  }

</style>
