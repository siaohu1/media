<template>
  <div class="slide_right">
    <Metting/>
    <NewsSlide/>
    <!--<Weather/>-->
  </div>
</template>

<script>
  import Metting from './Metting'
  import NewsSlide from './NewsSlider'
  import Weather from './Weather'
  export default {
    name: "slider-right",
    components:{
      Metting,
      NewsSlide,
      Weather
    }
  }
</script>

<style scoped lang="less">
  .slide_right{
    width: 300px;
  }
</style>
