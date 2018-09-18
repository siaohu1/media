<template>
  <main>
    <section class="main">
      <section class="main_container" style="position: relative">
        <section class="main_container_left">
          <div class="main_container_left_section1">
            <div class="main_container_left_section1_top">
              <div class="banner1" v-for="item in typeList1">
                <div class="animated fadeIn" style="height: 100%">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                    <img v-lazy="item.cover" alt="">
                  </router-link>
                  <div class="banner1_content">
                    <div>
                      <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                        <h5>{{item.tags}}</h5>
                      </router-link>
                    </div>
                    <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                      <p>{{item.title}}</p>
                      <h6>{{item.publishTime}}</h6>
                    </router-link>
                  </div>
                </div>
              </div>

            </div>
            <div class="main_container_left_section1_bottom">
              <div class="banner2 animated fadeIn" v-for="item in typeList2" >
                <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img v-lazy="item.cover" alt="">
                </router-link>
                <div class="banner1_content">
                  <div>
                    <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                      <h5>{{item.tags}}</h5>
                    </router-link>
                  </div>
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                    <p>{{item.title}}</p>
                    <h6>{{item.publishTime}}</h6>
                  </router-link>
                </div>
              </div>
              <!--<div class="banner2" v-if="loading_top" >-->
                <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537095832513&di=dac2170a001ccbcd1e758073ae70011a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01491557e1e0f00000012e7e66d689.gif" alt="">-->
              <!--</div>-->
              <!--<div class="banner2" v-if="loading_top">-->
                <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537095832513&di=dac2170a001ccbcd1e758073ae70011a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01491557e1e0f00000012e7e66d689.gif" alt="">-->
              <!--</div>-->
            </div>
          </div>
          <div class="main_container_left_section2">
            <div class="main_container_left_section2_left">
              <div class="ad1 black" >
                <a :href="ad1.url">
                  <img v-lazy="ad1.cover" alt="">
                  <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                </a>
              </div>
              <div class="ad2 black">
                <a :href="ad2.url">
                  <img v-lazy="ad2.cover" alt="">
                  <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                </a>

              </div>
              <div class="ad3 black">
                <a :href="ad3.url">
                  <img v-lazy="ad3.cover" alt="">
                  <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                </a>

              </div>

            </div>
            <div class="main_container_left_section2_right">
              <div class="slide1">
                <div class="slide1_top_nav">
                  <div class="slide1_top_nav_left">
                    <p>{{$t('m.classification')}}</p>
                  </div>
                  <div class="slide1_top_nav_right">
                    <ul>
                      <li><a href="javascript:;" :class="{active1:n==1}" @click="n=1,getNew1()">{{$t('m.policy')}}</a></li>
                      <li><a href="javascript:;" :class="{active1:n==2}" @click="n=2,getNew2()">{{$t('m.research')}}</a></li>
                      <li><a href="javascript:;" :class="{active1:n==3}" @click="n=3,getNew4()">{{$t('m.technology')}}</a></li>
                      <li><a href="javascript:;" :class="{active1:n==4}" @click="n=4,getNew5()">{{$t('m.overseas')}}</a></li>
                      <li><a href="javascript:;" :class="{active1:n==5}" @click="n=5,getNew6()">{{$t('m.Quotation')}}</a></li>
                      <li><a href="javascript:;" :class="{active1:n==6}" @click="n=6,getNew3()">{{$t('m.character')}}</a></li>
                    </ul>
                  </div>
                </div>
                <div v-loading="loading2"
                     element-loading-text="loading"
                     element-loading-spinner="el-icon-loading"
                     element-loading-background="rgba(0, 0, 0, 0.4)" style="height: 420px" v-if="refreshM">
                  <div class="slide1_content" >
                    <div class="slide1_content_left animated fadeIn" v-for="(item,index) in news1" :class="'delay-1-'+index+'s'">
                      <div class="slide1_content_left_top">
                        <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                          <img v-lazy="item.cover" alt="">
                        </router-link>
                        <div class="slide1_content_left_top_text">
                          <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                            <h6>{{item.publishTime}}</h6>
                            <p>{{item.title}}</p>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="slide1_content_left_bottom">
                    <div class="slide1_content_left_bottom_container" v-for="item in news2">
                      <div class="slide1_content_left_bottom_container_img">
                        <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                          <img v-lazy="item.cover" alt="">
                        </router-link>
                      </div>
                      <div class="slide1_content_left_bottom_container_content">
                        <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                          <h1>{{item.title}}</h1>
                          <p><span><img src="../../static/images/timea.png" alt=""></span>{{item.publishTime.split(' ')[0]}}</p>
                        </router-link>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div class="slide2">
                <div class="slide2_header">
                  <div class="slide2_header_text">
                    <p>{{$t('m.activity')}}</p>
                  </div>
                  <div class="slide2_header_button">
                    <div class="slide2_header_button_module">
                      <div class="left_button" @click="getAcitiviveInfo1(1)">

                      </div>
                      <div class="right_button" @click="getAcitiviveInfo1(2)">

                      </div>
                    </div>
                  </div>
                </div>
                <div class="slide2_content">
                  <div class="slide2_content_left">
                    <div class="slide2_content_left_top black">
                      <router-link :to="`/StimulationDetail?id=${activity1.id}&&id1=${activity1.categoryId}`" target='_blank' style="text-decoration: none">
                      <img v-lazy="activity1.cover" alt="">
                        <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                      </router-link>
                    </div>
                    <div class="slide2_content_left_bottom">
                      <router-link :to="`/StimulationDetail?id=${activity1.id}&&id1=${activity1.categoryId}`" target='_blank' style="text-decoration: none">
                      <h1>{{activity1.title}}</h1>
                      </router-link>
                      <h6><span><img src="../../static/images/timea.png" alt=""></span>March 12,2018</h6>
                      <router-link :to="`/StimulationDetail?id=${activity1.id}&&id1=${activity1.categoryId}`" target='_blank' style="text-decoration: none">
                      <p style="height: 45px;overflow: hidden">{{activity1.description}}</p>
                      </router-link>
                    </div>
                  </div>
                  <div class="slide2_content_right">
                    <ul>
                      <li v-for="item in activity2">
                        <div>
                          <img v-lazy="item.cover" alt="">
                        </div>
                        <p style="height: 50px;overflow: hidden">{{item.description}}</p>
                      </li>


                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="main_container_right" style="position: relative" :style="{top:marginTops+'px'}">
          <!--:class="navBarFixed == true ? 'navBarWrap' :''" v-show="!hiddenRight"-->
        <div class="main_container_right_slide1">
          <div class="main_container_right_slide1_header">
            <div class="main_container_right_slide1_header_text">
              <p>{{this.$t('m.latest')}}</p>
            </div>
            <div class="main_container_right_slide1_header_button">
              <div class="left_button" @click="getLatestNews1(1)" :class="{clicked:w==1}">
              </div>
              <div class="right_button" @click="getLatestNews1(2),w=1">

              </div>
            </div>
          </div>
          <ul v-loading="loading3"
              element-loading-text="loading"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.4)"
              style="min-height: 500px"
          >
            <li v-for="(item,index) in latesNesList" class="animated fadeIn"  :class="'delay-1-'+index+'s'" v-if="right_loading">

              <div class="li_left" style="position: relative">
                <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' >
                  <img src="../../static/images/loading.gif" alt="" v-if="loading_right">
                  <img v-lazy="item.cover" alt="" class="animated fadeIn" v-else>
                  <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                </router-link>
              </div>
              <div class="li_right">
                <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <h1>{{item.title}}</h1>
                  <p><span><img src="../../static/images/time_black.png" alt=""></span>{{item.publishTime.split(' ')[0]}}</p>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
        <!--<div class="main_container_right_slide2">-->
        <!--<div class="main_container_right_slide2_top">-->
        <!--<div class="title">-->
        <!--<div class="title_left">-->
        <!--<p>{{$t('m.weather')}}</p>-->
        <!--</div>-->
        <!--<div class="title_right"></div>-->
        <!--</div>-->
        <!--<div class="position">-->
        <!--<h1>서울</h1>-->
        <!--<p>맑음</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="main_container_right_slide2_center">-->
        <!--<div class="content">-->
        <!--<div class="content1">-->
        <!--<div>-->
        <!--<img src="../../static/images/shui.png" alt="">-->
        <!--</div>-->
        <!--<p>87%</p>-->
        <!--</div>-->
        <!--<div class="content2">-->
        <!--<div>-->
        <!--<img src="../../static/images/gui.png" alt="">-->
        <!--</div>-->
        <!--<p>1.5km/h</p>-->
        <!--</div>-->
        <!--<div class="content3">-->
        <!--<div>-->
        <!--<img src="../../static/images/yun.png" alt="">-->
        <!--</div>-->
        <!--<p>8%</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="main_container_right_slide2_bottom">-->
        <!--<div class="d1">-->
        <!--<div class="d1_left">-->
        <!--<div>-->
        <!--<img src="../../static/images/windy.png" alt="">-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="d1_center">14˚C</div>-->
        <!--<div class="d1_right">-->
        <!--<div class="right_top">-->
        <!--<div>-->
        <!--<img src="../../static/images/tttp.png" alt="">-->
        <!--</div>-->
        <!--<span>-->
        <!--22˚C-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="right_bottom">-->
        <!--<div>-->
        <!--<img src="../../static/images/bbbm.png" alt="">-->
        <!--</div>-->
        <!--<span>-->
        <!--8˚C-->
        <!--</span>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="d2">-->
        <!--<ul>-->
        <!--<li>-->
        <!--<h1>26˚</h1>-->
        <!--<p>THU</p>-->
        <!--</li>-->
        <!--<li>-->
        <!--<h1>26˚</h1>-->
        <!--<p>THU</p>-->
        <!--</li>-->
        <!--<li>-->
        <!--<h1>26˚</h1>-->
        <!--<p>THU</p>-->
        <!--</li>-->
        <!--<li>-->
        <!--<h1>26˚</h1>-->
        <!--<p>THU</p>-->
        <!--</li>-->
        <!--<li>-->
        <!--<h1>26˚</h1>-->
        <!--<p>THU</p>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;<div class="icon sunny">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="sun">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="rays"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--&lt;!&ndash;<div class="icon rainy">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="rain"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--&lt;!&ndash;<div class="icon cloudy">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--&lt;!&ndash;<div class="icon flurries">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="snow">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="flake"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="flake"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--&lt;!&ndash;<div class="icon thunder-storm">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="lightning">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="bolt"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="bolt"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--&lt;!&ndash;<div class="icon sun-shower">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="sun">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="rays"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="rain"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<div class="main_container_right_slide2_header"></div>-->
        <!--</div>-->
        <div class="main_container_right_slide3">
          <div class="main_container_right_slide3_header">
            <div class="main_container_right_slide3_header_text">
              <p>{{$t('m.Employment_ad')}}</p>
            </div>
            <div class="main_container_right_slide3_header_btn"></div>
          </div>
          <div class="main_container_right_slide3_container">
            <ul>
              <li v-for="item in recruitList">
                <div class="container_left">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                    <img v-lazy="item.cover" alt="">
                  </router-link>
                </div>
                <div class="container_right">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                    <h3>{{item.title}}</h3>
                    <p style="height: 16px;overflow: hidden">{{item.description}}</p>
                  </router-link>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </section >
        <!--<section class="main_container_right"  v-show="hiddenRight" style="margin-top: 403px">-->
          <!--<div class="main_container_right_slide1">-->
            <!--<div class="main_container_right_slide1_header">-->
              <!--<div class="main_container_right_slide1_header_text">-->
                <!--<p>{{this.$t('m.latest')}}</p>-->
              <!--</div>-->
              <!--<div class="main_container_right_slide1_header_button">-->
                <!--<div class="left_button" @click="getLatestNews1(1)" :class="{clicked:w==1}">-->
                <!--</div>-->
                <!--<div class="right_button" @click="getLatestNews1(2),w=1">-->

                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<ul>-->
              <!--<li v-for="(item,index) in latesNesList" class="animated fadeIn"  :class="'delay-1-'+index+'s'" v-if="right_loading">-->

                <!--<div class="li_left" style="position: relative">-->
                  <!--<router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' >-->
                    <!--<img src="../../static/images/loading.gif" alt="" v-if="loading_right">-->
                    <!--<img v-lazy="item.cover" alt="" class="animated fadeIn" v-else>-->
                    <!--<div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>-->
                  <!--</router-link>-->
                <!--</div>-->
                <!--<div class="li_right">-->
                  <!--<router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>-->
                    <!--<h1>{{item.title}}</h1>-->
                    <!--<p><span><img src="../../static/images/time_black.png" alt=""></span>{{item.publishTime.split(' ')[0]}}</p>-->
                  <!--</router-link>-->
                <!--</div>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
          <!--&lt;!&ndash;<div class="main_container_right_slide2">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="main_container_right_slide2_top">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="title">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="title_left">&ndash;&gt;-->
          <!--&lt;!&ndash;<p>{{$t('m.weather')}}</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="title_right"></div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="position">&ndash;&gt;-->
          <!--&lt;!&ndash;<h1>서울</h1>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>맑음</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="main_container_right_slide2_center">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="content">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="content1">&ndash;&gt;-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../static/images/shui.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>87%</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="content2">&ndash;&gt;-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../static/images/gui.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>1.5km/h</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="content3">&ndash;&gt;-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../static/images/yun.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>8%</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="main_container_right_slide2_bottom">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="d1">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="d1_left">&ndash;&gt;-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../static/images/windy.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="d1_center">14˚C</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="d1_right">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="right_top">&ndash;&gt;-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../static/images/tttp.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<span>&ndash;&gt;-->
          <!--&lt;!&ndash;22˚C&ndash;&gt;-->
          <!--&lt;!&ndash;</span>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="right_bottom">&ndash;&gt;-->
          <!--&lt;!&ndash;<div>&ndash;&gt;-->
          <!--&lt;!&ndash;<img src="../../static/images/bbbm.png" alt="">&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<span>&ndash;&gt;-->
          <!--&lt;!&ndash;8˚C&ndash;&gt;-->
          <!--&lt;!&ndash;</span>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="d2">&ndash;&gt;-->
          <!--&lt;!&ndash;<ul>&ndash;&gt;-->
          <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<h1>26˚</h1>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>THU</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</li>&ndash;&gt;-->
          <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<h1>26˚</h1>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>THU</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</li>&ndash;&gt;-->
          <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<h1>26˚</h1>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>THU</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</li>&ndash;&gt;-->
          <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<h1>26˚</h1>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>THU</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</li>&ndash;&gt;-->
          <!--&lt;!&ndash;<li>&ndash;&gt;-->
          <!--&lt;!&ndash;<h1>26˚</h1>&ndash;&gt;-->
          <!--&lt;!&ndash;<p>THU</p>&ndash;&gt;-->
          <!--&lt;!&ndash;</li>&ndash;&gt;-->
          <!--&lt;!&ndash;</ul>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="icon sunny">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="sun">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="rays"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

          <!--&lt;!&ndash;&lt;!&ndash;<div class="icon rainy">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="rain"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

          <!--&lt;!&ndash;&lt;!&ndash;<div class="icon cloudy">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

          <!--&lt;!&ndash;&lt;!&ndash;<div class="icon flurries">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="snow">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="flake"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="flake"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

          <!--&lt;!&ndash;&lt;!&ndash;<div class="icon thunder-storm">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="lightning">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="bolt"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="bolt"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

          <!--&lt;!&ndash;&lt;!&ndash;<div class="icon sun-shower">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="cloud"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="sun">&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="rays"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;<div class="rain"></div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="main_container_right_slide2_header"></div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--<div class="main_container_right_slide3">-->
            <!--<div class="main_container_right_slide3_header">-->
              <!--<div class="main_container_right_slide3_header_text">-->
                <!--<p>{{$t('m.Employment_ad')}}</p>-->
              <!--</div>-->
              <!--<div class="main_container_right_slide3_header_btn"></div>-->
            <!--</div>-->
            <!--<div class="main_container_right_slide3_container">-->
              <!--<ul>-->
                <!--<li v-for="item in recruitList">-->
                  <!--<div class="container_left">-->
                    <!--<router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">-->
                      <!--<img v-lazy="item.cover" alt="">-->
                    <!--</router-link>-->
                  <!--</div>-->
                  <!--<div class="container_right">-->
                    <!--<router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">-->
                      <!--<h3>{{item.title}}</h3>-->
                      <!--<p style="height: 16px;overflow: hidden">{{item.description}}</p>-->
                    <!--</router-link>-->
                  <!--</div>-->
                <!--</li>-->

              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</section >-->
      </section>
      <section class="main_container1">
        <div class="news1">
          <div class="news1_title">
            <div class="news1_title_text">
              <p>{{$t('m.insight')}}</p>
            </div>
            <div class="news1_title_btn"></div>
          </div>
          <div class="news1_container">
            <ul>
              <li v-for="item in insightList">
                <div class="news1_container_left black">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img v-lazy="item.cover" alt="">
                    <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                  </router-link>
                </div>
                <div class="news1_container_right">

                  <h1>{{item.title}}</h1>
                  <h3><span><img src="../../static/images/timea.png" alt=""></span>{{item.publishTime.split(' ')[0].replace(new RegExp("-",("gm")),":")}}</h3>
                  <p>{{item.description}}</p>

                    <div>
                      <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                      <p>{{$t('m.read_more')}}</p>
                      </router-link>
                    </div>

                </div>
              </li>

            </ul>
            <router-link to="/insight" target="_blank">
            <div class="more">
              <p>{{$t('m.readMore')}}</p>
            </div>
            </router-link>
          </div>
        </div>
        <div class="news1">
          <div class="news1_title">
            <div class="news1_title_text">
              <p>{{$t('m.vipInformation')}}</p>
            </div>
            <div class="news1_title_btn"></div>
          </div>
          <div class="news1_container">
            <ul>
              <li v-for="item in vipList">
                <div class="news1_container_left black">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img v-lazy="item.cover" alt="">
                    <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                  </router-link>
                </div>
                <div class="news1_container_right">
                  <h1>{{item.title}}</h1>
                  <h3><span><img src="../../static/images/timea.png" alt=""></span>{{item.publishTime.split(' ')[0].replace(new RegExp("-",("gm")),":")}}</h3>
                  <p>{{item.description}}</p>
                  <div>
                    <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="text-decoration: none">
                    <p>{{$t('m.read_more')}}</p>
                    </router-link>
                  </div>
                </div>
              </li>
            </ul>
            <router-link to="/noname" target="_blank">
            <div class="more">
              <p>{{$t('m.readMore')}}</p>
            </div>
            </router-link>
          </div>
        </div>
      </section>
      <section class="main_container2">
        <div class="news">
          <div class="news_title">
            <p>{{$t('m.hotTopic')}}</p>
          </div>
          <div class="news_container">
            <ul>
              <li v-for="item in HotestList">
                <div class="li_top black">
                  <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank'>
                  <img  v-lazy="item.cover" alt="">
                    <div style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></div>
                  </router-link>
                </div>
                <div class="li_bottom">
                  <h1 style="height: 40px;">{{item.title}}</h1>
                  <h3><span><img src="../../static/images/timea.png" alt=""></span>March 12,2018</h3>
                  <p style="height: 40px;overflow: hidden">{{item.description}}</p>
                </div>
              </li>


            </ul>
            <div class="pagination">
              <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="count"
                @current-change="getHotestNews"
                style="background: white"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </section>
    </section>
    <FooterNews/>
  </main>
</template>

<script>
  import FooterNews from '../components/FooterNews'
  import Tab from '../components/Tab'
  import * as apiRequest from '../api/index'
  export default {
    name: "home",
    data(){
      return {
        refreshM:true,
        loading3:true,
        loading2:true,
        right_loading:true,
        loading_right:true,
        loading_top:true,
        w:0,
        latesNesList:[],
        recruitList:[],
        n:1,
        countList:[],
        news1:[],
        news2:[],
        insightList:[],
        vipList:[],
        HotestList:[],
        activity1:[],
        activity2:[],
        typeList1:[
          // {
          //   cover:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537095832513&di=dac2170a001ccbcd1e758073ae70011a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01491557e1e0f00000012e7e66d689.gif',
          //   title:'',
          // }
        ],
        typeList2:[],
        count:0,
        page:1,
        pageSize:8,
        ad1:[],
        ad2:[],
        ad3:[],
        navBarFixed:false,
        hiddenRight:false,
        marginTops:0,
      }
    },
    mounted(){
      this.getTypeLastesNews()
      this.getNew1()
      this.getInsightList()
      this.getLatestNews()
      this.getRecruitList()
      this.getVipList()
      this.getHotestNews()
      this.getAcitiviveInfo()
      this.getAD()
      this.getAD1()
      this.getAD2()
      // window.addEventListener('scroll', this.watchScroll)
    },
    methods:{
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        //  当滚动超过 130 时，实现吸顶效果
        if (scrollTop > 370&&scrollTop<=773) {
          this.marginTops = scrollTop-370
        }else if(scrollTop > 774){
          // this.navBarFixed = false
        }else if(scrollTop<=370){
          // this.marginTops =
        }
      },
      //AD
      getAD(){
        apiRequest.Advert({
          position:1
        }).then(
          data=>{
            this.ad1 = data.data[0]
          }
        )
      },
      getAD1(){
        apiRequest.Advert({
          position:2
        }).then(
          data=>{
            this.ad2 = data.data[0]
          }
        )
      },
      getAD2(){
        apiRequest.Advert({
          position:3
        }).then(
          data=>{
            this.ad3 = data.data[0]
          }
        )
      },
      //首页综合新闻
      getTypeLastesNews(){
        apiRequest.TypeLastesNews({
          pageSize:5
        }).then(
          data=>{
            // setTimeout(()=>{
              this.typeList1 = data.data.slice(0,3)
              this.typeList2 = data.data.slice(3,5)
              // this.loading_top = false
            // },1500)
          }
        )
      },
      //获取活动信息
      getAcitiviveInfo(){
        apiRequest.ContentList({
          type:'activity',
          pageSize:5
        }).then(
          data=>{
            console.log(data)
            console.log('555555555555555555')
          this.activity1 = data.data[0];
          this.activity2 = data.data.slice(1,5)

          }
        )
      },
      getAcitiviveInfo1(num){
        apiRequest.ContentList({
          type:'activity',
          pageSize:5,
          direction:num
        }).then(
          data=>{
            console.log(data)
            console.log('555555555555555555')
            this.activity1 = data.data[0];
            this.activity2 = data.data.slice(1,5)

          }
        )
      },
      //insight
      getInsightList(){
        apiRequest.ContentList({
          type:'insight',
          pageSize:5
        }).then(
          data=>{
            if(data.code == 1000){
              this.insightList = data.data
            }
          }
        )
      },
      //vip
      getVipList(){
        apiRequest.ContentList({
          type:'senior',
          pageSize:5
        }).then(
          data=>{
            if(data.code == 1000){
              this.vipList = data.data
            }
          }
        )
      },
      //获取新闻列表

      //政策新闻
      getNew1(){
        apiRequest.ContentList({
          type:'policy',
          pageSize:6
        }).then(
          data=>{
            this.loading2 = true
            setTimeout(()=>{
              this.refreshM = true
              this.loading2 = false
              this.refreshM = true
              this.news1 = data.data.slice(0,2)
              this.news2 = data.data.slice(2,6)
            },1000)

          }
        )
      },
      //研究
      getNew2(){
        apiRequest.ContentList({
          type:'research',
          pageSize:6
        }).then(
          data=>{
            this.loading2 = true
            setTimeout(()=>{
              this.refreshM = true
              this.loading2 = false
              this.refreshM = true
              this.news1 = data.data.slice(0,2)
              this.news2 = data.data.slice(2,6)
            },1000)
          }
        )
      },
      //人物
      getNew3(){
        apiRequest.ContentList({
          type:'character',
          pageSize:6
        }).then(
          data=>{
            this.loading2 = true
            setTimeout(()=>{
              this.refreshM = true
              this.loading2 = false
              this.refreshM = true
              this.news1 = data.data.slice(0,2)
              this.news2 = data.data.slice(2,6)
            },1000)
          }
        )
      },
      //科技
      getNew4(){
        apiRequest.ContentList({
          type:'technology',
          pageSize:6
        }).then(
          data=>{
            this.loading2 = true
            setTimeout(()=>{
              this.refreshM = true
              this.loading2 = false
              this.refreshM = true
              this.news1 = data.data.slice(0,2)
              this.news2 = data.data.slice(2,6)
            },1000)
          }
        )
      },
      //海外
      getNew5(){
        apiRequest.ContentList({
          type:'overseas',
          pageSize:6
        }).then(
          data=>{
            this.loading2 = true
            setTimeout(()=>{
              this.refreshM = true
              this.loading2 = false
              this.refreshM = true
              this.news1 = data.data.slice(0,2)
              this.news2 = data.data.slice(2,6)
            },1000)
          }
        )
      },

      //行情
      getNew6(){
        apiRequest.ContentList({
          type:'market_price',
          pageSize:6
        }).then(
          data=>{
            this.loading2 = true
            setTimeout(()=>{
              this.refreshM = true
              this.loading2 = false
              this.refreshM = true
              this.news1 = data.data.slice(0,2)
              this.news2 = data.data.slice(2,6)
            },1000)
          }
        )
      },
      //获取最新新闻
      getLatestNews(){
        apiRequest.LatestNews({
        }).then(
          data=>{
            if(data.code === 1000){
                this.loading3 = true
              setTimeout(()=>{
                this.loading3 = false
                this.loading_right = false
                this.latesNesList = data.data

              },1000)
            }
          }
        )
      },
      getLatestNews1(num){
        apiRequest.LatestNews({
          direction:num,
        }).then(
          data=>{
            if(data.code === 1000){
              this.loading3 = true
              this.loading_right = true
              setTimeout(()=>{
                this.loading3 = false
                this.loading_right = false
                this.latesNesList = data.data
              },1000)
            }
          }
        )
      },
      getHotestNews(page = 1 ){
        apiRequest.HotNews({
          pageSize:this.pageSize,
          page
        })
          .then(
            data=>{
              this.HotestList = data.data
              this.count = data.totalNums
            }
          )
      },
      //获取招聘信息
      getRecruitList(){
        apiRequest.ContentList({
          type:'recruit'
        }).then(
          data=>{
            if(data.code == 1000){
              this.recruitList = data.data.slice(0,4)
              console.log(this.recruitList)
              console.log('222222222222222')
            }else{
              console.log(data.msg)
            }
          }
        )
      }
    },
    components:{
      FooterNews,
      Tab
    }
  }
</script>

<style scoped lang="less">
  main{
    background: #F5F5F5;
    padding-top: 20px;
    .main{
      /*padding-top: 20px;*/
      width: 1400px;
      margin: 0 auto;
      .main_container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .main_container_left{
          width: 1079px;
          .main_container_left_section1{
            width: 100%;
            height: 484px;
            background: white;
            .main_container_left_section1_top{
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              .banner1:hover .banner1_content{
                background: -webkit-linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* Firefox 3.6 - 15 */
                background: linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* 标准的语法 */

              }
              .banner1:hover img{
                transform: scale(1.1);
              }
              .banner1{
                width: 357px;
                height: 238px;
                cursor: pointer;
                overflow: hidden;
                position: relative;
                transition: all .6s;
                img{
                  width: 100%;
                  height: 100%;
                }
                .banner1_content{
                  width: 100%;
                  position: absolute;
                  bottom: 0;
                  transition: all .6s;
                  div{
                    width: 60px;
                    height: 16px;
                    line-height: 16px;
                    background: black;
                    margin-left: 17px;
                    margin-bottom: 5px;
                    h5{
                      font-size:10px;
                      font-family:NotoSansCJKkr-DemiLight;
                      color:rgba(255,255,255,1);
                      text-align: center;
                      width: auto!important;
                    }
                  }
                  p{
                    font-size:14px;
                    font-family:NotoSansCJKkr-Bold;
                    color:rgba(255,255,255,1);
                    line-height:20px;
                    padding: 0 17px;
                  }
                  h6{
                    font-size:10px;
                    font-family:NotoSansCJKkr-DemiLight;
                    color:rgba(255,255,255,1);
                    line-height:16px;
                    text-indent: 17px;
                    margin: 6px 0;
                  }
                }
                img{
                  height: 100%;
                  width: 100%;
                  transition: all 0.6s;
                }
              }
            }
            .main_container_left_section1_bottom{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin-top: 4px;
              .banner2:hover .banner1_content{
                background: -webkit-linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* Firefox 3.6 - 15 */
                background: linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0)); /* 标准的语法 */
                transition: all .6s;
              }
              .banner2:hover img{
                transform: scale(1.1);
              }
              .banner2{
                width: 538px;
                height: 242px;
                cursor: pointer;
                overflow: hidden;
                position: relative;
                background: white;
                .banner1_content{
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  transition: all .6s;
                  div{
                    width: 40px;
                    height: 16px;
                    line-height: 16px;
                    background: black;
                    margin-left: 17px;
                    margin-bottom: 5px;
                    h5{
                      font-size:10px;
                      font-family:NotoSansCJKkr-DemiLight;
                      color:rgba(255,255,255,1);
                      text-align: center;
                    }
                  }
                  p{
                    font-size:14px;
                    font-family:NotoSansCJKkr-Bold;
                    color:rgba(255,255,255,1);
                    line-height:20px;
                    padding: 0 17px;
                  }
                  h6{
                    font-size:10px;
                    font-family:NotoSansCJKkr-DemiLight;
                    color:rgba(255,255,255,1);
                    line-height:16px;
                    text-indent: 17px;
                    margin: 6px 0;
                  }
                }
                .banner1:hover .banner1_content{
                  background: linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0));
                }
                img{
                  height: 100%;
                  width: 100%;
                  transition: all 0.6s;
                }
              }
            }
          }
          .main_container_left_section2{
            display: flex;
            flex-direction: row;
            margin-top: 21px;
            justify-content: space-between;
            .main_container_left_section2_left{
              width: 300px;
              img{
                height: 100%;
                width: 100%;
                cursor: pointer;
              }
              .ad1{
                height: 141px;
                background: blue;
              }
              .ad2{
                height: 333px;
                background: blue;
                margin-top: 15px;
              }
              .ad3{
                height: 213px;
                background: blue;
                margin-top: 14px;
              }
              .ad4{
                height: 277px;
                background: blue;
                margin-top: 12px;
              }
            }
            .main_container_left_section2_right{
              width: 762px;
              .slide1{
                height: 512px;
                background: white;
                padding: 21px;
                .slide1_top_nav{
                  height: 36px;
                  line-height: 36px;
                  display: flex;
                  flex-direction: row;
                  background: white;
                  .slide1_top_nav_left{
                    width: 95px;
                    background: #3677A8;
                    p{
                      font-size:14px;
                      font-family:NotoSansCJKkr-Bold;
                      color:rgba(255,255,255,1);
                      text-align: center;
                    }
                  }
                  .slide1_top_nav_right{
                    display: flex;
                    justify-content: flex-end;
                    width: 667px;
                    border-bottom: 2px solid rgba(236,236,236,1);;
                    ul{
                      display: flex;
                      justify-content: flex-end;
                      li{
                        margin-left: 37px;
                        a{
                          font-size:12px;
                          font-family:NotoSansCJKkr-Medium;
                          color:rgba(115,115,115,1);
                          text-decoration: none;
                        }
                      }
                    }
                  }
                }
                .slide1_content{
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin-top: 18px;
                  .slide1_content_left{
                    width: 357px;
                    background: sienna;
                    position: relative;
                    .slide1_content_left_top{
                      height: 238px;
                      width: 100%;
                      overflow: hidden;
                      cursor: pointer;
                      img{
                        width: 100%;
                        height: 100%;
                        transition: all .6s;
                      }
                      .slide1_content_left_top_text{
                        position: absolute;
                        bottom: 0px;
                        width: 100%;
                        transition: all .6s;
                        padding-bottom: 13px;
                        padding-top: 10px;
                        h6{
                          font-size:10px;
                          font-family:NotoSansCJKkr-DemiLight;
                          color:rgba(255,255,255,1);
                          line-height:16px;
                          text-indent: 20px;
                          margin-bottom: 11px;
                        }
                        p{
                          font-size:15px;
                          font-family:NotoSansCJKkr-Bold;
                          color:rgba(255,255,255,1);
                          line-height:16px;
                          text-align: center;
                        }
                      }
                    }
                    .slide1_content_left_top:hover img{
                      transform: scale(1.1);
                    }
                    .slide1_content_left_top:hover div{
                      background: linear-gradient(bottom,rgba(0,0,0,.7),rgba(255,255,255,0));
                    }
                  }
                  .slide1_content_right{
                    width: 357px;
                  }

                }
                .slide1_content_left_bottom{
                  width: 100%;
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  padding-top: 15px;
                  .slide1_content_left_bottom_container{
                    display: flex;
                    flex-direction: row;
                    width: 357px;
                    /*padding-top: 15px;*/
                    margin-bottom: 20px;
                    .slide1_content_left_bottom_container_img{
                      width: 108px;
                      height: 72px;
                      img{
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                      }
                    }
                    .slide1_content_left_bottom_container_content{
                      width: 249px;
                      padding: 0 20px;
                      position: relative;
                      h1{
                        font-size:11px;
                        font-family:NotoSansCJKkr-Medium;
                        color:rgba(0,0,0,1);
                        line-height:16px;
                        font-weight: 500;
                        cursor: pointer;
                      }
                      p{
                        height: 30px;
                        line-height: 30px;
                        font-size:12px;
                        font-family:NotoSansCJKkr-Medium;
                        color: #d8d8d8;
                        position: absolute;
                        bottom: 6px;
                        cursor: pointer;
                        img{
                          margin-right: 2px;
                        }
                        span{
                          position: relative;
                          top:1px;
                        }
                      }
                    }
                  }

                }
              }
              .slide2{
                height: 474px;
                margin-top: 19px;
                padding: 20px;
                background: white;
                .slide2_header{
                  height: 36px;
                  line-height: 36px;
                  display: flex;
                  flex-direction: row;
                  .slide2_header_text{
                    background: #3677A8;
                    width: 95px;
                    p{
                      text-align: center;
                      font-size:14px;
                      font-family:NotoSansCJKkr-Bold;
                      color:rgba(255,255,255,1);
                    }
                  }
                  .slide2_header_button{
                    width: 627px;
                    height: 36px;
                    line-height: 36px;
                    background: white;
                    border-bottom: 1px solid #ECECEC ;
                    .slide2_header_button_module{
                      display: flex;
                      flex-direction: row;
                      justify-content: flex-end;
                      align-items: center;
                      height: 36px;
                      .left_button{
                        width: 14px;
                        height: 14px;
                        background: url("../../static/images/left_button.png");
                        background-size: cover;

                      }
                      .right_button{
                        width: 14px;
                        height: 14px;
                        background: url("../../static/images/right-btn.png");
                        background-size: cover;
                        margin-left: 2px;
                      }
                    }
                  }
                }
                .slide2_content{
                  padding-top: 20px;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  .slide2_content_left{
                    width: 350px;
                    .slide2_content_left_top{
                      height: 234px;
                      img{
                        width: 100%;
                        height: 100%;
                        cursor: pointer;
                      }
                    }
                    .slide2_content_left_bottom{
                      padding-top: 14px;
                      h1{
                        font-size:17px;
                        font-family:NotoSansCJKkr-Bold;
                        color:rgba(6,6,6,1);
                        line-height:24px;
                        cursor: pointer;
                      }
                      h6{
                        font-size: 12px;
                        color: #d8d8d8;
                        margin-top: 6px;
                        span{
                          img{
                            margin-right: 2px;
                          }
                        }
                      }
                      p{
                        font-size:12px;
                        font-family:NotoSansCJKkr-DemiLight;
                        color:rgba(96,96,96,1);
                        line-height:21px;
                        margin-top: 15px;
                        cursor: pointer;
                      }
                    }
                  }
                  .slide2_content_right{
                    width: 350px;
                    ul{
                      display: flex;
                      flex-direction: row;
                      flex-wrap: wrap;
                      justify-content: space-between;
                      li{
                        width: 165px;
                        height: 199px;
                        cursor: pointer;
                        div{
                          width: 165px;
                          height: 110px;
                          img{
                            width: 100%;
                            height: 100%;
                          }
                        }
                        p{
                          font-size:12px;
                          font-family:NotoSansCJKkr-Medium;
                          color:rgba(6,6,6,1);
                          line-height:17px;
                          padding-top: 17px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        .main_container_right{
          width: 300px;
          .main_container_right_slide1{
            height: auto;
            padding: 20px;
            background: black;
            .main_container_right_slide1_header{
              width: 100%;
              height: 36px;
              display: flex;
              flex-direction: row;
              .main_container_right_slide1_header_text{
                width: 120px;
                height: 36px;
                line-height: 36px;
                background: #3677A8;
                p{
                  text-align: center;
                  font-size:13px;
                  font-family:NotoSansCJKkr-Bold;
                  color:rgba(255,255,255,1);
                }
              }
              .main_container_right_slide1_header_button{
                width: 140px;
                border-bottom: 2px solid #212121;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                align-items: center;
                height: 36px;
                .left_button{
                  width: 14px;
                  height: 14px;
                  background: url("../../static/images/lleft.png");
                  background-size: cover;
                  cursor: pointer;
                }
                .right_button{
                  width: 14px;
                  height: 14px;
                  background: url("../../static/images/rright.png");
                  background-size: cover;
                  margin-left: 2px;
                  cursor: pointer;
                }
              }

            }
            ul{
              li{
                height: 118px;
                background: #111111;
                border-bottom: 1px solid rgba(33,33,33,1);
                display: flex;
                flex-direction: row;
                padding-top: 20px;
                .li_left{
                  width: 109px;
                  height: 72px;
                  transition: all 3s;
                  img{
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                  }
                }
                .li_left:hover div{
                  background: rgba(0,0,0,0.5);
                }
                .li_right{
                  width: 151px;
                  padding-left: 13px;
                  padding-right: 19px;
                  position: relative;
                  h1{
                    font-size:11px;
                    font-family:NotoSansCJKkr-Medium;
                    color:rgba(245,245,245,1);
                    line-height:18px;
                    cursor: pointer;
                    height: 54px;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    /*white-space:nowrap;*/
                  }
                  p{
                    font-size: 12px;
                    color: #d8d8d8;
                    position: absolute;
                    bottom: 22px;
                    cursor: pointer;
                    /*height: 80px;*/
                    /*overflow:hidden;*/
                    /*text-overflow:ellipsis;*/
                    /*white-space:nowrap;*/
                    span{
                      img{
                        margin-right: 2px;
                      }
                    }
                  }

                }
              }
              li:last-of-type{
                border: none;
              }
            }
          }
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
          .main_container_right_slide3{
            height: 287px;
            background: white;
            margin-top: 49px;
            padding: 18px;
            .main_container_right_slide3_header{
              height: 36px;
              display: flex;
              flex-direction: row;
              .main_container_right_slide3_header_text{
                width:120px;
                height:36px;
                line-height: 36px;
                background:rgba(54,119,168,1);
                p{
                  font-size:13px;
                  font-family:NotoSansCJKkr-Bold;
                  color:rgba(255,255,255,1);
                  text-align: center;
                }
              }
              .main_container_right_slide3_header_btn{
                width: 144px;
                border-bottom: 2px solid rgba(229,229,229,1);
              }
            }
            .main_container_right_slide3_container{
              ul{
                display: flex;
                flex-direction: column;
                li{
                  display: flex;
                  flex-direction: row;
                  height: 57px;
                  border-bottom: 1px solid rgba(229,229,229,1);
                  /*padding-bottom: 5px;*/
                  .container_left{
                    width: 54px;
                    height: 57px;
                    /*padding: 12px 8px 12px 8px;*/
                    img{
                      width: 38px;
                      height: 38px;
                      align-items: center;
                      margin-top: 10px;
                    }

                  }
                  .container_right{
                    display: flex;
                    flex-direction: column;
                    width: 210px;
                    padding-top: 14px;
                    height: 57px;
                    h3{
                        font-size:11px;
                        font-family:NotoSansCJKkr-Medium;
                        color:rgba(0,0,0,1);
                        line-height:16px;
                        font-weight: 500;
                        cursor: pointer;
                    }
                    p{
                      font-size:11px;
                      font-family:NotoSansCJKkr-Medium;
                      color:rgba(0,0,0,.5);
                      line-height:16px;
                      font-weight: 500;
                      cursor: pointer;
                    }
                  }
                }
                li:last-of-type{
                  border-bottom: none;
                }
              }
            }
          }
        }
      }
      .main_container1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 23px;
        .news1{
          width: 690px;
          /*height: 1085px;*/
          background: white;
          padding: 21px;
          position: relative;
          .news1_title{
            height: 36px;
            display: flex;
            flex-direction: row;
            .news1_title_text{
              width:95px;
              height:36px;
              background:rgba(54,119,168,1);
              p{
                text-align: center;
                line-height: 36px;
                font-size:13px;
                font-family:NotoSansCJKkr-Bold;
                color:rgba(255,255,255,1);
              }
            }
            .news1_title_btn{
              width: 552px;
              border-bottom: 2px solid rgba(236,236,236,1);
            }

          }
          .news1_container{
            ul{
              padding-top: 20px;
              li:first-of-type{
                margin: 0;
              }
              li{
                display: flex;
                flex-direction: row;
                margin-top: 31px;
                .news1_container_left{
                  width: 242px;
                  height: 162px;
                  img{
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                  }
                }
                .news1_container_right{
                  width: 391px;
                  padding-left: 21px;
                  position: relative;
                  div{
                    width:94px;
                    height:32px;
                    background:rgba(0,0,0,1);
                    line-height: 32px;
                    position: absolute;
                    bottom: 0;
                    cursor: pointer;
                    p{
                      font-size:12px;
                      font-family:NotoSansCJKkr-Bold;
                      color:rgba(255,255,255,1);
                      text-align: center;
                      cursor: pointer;
                    }
                  }
                  h1{
                    font-size:15px;
                    font-family:NotoSansCJKkr-Medium;
                    color:rgba(0,0,0,1);
                    cursor: pointer;
                  }
                  h3{
                      font-size:11px;
                      font-family:NotoSansCJKkr-Medium;
                      color:#ccc;
                      line-height:18px;
                      margin: 10px 0;
                    p {
                      font-size: 12px;
                      color: #d8d8d8;
                      position: absolute;
                      bottom: 22px;

                      span{
                        margin-right: 3px;
                      }
                    }
                    img {
                      margin-right: 3px;
                    }
                  }
                  p{
                    font-size:12px;
                    font-family:NotoSansCJKkr-DemiLight;
                    color:rgba(96,96,96,1);
                    height: 56px;
                    cursor: pointer;
                  }
                }
              }
            }
            .more{
              margin-top: 30px;
              display: flex;
              justify-content: center;
              cursor: pointer;
              p{
                width:330px;
                height:32px;
                font-size:12px;
                line-height: 32px;
                font-family:NotoSansCJKkr-Bold;
                color:rgba(255,255,255,1);
                text-align: center;
                background:rgba(0,0,0,1);
              }
            }
          }
        }
        .news2{
          width: 690px;
          height: 1085px;
        }
      }
      .main_container2{
        .news{
          /*height: 890px;*/
          margin-top: 23px;
          padding: 0 21px;
          background: white;
          .news_title{
            border-bottom: 2px solid rgba(236,236,236,1);
            p{
              height: 45px;
              line-height: 45px;
              font-size:17px;
              font-family:NotoSansCJKkr-Bold;
              color:rgba(0,0,0,1);
              text-align: center;
            }
          }
          .news_container{
            margin-top: 20px;
            ul{
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              /*justify-content: space-between;*/
              li{
                width: 325px;
                height: 386px;
                background: white;
                margin-right: 19px;
                .li_top{
                  width: 325px;
                  height: 216px;
                  img{
                    cursor: pointer;
                    height: 100%;
                    width: 100%;
                  }
                }
                .li_bottom{
                  h1{
                    font-size:14px;
                    font-family:NotoSansCJKkr-Bold;
                    color:rgba(12,24,35,1);
                    line-height:23px;
                    margin-top: 15px;
                  }
                  h3{
                    font-size: 12px;
                    color: #d8d8d8;
                    margin: 10px 0;
                    span{
                      img{
                        margin-right: 2px;
                      }
                    }
                  }
                  p{
                    height: 57px;
                    font-size:12px;
                    font-family:NotoSansCJKkr-DemiLight;
                    color:rgba(96,96,96,1);
                    line-height:21px;
                  }
                }
              }
              li:nth-child(4n){
                margin-right: 0;
              }
            }
          }
          .pagination{
            display: flex;
            justify-content: center;
            padding-bottom: 20px;
          }
        }
      }
    }
    }
  /* Icons */

  .icon {
    /* position: relative; */
    /* display: inline-block; */
    font-size: 1em; /* control icon size here */
  }

  .sunny {
    position: absolute;
    top: 50%;
    left: 46%;
  }

  .rainy {
    position: absolute;
    top: 50%;
    left: 20%;
  }

  .cloudy {
    position: absolute;
    top: 50%;
    left: 30%;
  }

  .flurries {
    position: absolute;
    top: 50%;
    left: 68%;
  }

  .thunder-storm {
    position: absolute;
    top: 50%;
    left: 78%;
  }

  .sun-shower {
    position: absolute;
    top: 50%;
    left: 88%;
  }

  .sun {
    width: 2.5em;
    height: 2.5em;
    margin: -1.25em;
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 0 0.375em orange;
    -webkit-animation: spin 12s infinite linear;
    animation: spin 12s infinite linear;
  }

  .cloud + .sun {
    margin: -2em 1em;
  }

  .rays {
    position: absolute;
    top: -2em;
    left: 50%;
    display: block;
    width: 0.375em;
    height: 1.125em;
    margin-left: -0.1875em;
    background: yellow;
    border-radius: 0.25em;
    box-shadow: 0 5.375em yellow;
  }

  .rays:before, .rays:after {
    content: '';
    position: absolute;
    top: 0em;
    left: 0em;
    display: block;
    width: 0.375em;
    height: 1.125em;
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
    -webkit-transform-origin: 50% 3.25em;
    transform-origin: 50% 3.25em;
    background: yellow;
    border-radius: 0.25em;
    box-shadow: 0 5.375em yellow;
  }
  .rays:before {
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg);
  }

  .rain,
  .lightning,
  .snow {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 20%;
    width: 3.75em;
    height: 3.75em;
    margin: 0.375em 0 0 -2em;
    background: currentColor;
  }

  .rain:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 1.125em;
    height: 1.125em;
    margin: -1em 0 0 -0.25em;
    background: #0cf;
    border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
        -1.375em -0.125em 0 rgba(255,255,255,0.2);
    -webkit-transform: rotate(-28deg);
    transform: rotate(-28deg);
    -webkit-animation: rain 3s linear infinite;
    animation: rain 3s linear infinite;
  }

  .cloud {
    position: absolute;
    z-index: 1;
    width: 3.6875em;
    height: 3.6875em;
    margin: -1.84375em;
    background: currentColor;
    border-radius: 50%;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em,
      2.0625em 0.9375em 0 -0.9375em ,
      0 0 0 0.375em lightgray,
      -2.1875em 0.6875em 0 -0.3125em lightgray,
      2.0625em 0.9375em 0 -0.5625em lightgray;
  }
  .cloud:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: currentColor;
    box-shadow: 0 0.4375em 0 -0.0625em lightgray;
  }
  .cloud:nth-child(2) {
    z-index: 0;
    background: #fff;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em #fff,
      2.0625em 0.9375em 0 -0.9375em #fff,
      0 0 0 0.375em #fff,
      -2.1875em 0.6875em 0 -0.3125em #fff,
      2.0625em 0.9375em 0 -0.5625em #fff;
    opacity: 0.3;
    -webkit-transform: scale(0.5) translate(6em, -3em);
    transform: scale(0.5) translate(6em, -3em);
    -webkit-animation: cloud 4s linear infinite;
    animation: cloud 4s linear infinite;
  }
  .cloud:nth-child(2):after { background: #fff; }

  .flake:before,
  .flake:after {
    content: '\2745';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1.025em 0 0 -1.0125em;
    color: #fff;
    list-height: 1em;
    opacity: 0.2;
    -webkit-animation: spin 8s linear infinite reverse;
    animation: spin 8s linear infinite reverse;
  }
  .flake:after {
    margin: 0.125em 0 0 -1em;
    font-size: 1.5em;
    opacity: 0.4;
    -webkit-animation: spin 14s linear infinite;
    animation: spin 14s linear infinite;
  }
  .flake:nth-child(2):before {
    margin: -0.5em 0 0 0.25em;
    font-size: 1.25em;
    opacity: 0.2;
    -webkit-animation: spin 10s linear infinite;
    animation: spin 10s linear infinite;
  }
  .flake:nth-child(2):after {
    margin: 0.375em 0 0 0.125em;
    font-size: 2em;
    opacity: 0.4;
    -webkit-animation: spin 16s linear infinite reverse;
    animation: spin 16s linear infinite reverse;
  }

  .bolt {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.25em 0 0 -0.125em;
    color: #fff;
    opacity: 0.3;
    -webkit-animation: lightning 2s linear infinite;
    animation: lightning 2s linear infinite;
  }
  .bolt:nth-child(2) {
    width: 0.5em;
    height: 0.25em;
    margin: -1.75em 0 0 -1.875em;
    -webkit-transform: translate(2.5em, 2.25em);
    transform: translate(2.5em, 2.25em);
    opacity: 0.2;
    -webkit-animation: lightning 1.5s linear infinite;
    animation: lightning 1.5s linear infinite;
  }

  .bolt:before,
  .bolt:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin: -1.625em 0 0 -1.0125em;
    border-top: 1.25em solid transparent;
    border-right: 0.75em solid;
    border-bottom: 0.75em solid;
    border-left: 0.5em solid transparent;
    -webkit-transform: skewX(-10deg);
    transform: skewX(-10deg);
  }
  .bolt:after {
    margin: -0.25em 0 0 -0.25em;
    border-top: 0.75em solid;
    border-right: 0.5em solid transparent;
    border-bottom: 1.25em solid transparent;
    border-left: 0.75em solid;
    -webkit-transform: skewX(-10deg);
    transform: skewX(-10deg);
  }
  .bolt:nth-child(2):before {
    margin: -0.75em 0 0 -0.5em;
    border-top: 0.625em solid transparent;
    border-right: 0.375em solid;
    border-bottom: 0.375em solid;
    border-left: 0.25em solid transparent;
  }
  .bolt:nth-child(2):after {
    margin: -0.125em 0 0 -0.125em;
    border-top: 0.375em solid;
    border-right: 0.25em solid transparent;
    border-bottom: 0.625em solid transparent;
    border-left: 0.375em solid;
  }

  /* Keyframe animations */

  @-webkit-keyframes spin {
    0%  {-webkit-transform: rotate(0deg);}
    100% {-webkit-transform: rotate(360deg);}
  }

  @keyframes spin {
    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
  }

  @-webkit-keyframes rain {
    0% {
      background: #0cf;
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
          -1.375em -0.125em 0 #0cf;
    }
    25% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em #0cf,
          -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    50% {
      background: rgba(255,255,255,0.3);
      box-shadow:
        0.625em 0.875em 0 -0.125em #0cf,
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
          -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    100% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
          -1.375em -0.125em 0 #0cf;
    }
  }

  @keyframes rain {
    0% {
      background: #0cf;
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
          -1.375em -0.125em 0 #0cf;
    }
    25% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em #0cf,
          -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    50% {
      background: rgba(255,255,255,0.3);
      box-shadow:
        0.625em 0.875em 0 -0.125em #0cf,
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
          -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    100% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
          -1.375em -0.125em 0 #0cf;
    }
  }

  @-webkit-keyframes cloud {
    0% { opacity: 0; }
    50% { opacity: 0.3; }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.5) translate(-200%, -3em);
      transform: scale(0.5) translate(-200%, -3em);
    }
  }

  @keyframes cloud {
    0% { opacity: 0; }
    50% { opacity: 0.3; }
    100% {
      opacity: 0;
      -webkit-transform: scale(0.5) translate(-200%, -3em);
      transform: scale(0.5) translate(-200%, -3em);
    }
  }

  @-webkit-keyframes lightning {
    45% {
      color: #fff;
      background: #fff;
      opacity: 0.2;
    }
    50% {
      color: #0cf;
      background: #0cf;
      opacity: 1;
    }
    55% {
      color: #fff;
      background: #fff;
      opacity: 0.2;
    }
  }

  @keyframes lightning {
    45% {
      color: #fff;
      background: #fff;
      opacity: 0.2;
    }
    50% {
      color: #0cf;
      background: #0cf;
      opacity: 1;
    }
    55% {
      color: #fff;
      background: #fff;
      opacity: 0.2;
    }
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
    background-color: #409EFF!important;
    color: #fff;
  }
  .active1{
    color: dodgerblue!important;
  }
  .clicked{
    background-image: url("../../static/images/left_light.png") !important;
  }
  .black{
    position: relative;
  }
  .black:hover div{

    background: rgba(0,0,0,0.5);
  }
  .navBarWrap {
    position:fixed;
    bottom:20px;
    left: 1233px;
    z-index:99;
  }
</style>

