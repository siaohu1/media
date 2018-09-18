<template>
  <div class="main_container_right_slide2">
    <div class="main_container_right_slide2_top">
      <div class="title">
        <div class="title_left">
          <p>{{$t('m.weather')}}</p>
        </div>
        <div class="title_right"></div>
      </div>
      <div class="position">
        <h1>서울</h1>
        <p>맑음</p>
      </div>
    </div>
    <div class="main_container_right_slide2_center">
      <div class="content">
        <div class="content1">
          <div>
            <img src="../../static/images/shui.png" alt="">
          </div>
          <p>87%</p>
        </div>
        <div class="content2">
          <div>
            <img src="../../static/images/gui.png" alt="">
          </div>
          <p>1.5km/h</p>
        </div>
        <div class="content3">
          <div>
            <img src="../../static/images/yun.png" alt="">
          </div>
          <p>8%</p>
        </div>
      </div>
    </div>
    <div class="main_container_right_slide2_bottom">
      <div class="d1">
        <div class="d1_left">
          <div>
            <img src="../../static/images/windy.png" alt="">
          </div>
        </div>
        <div class="d1_center">14˚C</div>
        <div class="d1_right">
          <div class="right_top">
            <div>
              <img src="../../static/images/tttp.png" alt="">
            </div>
            <span>
                    22˚C
                    </span>
          </div>
          <div class="right_bottom">
            <div>
              <img src="../../static/images/bbbm.png" alt="">
            </div>
            <span>
                      8˚C
                    </span>
          </div>
        </div>
      </div>
      <div class="d2">
        <ul>
          <li>
            <h1>26˚</h1>
            <p>THU</p>
          </li>
          <li>
            <h1>26˚</h1>
            <p>THU</p>
          </li>
          <li>
            <h1>26˚</h1>
            <p>THU</p>
          </li>
          <li>
            <h1>26˚</h1>
            <p>THU</p>
          </li>
          <li>
            <h1>26˚</h1>
            <p>THU</p>
          </li>
        </ul>
      </div>
    </div>
    <!--<div class="icon sunny">-->
    <!--<div class="sun">-->
    <!--<div class="rays"></div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="icon rainy">-->
    <!--<div class="cloud"></div>-->
    <!--<div class="rain"></div>-->
    <!--</div>-->

    <!--<div class="icon cloudy">-->
    <!--<div class="cloud"></div>-->
    <!--<div class="cloud"></div>-->
    <!--</div>-->

    <!--<div class="icon flurries">-->
    <!--<div class="cloud"></div>-->
    <!--<div class="snow">-->
    <!--<div class="flake"></div>-->
    <!--<div class="flake"></div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="icon thunder-storm">-->
    <!--<div class="cloud"></div>-->
    <!--<div class="lightning">-->
    <!--<div class="bolt"></div>-->
    <!--<div class="bolt"></div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="icon sun-shower">-->
    <!--<div class="cloud"></div>-->
    <!--<div class="sun">-->
    <!--<div class="rays"></div>-->
    <!--</div>-->
    <!--<div class="rain"></div>-->
    <!--</div>-->
    <div class="main_container_right_slide2_header"></div>
  </div>
</template>

<script>
  export default {
    name: "weather"
  }
</script>

<style scoped lang="less">
  .main_container_right_slide2{
    height: 381px;
    background: white;
    margin-top: 24px;
    position: relative;
    .main_container_right_slide2_top{
      padding: 20px 20px 0 20px;
      .title{
        display: flex;
        flex-direction: row;
        .title_left{
          width: 120px;
          height: 36px;
          line-height: 36px;
          background: #4577A4;
          p{
            font-size:13px;
            font-family:NotoSansCJKkr-Bold;
            font-weight:bold;
            color:rgba(255,255,255,1);
            text-align: center;
          }
        }
        .title_right{
          width: 140px;
          border-bottom: 2px solid #d5d5d5;
        }
      }
      .position{
        h1{
          font-size:19px;
          font-family:NotoSansCJKkr-Black;
          font-weight:900;
          color:rgba(31,31,31,1);
          margin: 20px 0 12px 0;
        }
        p{
          font-size:13px;
          font-family:NotoSansCJKkr-DemiLight;
          font-weight:normal;
          color:rgba(31,31,31,1);
        }
      }
    }
    .main_container_right_slide2_center{
      height: 30px;
      border-top: 1px solid #d5d5d5;
      border-bottom: 1px solid #d5d5d5;
      margin-top: 29px;
      .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        line-height: 30px;
        padding: 0 47px;

        div{

          img{
            width: 100%;
            height: 100%;
            position: relative;
            top: 2px;
          }
        }
        p{
          font-size: 11px;
          color: #7B7B7B;
        }
        .content1{
          display: flex;
          flex-direction: row;
          height: 30px;
          div{
            height: 18px;
            width: 18px;
          }
        }
        .content2{
          display: flex;
          flex-direction: row;
          div{
            height: 18px;
            width: 18px;
          }
        }
        .content3{
          display: flex;
          flex-direction: row;
          div{
            height: 18px;
            width: 18px;
          }
        }
      }
    }
    .main_container_right_slide2_bottom{
      .d1{
        display: flex;
        flex-direction: row;
        padding: 20px 40px 20px 20px;
        justify-content: space-between;
        .d1_left{
          div{
            width: 80px;
            height: 80px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .d1_center{
          font-size:30px;
          font-family:NotoSansCJKkr-DemiLight;
          font-weight:normal;
          color:#7B7B7B;
          display: flex;
          align-items: center;
        }
        .d1_right{
          span{
            font-size: 10px;
            color:#7B7B7B;
            margin-left: 3px;
            position: relative;
            top: 3px;
          }
          .right_top{
            display:flex;
            flex-direction: row;
          }
          .right_bottom{
            display:flex;
            flex-direction: row;
            margin-top: 40px;
          }
        }
      }
      .d2{
        height: 50px;
        background: #F2F3F9;
        margin-top: 20px;
        padding-top: 10px;
        ul{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 0 20px;
          li{
            text-align: center;
            h1{
              font-size: 14px;
              color:#7B7B7B;
            }
            p{
              font-size: 12px;
              color:#7B7B7B;
            }
          }
        }
      }
    }
  }
</style>
