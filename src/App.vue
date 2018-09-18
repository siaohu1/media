<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    <div class="scrollTop animated fadeInUp" v-show="showTop" @click="toTop" style="text-align: center;line-height: 40px">
      <i class="el-icon-arrow-up" style="font-size: 20px;text-align: center;color: white"></i>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Tab from './components/Tab'
export default {
  components:{
    Header,
    Footer,Tab
    },
  data(){
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed:{
    showTop: function(){
      let value = this.scrollTop>200?true:false;
      return value;
    },
  },
  mounted(){
    window.addEventListener('scroll', this.getScrollTop);
    console.log(window.localStorage.lang)
    if(!window.localStorage.lang){
      console.log('11111111111')
      window.localStorage.setItem("lang",'KR');
      console.log(window.localStorage.lang)
    }else{
      this.$i18n.locale = window.localStorage.lang;//关键语句
    }
  },
  methods:{
    toTop(e) {
      if(!!this.scrollState){
        return;
      }
      this.scrollState = 1;
      e.preventDefault();
      let distance = document.documentElement.scrollTop || document.body.scrollTop;
      let _this = this;
      this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10);
    },
    gotoTop(distance){
      this.dParams += 20;
      distance = distance>0 ? distance : 0;
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
      if(this.scrollTop < 10){
        clearInterval(this.time);
        this.dParams = 20;
        this.scrollState = 0;
      }
    },
    getScrollTop() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
  }
</script>

<style>
  .scrollTop {
    width: 40px;
    height: 40px;
    position: fixed;
    right: 40px;
    bottom: 80px;
    cursor: pointer;
    background: rgb(0,0,0);
  }
  body{
    box-sizing: border-box!important;
  }
  .el-carousel__container {
    position: relative;
    height: 485px!important;
  }
  .el-carousel__indicators--outside button {
    background-color: orange;
    opacity: .14;
  }
  .el-carousel__arrow{
    border-radius: 0;
  }
  .el-carousel__container{
    height: 486px;
  }
  .el-carousel__button{
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  html,body{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    margin: 0 5px;
    background-color: white!important;
    color: #606266;
    min-width: 30px;
    border-radius: 2px;
    border: 1px solid #d5d5d5!important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #4577A4!important;
    color: #fff;
  }
  a{
    text-decoration: none;
  }
</style>
