<template>
  <div class="header_bottom" :class="navBarFixed == true ? 'navBarWrap' :''">
    <div class="header_bottom_container">
      <ul>
        <li @mouseenter="togglePanel(),getTypeLastesNews()">
          <router-link to="/home">
            {{$t('m.news')}}<i  class="el-icon-arrow-down" ref="searchMain" ></i>
          </router-link>
        </li>
        <li>
          <router-link to="/insight">
            {{$t('m.stimulation')}}<i @click="togglePanel1(),getInsiht()" class="el-icon-arrow-down" ref="searchMain1"></i>
          </router-link>

        </li>
        <li>
          <router-link to="/conference">
            {{$t('m.activity')}}<i @click="togglePanel2(),getInsiht()" class="el-icon-arrow-down" ref="searchMain2"></i>
          </router-link>

        </li>
        <li>
          <router-link to="/airdrop">
            {{$t('m.airdrop')}}<i @click="togglePanel3(),getInsiht()" class="el-icon-arrow-down" ref="searchMain3"></i>
          </router-link>

          </li>
        <li><a href="javascript:;">{{$t('m.quotation')}}</a></li>
        <li>
          <router-link to="/video">
            {{$t('m.video')}}<i @click="togglePanel4(),getInsiht()" class="el-icon-arrow-down" ref="searchMain4"></i>
          </router-link>

          </li>
        <li>
          <router-link to="/noname">
            {{$t('m.vipInformation')}}<i @click="togglePanel5(),getInsiht()" class="el-icon-arrow-down" ref="searchMain5"></i>
          </router-link>

          </li>
        <li>
          <router-link to="/advancevip">
            {{$t('m.block_chain')}}<i @click="togglePanel6(),getInsiht()" class="el-icon-arrow-down" ref="searchMain6"></i>
          </router-link>
          </li>
        <li><a href="javascript:;">{{$t('m.Inauguration')}}</a></li>
        <li> <i class="el-icon-search"></i></li>
      </ul>
      <el-collapse-transition>
      <div class="header_bottom_container_box" v-show="visible">
        <div class="header_bottom_container_box_left">
          <section>
            <!--<div>军事-->
              <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
            <!--</div>-->
            <!--<div>政治-->
              <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
            <!--</div>-->
            <!--<div>思想-->
              <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
            <!--</div>-->
          </section>
        </div>
        <div class="header_bottom_container_box_right">
          <ul v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
            <li v-for="item in NewsList">

              <div>
                <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                <img :src="item.cover" alt="">
                </router-link>
              <!--<div class="bg"></div>-->
              </div>
              <section style="padding: 0 10px;">
                <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                <h2>{{item.title}}</h2>
                </router-link>
                <h3>{{item.publishTime}}</h3>
              </section>
            </li>

          </ul>
        </div>
      </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="header_bottom_container_box" v-show="visible1">
          <div class="header_bottom_container_box_left">
            <section>
              <!--<div>军事-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>政治-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>思想-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
            </section>
          </div>
          <div class="header_bottom_container_box_right">
            <ul v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
              <li v-for="item in NewsList">
                <div>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img :src="item.cover" alt="">
                  </router-link>
                  <!--<div class="bg"></div>-->
                </div>
                <section style="padding: 0 10px;">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <h2>{{item.title}}</h2>
                  </router-link>
                  <h3>{{item.publishTime}}</h3>
                </section>
              </li>

            </ul>
          </div>
        </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="header_bottom_container_box" v-show="visible2">
          <div class="header_bottom_container_box_left">
            <section>
              <!--<div>军事-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>政治-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>思想-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
            </section>
          </div>
          <div class="header_bottom_container_box_right">
            <ul v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
              <li v-for="item in NewsList">
                <div>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img :src="item.cover" alt="">
                  </router-link>
                  <!--<div class="bg"></div>-->
                </div>
                <section style="padding: 0 10px;">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <h2>{{item.title}}</h2>
                  </router-link>
                  <h3>{{item.publishTime}}</h3>
                </section>
              </li>

            </ul>
          </div>
        </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="header_bottom_container_box" v-show="visible3">
          <div class="header_bottom_container_box_left">
            <section>
              <!--<div>军事-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>政治-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>思想-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
            </section>
          </div>
          <div class="header_bottom_container_box_right">
            <ul v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
              <li v-for="item in NewsList">
                <div>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img :src="item.cover" alt="">
                  </router-link>
                  <!--<div class="bg"></div>-->
                </div>
                <section style="padding: 0 10px;">
                  <h2>{{item.title}}</h2>
                  <h3>{{item.publishTime}}</h3>
                </section>
              </li>

            </ul>
          </div>
        </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="header_bottom_container_box" v-show="visible4">
          <div class="header_bottom_container_box_left">
            <section>
              <!--<div>军事-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>政治-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>思想-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
            </section>
          </div>
          <div class="header_bottom_container_box_right">
            <ul v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
              <li v-for="item in NewsList">
                <div>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img :src="item.cover" alt="">
                  </router-link>
                  <div class="bg"></div>
                </div>
                <section style="padding: 0 10px;">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <h2>{{item.title}}</h2>
                  </router-link>
                  <h3>{{item.publishTime}}</h3>
                </section>
              </li>

            </ul>
          </div>
        </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="header_bottom_container_box" v-show="visible5">
          <div class="header_bottom_container_box_left">
            <section>
              <!--<div>军事-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>政治-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>思想-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
            </section>
          </div>
          <div class="header_bottom_container_box_right">
            <ul v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
              <li v-for="item in NewsList">
                <div>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img :src="item.cover" alt="">
                  </router-link>
                  <!--<div class="bg"></div>-->
                </div>
                <section style="padding: 0 10px;">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <h2>{{item.title}}</h2>
                  </router-link>
                  <h3>{{item.publishTime}}</h3>
                </section>
              </li>

            </ul>
          </div>
        </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="header_bottom_container_box" v-show="visible6">
          <div class="header_bottom_container_box_left">
            <section>
              <!--<div>军事-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>政治-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
              <!--<div>思想-->
                <!--&lt;!&ndash;<h6></h6>&ndash;&gt;-->
              <!--</div>-->
            </section>
          </div>
          <div class="header_bottom_container_box_right">
            <ul v-loading="loading" element-loading-background="rgba(255, 255, 255, 1)">
              <li v-for="item in NewsList">
                <div>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img :src="item.cover" alt="">
                  </router-link>
                  <div class="bg"></div>
                </div>
                <section style="padding: 0 10px;">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <h2>{{item.title}}</h2>
                  </router-link>
                  <h3>{{item.publishTime}}</h3>
                </section>
              </li>

            </ul>
          </div>
        </div>
      </el-collapse-transition>

    </div>
  </div>
</template>

<script>
  import * as apiRequest from '../api/index.js'
  export default {
    name: "tab",
    data(){
      return {
        NewsList:[],
        n:-1,
        loading:true,
        visible:false,
        visible1:false,
        visible2:false,
        visible3:false,
        visible4:false,
        visible5:false,
        visible6:false,
        navBarFixed:false
      }
    },
    mounted(){
      window.addEventListener('scroll', this.watchScroll)
      console.log(window.addEventListener('scroll', this.watchScroll))
    },
    methods:{
      watchScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //  当滚动超过 130 时，实现吸顶效果
      if (scrollTop > 100) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
    },
    togglePanel () {
      this.visible ? this.hide() : this.show()
    },
    show () {
      this.visible = true
      document.addEventListener('click', this.hidePanel, false)
    },
    hide () {
      this.visible = false
      document.removeEventListener('click', this.hidePanel, false)
    },
    hidePanel (e) {
      if (!this.$refs.searchMain.contains(e.target)) {
        this.hide()
      }},
    //1
    togglePanel1 () {
      this.visible1 ? this.hide1() : this.show1()
    },
    show1 () {
      this.visible1 = true
      document.addEventListener('click', this.hidePanel1, false)
    },
    hide1 () {
      this.visible1 = false
      document.removeEventListener('click', this.hidePanel1, false)
    },
    hidePanel1 (e) {
      if (!this.$refs.searchMain1.contains(e.target)) {
        this.hide1()
      }},
    //2
    togglePanel2 () {
      this.visible1 ? this.hide2() : this.show2()
    },
    show2 () {
      this.visible2 = true
      document.addEventListener('click', this.hidePanel2, false)
    },
    hide2 () {
      this.visible2 = false
      document.removeEventListener('click', this.hidePanel2, false)
    },
    hidePanel2 (e) {
      if (!this.$refs.searchMain2.contains(e.target)) {
        this.hide2()
      }},
    //3
    togglePanel3 () {
      this.visible3 ? this.hide3() : this.show3()
    },
    show3 () {
      this.visible3 = true
      document.addEventListener('click', this.hidePanel3, false)
    },
    hide3 () {
      this.visible3 = false
      document.removeEventListener('click', this.hidePanel3, false)
    },
    hidePanel3 (e) {
      if (!this.$refs.searchMain3.contains(e.target)) {
        this.hide3()
      }},
    //4
    togglePanel4 () {
      this.visible4 ? this.hide4() : this.show4()
    },
    show4 () {
      this.visible4 = true
      document.addEventListener('click', this.hidePanel4, false)
    },
    hide4 () {
      this.visible4 = false
      document.removeEventListener('click', this.hidePanel4, false)
    },
    hidePanel4 (e) {
      if (!this.$refs.searchMain4.contains(e.target)) {
        this.hide4()
      }},
    //5
    togglePanel5 () {
      this.visible5 ? this.hide5() : this.show5()
    },
    show5 () {
      this.visible5 = true
      document.addEventListener('click', this.hidePanel5, false)
    },
    hide5 () {
      this.visible5 = false
      document.removeEventListener('click', this.hidePanel5, false)
    },
    hidePanel5 (e) {
      if (!this.$refs.searchMain5.contains(e.target)) {
        this.hide5()
      }},
    //6
    togglePanel6 () {
      this.visible6 ? this.hide6() : this.show6()
    },
    show6 () {
      this.visible6 = true
      document.addEventListener('click', this.hidePanel6, false)
    },
    hide6 () {
      this.visible6 = false
      document.removeEventListener('click', this.hidePanel6, false)
    },
    hidePanel6 (e) {
      if (!this.$refs.searchMain6.contains(e.target)) {
        this.hide6()
      }},
    // 新闻列表
    getTypeLastesNews(){
      this.loading = true
      setTimeout(()=>{
        this.loading = false
        apiRequest.TypeLastesNews({
          pageSize:5
        }).then(
          data=>{
            this.NewsList = data.data.slice(0,5)
          }
        )
      },1500)

    },
    //insight
    getInsiht(){
      this.loading = true
      setTimeout(()=>{
        this.loading = false
        apiRequest.ContentList({
          type:'insight',
          pageSize:5,
        }).then(
          data=>{
            this.NewsList = data.data
          }
        )
      },1500)

    }
  },
  }
</script>

<style scoped lang="less">
  .header_bottom {
    height: 40px;
    background: #3677A8;
    width: 100%;
    box-sizing:border-box;
    .header_bottom_container{
      width: 1400px;
      margin: 0 auto;
      box-sizing:border-box;
      ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-sizing:border-box;
        li{
          line-height: 35px;
          margin-left: 30px;
          /*border-top: 3px solid white;*/
          font-size:14px;
          font-family:Notosans Font;
          color:rgba(255,255,255,1);
          cursor: pointer;
          box-sizing:border-box;
          height: 40px!important;
          a{
            font-size:14px;
            font-family:Notosans Font;
            color:rgba(255,255,255,1);
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            border-top: 3px solid transparent;
          }
          /*i{*/
            /*position: relative;*/
            /*left: -14px;*/
          /*}*/
        }
        li:first-of-type{
          margin: 0;
          /*a{*/
            /*padding-right: 12px;*/
          /*}*/
        }
        li:last-of-type{
          padding-left: 20px;
          font-size: 20px;
          font-weight: 500;
          padding-top: 5px;
        }
        li:hover a{
          /*margin-top:-3px;*/
          /*margin-top: px;*/
          border-top: 3px solid white;
          box-sizing: border-box;
        }
      }
      .header_bottom_container_box{
        height: 240px;
        background: #FFFFFF;
        position: absolute;
        z-index: 999;
        width: 1400px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .header_bottom_container_box_left{
          width: 180px;
          height: 240px;
          padding: 22px;
          section{
            div{
              font-size:11px;
              font-family:Notosans Font;
              font-weight:bold;
              color:rgba(2,2,2,1);
              line-height:18px;
              display: flex;
              flex-direction: row;
              h6{
                width: 170px;
                height: 3px;
                background: #CAD9E5;
                margin-top: 6px;
              }
            }
          }
        }
        .header_bottom_container_box_right{
          width: 1220px;
          height: 240px;
          ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 240px;
            width: 1220px;
            li{
              width: 234px;
              margin: 0!important;
              color:rgba(0,0,0,1) !important;
              div{
                width: 231.5px;
                height: 156px;
                position: relative;
                img{
                  width: 100%;
                  height: 100%;
                }
                .bg{
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  margin-top: -22px;
                  margin-left: -22px;
                  width: 44px;
                  height: 44px;
                  background: url("../../static/images/play.png");
                }
              }
              h2{
                font-size:11px;
                font-family:Notosans Font;
                font-weight:500;
                color:rgba(0,0,0,1) !important;
                line-height: 18px;
                padding: 0 10px;
                margin-top: 11px;
              }
              h3{
                background: url("../../static/images/timea.png") no-repeat 3px;
                text-indent: 15px;
                font-size: 12px;
                font-family:Notosans Font;
                color: #ccc;
                padding: 0 10px;
              }
            }
          }
        }
      }
    }
  }
  .active{
    border-top: 3px solid white!important;
  }
  .navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
  }
</style>



