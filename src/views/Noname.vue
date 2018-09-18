<template>
    <section>
      <div class="container">
        <div class="container_box">
          <div>
            <div class="container_content">
              <div class="container_content_left">
                <div class="container_content_left_title">
                  <h1>{{$t('m.vipInformation')}}</h1>
                  <p>{{$t('m.vip_info')}}</p>
                </div>
                <div class="container_content_left_content">
                  <ul>
                    <li v-for="item in vipList">
                      <div>
                        <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                        <img :src="item.cover" alt="">
                        </router-link>
                      </div>
                      <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                      <h1>{{item.title}}</h1>
                      </router-link>
                      <h3>{{item.publishTime}}<span>284</span></h3>
                      <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                      <p>{{item.description}}</p>
                      </router-link>
                      <button>{{$t('m.commit')}}</button>
                    </li>
                  </ul>
                  <div class="pagination" style="margin: 0;width: 100%;margin-top: 30px;height: 60px;position: relative;left: -10px">
                    <el-pagination
                      background
                      layout="prev, pager, next"
                      style="background: white"
                      :page-size="pageSize"
                      :total="count"
                      @current-change="getVipList"
                    >
                    </el-pagination>
                  </div>
                </div>

              </div>
              <SliderRight/>
            </div>
          </div>

        </div>
      </div>
      <FooterNews/>
    </section>
</template>

<script>
  import Tab from '../components/Tab'
  import FooterNews from '../components/FooterNews'
  import SliderRight from '../components/SliderRight'
  import * as apiRequest from '../api/index.js'
  export default {
    name: "noname",
    data(){
      return {
        count:0,
        page:1,
        vipList:[],
        pageSize:8
      }
    },
    mounted(){
      this.getVipList()
    },
    methods:{
      getVipList(page = 1){
        apiRequest.ContentList({
          type:'senior',
          pageSize:this.pageSize,
          page
        }).then(
          data=>{
            if(data.code == 1000){
              this.vipList = data.data
              this.count = data.totalNums
              console.log(this.count)
              console.log('11111111111111')
              this.count = data.totalNums
            }
          }
        )
      },
    },
    components:{
      Tab,
      SliderRight,
      FooterNews
    }
  }
</script>

<style scoped lang="less">
  section{
    background: #f5f5f5 ;
    .container{
      background: #F5F5F5;
      padding-top: 20px;
      .container_box{
        width: 1400px;
        margin: 0 auto;
        .container_content{
          width: 1223px;
          margin: 0 0  0 177px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .container_content_left{
            width: 885px;
            background: white;
            padding: 0 27px;
            .container_content_left_title{
              display: flex;
              flex-direction: row;
              margin: 20px 0 0 0 ;
              h1{
                font-size:21px;
                font-family:NotoSansCJKkr-Bold;
                font-weight:bold;
                color:rgba(0,0,0,1);
              }
              p{
                margin-left: 20px;
                font-size:12px;
                font-family:NotoSansCJKkr-Medium;
                font-weight:500;
                color:rgba(0,0,0,1);
                line-height: 45px;
              }
            }
            .container_content_left_content{
              ul{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                  width: 395px;
                  margin-top: 21px;
                  div{
                    height: 238px;
                    img{
                      width: 100%;
                      height: 100%;
                    }
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
                    font-size:17px;
                    font-family:NotoSansCJKkr-Bold;
                    font-weight:bold;
                    color:rgba(0,0,0,1);
                    margin: 20px 0;
                  }
                  button{
                    width:97px;
                    height:32px;
                    background: black;
                    line-height: 32px;
                    text-align: center;
                    color: white;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    margin-top: 21px;
                  }
                  p{
                    height: 56px;
                    font-size:12px;
                    font-family:NotoSansCJKkr-DemiLight;
                    font-weight:normal;
                    color:rgba(90,90,90,1);
                    line-height:22px;
                    margin-top: 20px;
                  }
                }
              }
            }
          }
          .container_content_right{
            width: 307px;
            height: 300px;
            background: orange;
          }
        }
      }
    }
  }

</style>
