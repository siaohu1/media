<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
export default {
  components:{
    Header,
    Footer
    }
  }
</script>

<style>
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
</style>
