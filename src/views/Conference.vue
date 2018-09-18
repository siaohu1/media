<template>
  <section>
    <div class="conference_box">
      <div class="conference_container">
        <div class="conference_container_swiper">
          <el-carousel indicator-position="outside" style="height: 540px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <!--<img src="../../static/images/mainslider.png" alt="">-->
              <img :src='item.cover' alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="conference_container_video">
          <div class="conference_container_tab">
            <h1>{{$t('m.area')}}</h1>
            <!--<ul>-->
              <!--<li>지역지역</li>-->
              <!--<li>지역</li>-->
              <!--<li>지역</li>-->
              <!--<li>지역</li>-->
              <!--<li>지역</li>-->
              <!--<li>지역</li>-->
              <!--<li>지역역</li>-->
            <!--</ul>-->
          </div>
          <div class="conference_container_content">
            <ul>
              <li v-for="item in meetingsList">
                <div class="li_top">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                  <img :src="item.cover" alt="">
                  </router-link>
                </div>
                <div class="li_bottom">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                  <h1>{{item.title}}</h1>
                  </router-link>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                  <p>{{item.description}}</p>
                  </router-link>
                </div>
              </li>

            </ul>
          </div>
          <div class="conference_container_button">
            <div style="cursor:pointer;">{{$t('m.see_more')}}</div>
          </div>
        </div>
      </div>
    </div>
    <FooterNews/>
  </section>
</template>
<script>
  import * as apiRequest from '../api/index'
  import FooterNews from '../components/FooterNews'
  export default {
    name: "conference",
    data(){
      return{
        imgList:[],
        meetingsList:[]
      }
    },
    mounted(){
      this.getBanners();
      this.getMettingList();
    },
    methods:{
      getBanners(){
        apiRequest.ContentList({
          type:'banner'
        }).then(
          data=>{
            this.imgList = data.data
            console.log(this.imgList)
            console.log('11111111111111112222222222')
          }
        )
      },
      getMettingList(){
        apiRequest.ContentList({
          type:'activity'
        }).then(
          data=>{
            this.meetingsList = data.data
          }
        )
      }
    },
    components:{
      FooterNews
    }
  }
</script>
<style scoped lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  section{
    background: #F5F5F5;
  }
  .conference_box{
    width: 1400px;
    margin: 0 auto;
    .conference_container{
      width: 1267px;
      margin: 0 auto;
      .conference_container_swiper{
        height: 535px;
      }
      .conference_container_video{
        height: auto;
        background: white;
        padding: 0 30px;
        .conference_container_tab{
          height: 50px;
          line-height: 50px;
          background: white;
          display: flex;
          flex-direction: row;
          border: 1px solid rgba(220,220,220,1);
          border-left: none;
          border-right: none;
          h1{
            font-size:15px;
            font-family:NotoSansCJKkr-DemiLight;
            color:rgba(37,37,37,1);
            text-indent: 25px;
          }
          ul{
            display: flex;
            flex-direction: row;
            margin-left: 50px;
            li{
              font-size:15px;
              font-family:NotoSansCJKkr-DemiLight;
              color:rgba(37,37,37,1);
              margin-right: 35px;
              cursor: pointer;
            }
          }
        }

      }
      .conference_container_content{
        margin-top: 37px;
        ul{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          li{
            width: 387px;
            margin-bottom: 90px;
            .li_top{
              height: 236px;
              img{
                height: 100%;
                width: 100%;
              }
            }
            .li_bottom{
              text-align: center;
              h1{
                font-size:20px;
                font-family:NotoSansCJKkr-Medium;
                font-weight:500;
                color:rgba(3,3,3,1);
                margin: 23px 0 10px 0;
              }
              p{
                font-size:15px;
                font-family:NotoSansCJKkr-Medium;
                font-weight:500;
                color:rgba(3,3,3,1);
              }
            }
          }
          li:nth-child(7),li:nth-child(8),li:nth-child(9){
            margin-bottom: 0;
          }
        }
      }
      .conference_container_button{
        height: 80px;
        background: white;
        margin-top: 20px;
        border-top: 1px solid rgba(220,220,220,1);
        display: flex;
        align-items: center;
        justify-content: center;
        div{
          width:207px;
          height:32px;
          background: black;
          font-size:12px;
          font-family:NotoSansCJKkr-Bold;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height: 32px;
          text-align: center;
        }
      }
    }
  }
</style>

