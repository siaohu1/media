<template>
  <div>
    <div class="stimulation_container_left">
      <div class="stimulation_container_left_top" :style="{backgroundImage:'url(' + ad1.cover + ')'}">

      </div>
      <div class="stimulation_container_left_center">
        <div class="stimulation_container_left_center_title">
          <h1>ON INSTAGRAM</h1>
        </div>
        <div class="stimulation_container_left_center_content">
          <div class="stimulation_container_left_center_header">
            <div class="header_img">
              <img :src="ad1.cover" alt="">
            </div>
            <div class="header_msg">
              <h1>@Chainnews</h1>
              <p><span>1.2m</span> followers</p>
            </div>
          </div>
          <div class="user_imgs">
            <ul>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>
              <li>
                <img src="../../static/images/ad_1.png" alt="">
              </li>

            </ul>
          </div>

        </div>
      </div>
      <div class="stimulation_container_left_bottom">
        <div class="soso">
          <div class="soso_text">
            <p>{{$t('m.liansuo')}}</p>
          </div>
          <div class="soso_line"></div>
        </div>
        <div class="soso_icon">
          <div class="icon1"></div>
          <div class="icon2"></div>
          <div class="icon3"></div>
          <div class="icon4"></div>
          <div class="icon5"></div>
          <div class="icon6"></div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import * as apiRequest from '../api/index'
  export default {
      data(){
        return {
          ad1:[]
        }

      },
    mounted(){
        this.getAD()
    },
      methods:{
        getAD(){
          apiRequest.Advert({
            position:1
          }).then(
            data=>{
              this.ad1 = data.data[0]
            }
          )
        },

      }
  }
</script>

<style scoped lang="less">
  .stimulation_container_left{
    width: 300px;
    .stimulation_container_left_top{
      height: 535px;
      background-image: url('../../static/images/ad_1.png');
      background-size: cover;
      cursor: pointer;
    }
    .stimulation_container_left_center{
      height: 429px;
      background: white;
      margin-top: 23px;
      border-top: 3px solid black;
      padding: 0 20px;
      .stimulation_container_left_center_title{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #d5d5d5;
        p{
          font-size:17px;
          font-family:NotoSansCJKkr-Bold;
          color:rgba(0,0,0,1);
        }
      }
      .stimulation_container_left_center_content{
        .stimulation_container_left_center_header{
          height: 90px;
          background: white;
          display: flex;
          flex-direction: row;
          align-items: center;
          .header_img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            img{
              height: 100%;
              width: 100%;
              cursor: pointer;
            }
          }
          .header_msg{
            padding-left: 15px;
            h1{
              font-size:17px;
              font-family:NotoSansCJKkr-Bold;
              color:rgba(0,0,0,1);
            }
            p{
              font-size:14px;
              font-family:NotoSansCJKkr-Bold;
              color:rgba(0,0,0,.6);
              span{
                font-size:14px;
                font-family:NotoSansCJKkr-Bold;
                color:rgba(0,0,0,1);
              }
            }
          }

        }
        .user_imgs{
          width: 260px;
          height: 260px;
          background: white;
          ul{
            width: 260px;
            height: 260px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
            li{
              width: 84px;
              height: 84px;
              background: white;
              align-content:center;
              img{
                width: 100%;
                height: 100%;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .stimulation_container_left_bottom{
      height: 139px;
      background: white;
      margin-top: 27px;
      padding: 20px;
      .soso{
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-direction: row;
        .soso_text{
          width: 120px;
          background: black;
          p{
            font-size:12px;
            font-family:NotoSansCJKkr-Bold;
            color:rgba(245,245,245,1);
            text-align: center;
          }
        }
        .soso_line{
          width: 140px;
          border-bottom: 1px solid #d5d5d5;
        }
      }
      .soso_icon{
        /*width: 366px;*/
        /*height: 40px;*/
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /*margin: 25px auto 0 auto;*/
        div{
          height: 40px;
          width: 40px;
          background: white;
          cursor: pointer;
        }
        .icon1{
          background-image: url("../../static/images/facebook.png");
          background-size: cover;
        }
        .icon2{
          background-image: url("../../static/images/twitter.png");
          background-size: cover;
        }
        .icon3{
          background-image: url("../../static/images/instagram.png");
          background-size: cover;
        }
        .icon4{
          background-image: url("../../static/images/pinter.png");
          background-size: cover;
        }
        .icon5{
          background-image: url("../../static/images/youtube.png");
          background-size: cover;
        }
        .icon6{
          background-image: url("../../static/images/naverblog.png");
          background-size: cover;
        }
      }
    }
  }
</style>
