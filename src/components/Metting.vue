<template>
  <div class="stimulation_container_right_top">
    <div class="main_container_right_slide1">
      <div class="main_container_right_slide1_header">
        <div class="main_container_right_slide1_header_text">
          <p>{{$t('m.quickReport')}}</p>
        </div>
        <div class="main_container_right_slide1_header_button"></div>
      </div>
    </div>
    <ul>
      <li v-for="item in noticeList">
        <p>{{item.publishTime.split(' ')[0].replace(new RegExp("-",("gm")),":")}}</p>
        <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
        <h1>{{item.title}}</h1>
        </router-link>
        <div></div>
      </li>

    </ul>
  </div>
</template>

<script>
  import * as apiRequest from '../api/index'
  export default {
    name: "metting",
    data(){
      return {
        noticeList:[]
      }
    },
    mounted(){
      this.getNotice()
    },
    methods:{
      getNotice(){
        apiRequest.ContentList({
          type:'notice'
        })
          .then(
            data=>{
              console.log(data)
              this.noticeList = data.data
            }
          )
      }
    }
  }
</script>

<style scoped lang="less">
  .stimulation_container_right_top{
    height: 318px;
    background: white;
    .main_container_right_slide1{
      padding: 20px;
      background: white;
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
      overflow-y:scroll;
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
        a{
          ont-size:12px;
          font-family:NotoSansCJKkr-Medium;
          font-weight:500;
          color:rgba(25,25,25,1);
          line-height:16px;
          margin-top: 5px;
          text-decoration: none;
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
</style>
