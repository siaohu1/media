<template>
  <section>
    <div class="stimulation_container">
      <SliderLeft/>
      <div class="stimulation_container_center">
        <div class="center_header">
          <h1>{{$t('m.one1')}}</h1>
          <p>{{$t('m.one2')}}

            {{$t('m.one3')}}</p>
          <section>
            <div class="c1">
              {{$t('m.all')}}
            </div>
            <div class="c2">
              <div class="c2_left">
                <img src="../../static/images/tong.png" alt="">
              </div>
              <div class="c2_right">
                <h1>{{$t('m.all1')}}</h1>
              </div>
            </div>
            <div class="c3">
              <div class="c3_left">
                <img src="../../static/images/lingxing.png" alt="">
              </div>
              <div class="c3_right">
                <h1>{{$t('m.all2')}}</h1>
              </div>
            </div>
            <div class="c4">
              <div class="c4_left">
                <img src="../../static/images/btb.png" alt="">
              </div>
              <div class="c4_right">
                <h1>{{$t('m.all3')}}</h1>
              </div>
            </div>
          </section>
        </div>
        <div class="center_container">
          <ul>
            <li v-for="item in blockLists">
              <div class="li_left">
                <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img :src="item.cover" alt="">
                </router-link>
              </div>

              <div class="li_right">
                <div>ICO</div>
                <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                <h1>{{item.title}}</h1>
                </router-link>
                <h3>{{item.publishTime}} <span>{{item.clicks
}}</span></h3>
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
              @current-change="getBlockList"
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
  import FooterNews from '../components/FooterNews'
  import Tab from '../components/Tab'
  import SliderRight from '../components/SliderRight'
  import * as apiRequest from '../api/index'

  export default {
    data() {
      return {
        blockLists:[],
        count:0,
        page:1,
        pageSize:8
      }
    },
    mounted(){
      this.getBlockList()
    },
    methods: {
      getBlockList(page = 1){
        apiRequest.ContentList({
          type:'chain101',
          pageSize:this.pageSize,
          page,
        }).then(
          data=>{
            this.blockLists = data.data
            this.count = data.totalNums
          }
        )
      }
    },
    computed: {},
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
      margin-bottom: 17px;
      h1{
        font-size:21px;
        font-family:NotoSansCJKkr-Bold;
        font-weight:bold;
        color:rgba(0,0,0,1);
      }
      p{
        font-size:13px;
        font-family:NotoSansCJKkr-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        line-height:18px;
        width: 635px;
        margin-top: 25px;
        margin-bottom: 50px;
      }
      section{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: white;
        .c1{
          height: 75px;
          line-height: 75px;
          width: 58px;
          border: 1px solid #7BCDAD;
          font-size:11px;
          font-family:NotoSansCJKkr-Medium;
          font-weight:500;
          color:rgba(24,205,163,1);
          text-align: center;
        }
        .c2{
          height: 73px;
          line-height: 73px;
          width: 213px;
          border: 1px solid #7BCDAD;
          background: #E2F6F0;
          display: flex;
          flex-direction: row;
          align-items: center;
          .c2_left{
            width: 36px;
            height: 44px;
            margin: 0 20px 0 31px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .c2_right{
            h1{
              font-size:20px;
              font-family:NotoSansCJKkr-Medium;
              font-weight:500;
              color:rgba(24,205,163,1);
            }
          }
        }
        .c3{
          width: 215px;
          height: 75px;
          border: 1px solid #7BCDAD;
          display: flex;
          flex-direction: row;
          align-items: center;
          .c3_left{
            width: 50px;
            height: 53px;
            margin: 0 20px 0 31px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .c3_right{
            h1{
              font-size:20px;
              font-family:NotoSansCJKkr-Medium;
              font-weight:500;
              color:rgba(24,205,163,1);
            }
          }
        }
        .c4{
          width: 215px;
          height: 75px;
          border: 1px solid #7BCDAD;
          display: flex;
          flex-direction: row;
          align-items: center;
          .c4_left{
            width: 53px;
            height: 58px;
            margin: 0 20px 0 31px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .c4_right{
            h1{
              font-size:20px;
              font-family:NotoSansCJKkr-Medium;
              font-weight:500;
              color:rgba(24,205,163,1);
            }
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
