<template>
  <header>
    <section>
      <div class="header_top">
        <div class="wrap">
          <!--// 外框，固定宽度-->
          <div id="box">
            <!--// 内部滚动框-->
            <div id="marquee" style="color: white;">
              <div style="display: flex;flex-direction: row;margin-right: 30px" v-for="item in coinPriceList">
                <div class="marquee_logo">
                  <img :src="item.logo" alt="">
                </div>
                <p>{{item.currency_name}}</p>
                <span>{{item.last*164.0367 | numFilter}}원</span>
                <div></div>
                <h6 v-show="item.degree<0">▼ {{item.degree}}%</h6>
                <h6 v-show="item.degree>0||item.degree==0" style="color: red">▲ {{item.degree}}%</h6>

              </div>



            </div>
            <!--//展示的文字-->
            <div id="copy"></div>
            <!--// 文字副本，为了实现无缝滚动-->
          </div>
          <div id="node">
            <div style="display: flex;flex-direction: row;margin-right: 20px" v-for="item in coinPriceList">
              <div class="marquee_logo">
                <img :src="item.logo" alt="">
              </div>
              <p>{{item.currency_name}}</p>
              <span>{{item.last*164.0367 | numFilter}}원</span>
              <div></div>
              <h6 v-show="item.degree<0">▼ {{item.degree}}%</h6>
              <h6 v-show="item.degree>0" style="color: red">▲ {{item.degree}}%</h6>

            </div>
          </div>
          <!--//为了获取text实际宽度-->
        </div>
      </div>
      <div class="header_top1">
       <div class="header_top1_container">
         <div class="header_top1_left">
           <!--<p>23.5˚C 중단 July 30 , 2018</p>-->
         </div>
         <div class="header_top1_center">
           <span @click="bottomItem()"> < </span>
           <!--<p>[아침시황] 빗썸 실명계좌 발급 중단, 크루그먼 독설…암호화폐 시장 연이은 악재-->
           <!--</p>-->
           <ul style="width: 420px">

             <li>
               <p v-for="(item,index) in noticeList" style="width: 420px;text-align: center" v-show="ww==index">{{item.title}}</p>
             </li>
           </ul>
           <span @click="topItem()"> > </span>

         </div>
         <div class="header_top1_right">
           <!--<div class="button1">로그인</div>-->
           <!--<div class="button2">회원가입</div>-->
           <div class="change_lang" ref="searchMain0" @click="togglePanel0">
             <p><span>{{lang1}}</span><i class="el-icon-arrow-down"></i></p>
           </div>
           <el-collapse-transition>
           <div class="lang" v-show="visible0">
             <p @click="changeLanguage1" v-show="lang1!=='Korean'">Korean</p>
             <p @click="changeLanguage" v-show="lang1!=='简体中文'">简体中文</p>
             <p @click="changeLanguage2" v-show="lang1!=='English'">English</p>
           </div>
           </el-collapse-transition>
         </div>
         <div class="header_top1_right1">
           <div class="icon1"></div>
           <div class="icon2"></div>
           <div class="icon3"></div>
           <div class="icon4"></div>
           <div class="icon5"></div>
           <div class="icon6"></div>
         </div>
       </div>
      </div>
      <div class="header_center">
        <div class="header_center_container">
          <router-link to="/">
            <div class="header_center_logo"></div>
          </router-link>
        </div>
      </div>
      <div class="header_bottom" :class="navBarFixed == true ? 'navBarWrap' :''">
        <div class="header_bottom_container">
          <ul>
            <li style="position: relative">
              <router-link to="/home">
                {{$t('m.news')}}<i  class="el-icon-arrow-down"></i>
              </router-link>
                <div class="header_bottom_container_box animated fadeIn" style="display: none" >
                  <section style="display: flex;flex-direction: row;border: 1px solid #d5d5d5;border-top: none">
                    <section style="width: 230px;height:240px;background: white;display: flex;flex-direction: column;padding-left: 10px;border-right: 1px solid #d5d5d5">
                        <p  @mouseenter="www=1,getPolicyList()" :style="www==1?{color:'skyblue'}:''" class="ppp">{{$t('m.policy')}}
                        <span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="www==1?{width: '170px'}:''"></span>
                        </p>
                        <p  class="ppp" @mouseenter="www=2,getResearch()" :style="www==2?{color:'skyblue'}:''">{{$t('m.research')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="www==2?{width: '170px'}:''"></span></p>
                        <p class="ppp" @mouseenter="www=3,getTechnology()" :style="www==3?{color:'skyblue'}:''">{{$t('m.technology')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="www==3?{width: '170px'}:''"></span></p>
                        <p  class="ppp" @mouseenter="www=4,getOverseas()" :style="www==4?{color:'skyblue'}:''">{{$t('m.overseas')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="www==4?{width: '170px'}:''"></span></p>
                        <p class="ppp" @mouseenter="www=5,getMarket()" :style="www==5?{color:'skyblue'}:''">{{$t('m.Quotation')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="www==5?{width: '170px'}:''"></span></p>
                        <p class="ppp" @mouseenter="www=6,getCharacter()" :style="www==6?{color:'skyblue'}:''">{{$t('m.character')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="www==6?{width: '170px'}:''"></span></p>
                    </section>
                    <section style="width: 1170px;height:240px;background: white;display: flex;flex-direction: row;justify-content: start">
                      <h6 style="width: 234px;height:240px;background: white;border-right: 1px solid #d5d5d5" v-for="(item,index) in NewssList" class="animated fadeIn" :class="'delay-1-'+index+'s'" v-if="right_loading">
                        <section class="top black" style="height: 156px">
                          <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="border-top: none">
                          <img v-lazy="item.cover" alt="" style="width: 100%;height: 156px">
                            <h2 style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></h2>
                            <h3 style="width: 60px;height: 20px;background: rgba(0,0,0,.7);position: absolute;bottom: 0;left: 0;font-size: 12px;line-height: 20px;text-align: center">
                              {{item.tags}}
                            </h3>
                          </router-link>
                        </section>
                        <section class="bottom" style="padding-top: 10px;padding-left: 10px">
                          <h1 style="height:30px;
font-size:14px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:rgba(0,0,0,1);
line-height:18px;">{{item.title}}</h1>
                          <h3 style="font-size:12px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:#d5d5d5;
line-height:18px;margin-top: 10px">{{item.publishTime.split(' ')[0]}}</h3>
                        </section>

                      </h6>

                    </section>
                  </section>

                </div>
            </li>
            <li style="position: relative">
              <router-link to="/insight">
                {{$t('m.stimulation')}}<i class="el-icon-arrow-down"></i>
              </router-link>
              <div class="header_bottom_container_box animated fadeIn " style="display: none;" >
                <section style="display: flex;flex-direction: row;border: 1px solid #d5d5d5;border-top: none">
                  <section style="width: 230px;height:0px;background: white;display: flex;flex-direction: column;padding-left: 10px;border-right: 1px solid #d5d5d5">
                    <p  @mouseenter="xxx=1,getCoin()" :style="xxx==1?{color:'skyblue'}:''">{{$t('m.coin')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="xxx==1?{width: '170px'}:''"></span></p>
                    <p @mouseenter="xxx=2,getIco()" :style="xxx==2?{color:'skyblue'}:''">ICO<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="xxx==2?{width: '170px'}:''"></span></p>
                    <p @mouseenter="xxx=3,getCustor()" :style="xxx==3?{color:'skyblue'}:''">{{$t('m.custor')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="xxx==3?{width: '170px'}:''"></span></p>
                  </section>
                  <section style="width: 1170px;height:240px;background: white;display: flex;flex-direction: row;justify-content: start">
                    <h6 style="width: 234px;height:240px;background: white;border-right: 1px solid #d5d5d5" v-for="(item,index) in inSightList" class="animated fadeIn" :class="'delay-1-'+index+'s'" v-if="right_loading">
                      <section class="top black" style="height: 156px">
                        <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="border-top: none">
                          <img v-lazy="item.cover" alt="" style="width: 100%;height: 156px">
                          <h2 style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></h2>
                          <h3 style="width: 60px;height: 20px;background: rgba(0,0,0,.7);position: absolute;bottom: 0;left: 0;font-size: 12px;line-height: 20px;text-align: center">
                            {{item.tags}}
                          </h3>
                        </router-link>
                      </section>
                      <section class="bottom" style="padding-top: 10px;padding-left: 10px">
                        <h1 style="height:30px;
font-size:14px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:rgba(0,0,0,1);
line-height:18px;">{{item.title}}</h1>
                        <h3 style="font-size:12px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:#d5d5d5;
line-height:18px;margin-top: 10px">{{item.publishTime.split(' ')[0]}}</h3>
                      </section>

                    </h6>

                  </section>
                </section>

              </div>

            </li>
            <li style="position: relative" @mouseenter="getActList()">
              <router-link to="/conference">
                {{$t('m.activity')}}<i  class="el-icon-arrow-down"></i>
              </router-link>
              <div style="display: none;z-index: 999" class="animated fadeIn">
                <section style="width: 1400px;height:240px;background: white;display: flex;flex-direction: row;justify-content: start;border: 1px solid #d5d5d5;border-top: none">
                  <h6 style="width: 234px;height:240px;background: white;border-right: 1px solid #d5d5d5" v-for="(item,index) in activityList" class="animated fadeIn" :class="'delay-1-'+index+'s'" v-if="right_loading">
                    <section class="top black" style="height: 156px">
                      <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="border-top: none">
                        <img v-lazy="item.cover" alt="" style="width: 100%;height: 156px">
                        <h2 style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></h2>
                        <h3 style="width: 60px;height: 20px;background: rgba(0,0,0,.7);position: absolute;bottom: 0;left: 0;font-size: 12px;line-height: 20px;text-align: center">
                          {{item.tags}}
                        </h3>
                      </router-link>
                    </section>
                    <section class="bottom" style="padding-top: 10px;padding-left: 10px">
                      <h1 style="height:30px;
font-size:14px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:rgba(0,0,0,1);
line-height:18px;">{{item.title}}</h1>
                      <h3 style="font-size:12px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:#d5d5d5;
line-height:18px;margin-top: 10px">{{item.publishTime.split(' ')[0]}}</h3>
                    </section>

                  </h6>

                </section>
              </div>

            </li>
            <li style="position: relative" @mouseenter="getMetting()">
              <router-link to="/airdrop">
                {{$t('m.airdrop')}}<i  class="el-icon-arrow-down" ></i>
              </router-link>
              <div style="display: none;z-index: 999" class="animated fadeIn">
                <section style="width: 1400px;height:240px;background: white;display: flex;flex-direction: row;justify-content: start;border: 1px solid #d5d5d5;border-top: none">
                  <h6 style="width: 234px;height:240px;background: white;border-right: 1px solid #d5d5d5" v-for="(item,index) in mettingList" class="animated fadeIn" :class="'delay-1-'+index+'s'" v-if="right_loading">
                    <section class="top black" style="height: 156px">
                      <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="border-top: none">
                        <img v-lazy="item.cover" alt="" style="width: 100%;height: 156px">
                        <h2 style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></h2>
                        <h3 style="width: 60px;height: 20px;background: rgba(0,0,0,.7);position: absolute;bottom: 0;left: 0;font-size: 12px;line-height: 20px;text-align: center">
                          {{item.tags}}
                        </h3>
                      </router-link>
                    </section>
                    <section class="bottom" style="padding-top: 10px;padding-left: 10px">
                      <h1 style="height:30px;
font-size:14px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:rgba(0,0,0,1);
line-height:18px;">{{item.title}}</h1>
                      <h3 style="font-size:12px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:#d5d5d5;
line-height:18px;margin-top: 10px">{{item.publishTime.split(' ')[0]}}</h3>
                    </section>

                  </h6>

                </section>
              </div>
            </li>
            <li><a href="javascript:;">{{$t('m.quotation')}}</a></li>
            <li>
              <router-link to="/video">
                {{$t('m.video')}}<i @mouseup="visible6=true,getInsiht()" class="el-icon-arrow-down" ref="searchMain4"></i>
              </router-link>

            </li>
            <li style="position: relative" @mouseenter="getSenior()">
              <router-link to="/noname">
                {{$t('m.vipInformation')}}<i class="el-icon-arrow-down"></i>
              </router-link>
              <div style="display: none;z-index: 999" class="animated fadeIn">
                <section style="width: 1400px;height:240px;background: white;display: flex;flex-direction: row;justify-content: start;border: 1px solid #d5d5d5;border-top: none">
                  <h6 style="width: 234px;height:240px;background: white;border-right: 1px solid #d5d5d5" v-for="(item,index) in seniorList" class="animated fadeIn" :class="'delay-1-'+index+'s'" v-if="right_loading">
                    <section class="top black" style="height: 156px">
                      <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="border-top: none">
                        <img v-lazy="item.cover" alt="" style="width: 100%;height: 156px">
                        <h2 style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></h2>
                        <h3 style="width: 60px;height: 20px;background: rgba(0,0,0,.7);position: absolute;bottom: 0;left: 0;font-size: 12px;line-height: 20px;text-align: center">
                          {{item.tags}}
                        </h3>
                      </router-link>
                    </section>
                    <section class="bottom" style="padding-top: 10px;padding-left: 10px">
                      <h1 style="height:30px;
font-size:14px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:rgba(0,0,0,1);
line-height:18px;">{{item.title}}</h1>
                      <h3 style="font-size:12px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:#d5d5d5;
line-height:18px;margin-top: 10px">{{item.publishTime.split(' ')[0]}}</h3>
                    </section>

                  </h6>

                </section>
              </div>
            </li>
            <li style="position: relative">
              <router-link to="/advancevip">
                {{$t('m.block_chain')}}<i  class="el-icon-arrow-down"></i>
              </router-link>
              <div class="header_bottom_container_box animated fadeIn " style="display: none;" >
                <section style="display: flex;flex-direction: row;border: 1px solid #d5d5d5;border-top: none">
                  <section style="width: 230px;height:0px;background: white;display: flex;flex-direction: column;padding-left: 10px;border-right: 1px solid #d5d5d5">
                    <p  @mouseenter="ddd=1,getall1()" :style="ddd==1?{color:'skyblue'}:''">{{$t('m.all1')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="ddd==1?{width: '140px'}:''"></span></p>
                    <p @mouseenter="ddd=2,getall2()" :style="ddd==2?{color:'skyblue'}:''">{{$t('m.all2')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="ddd==2?{width: '150px'}:''"></span></p>
                    <p @mouseenter="ddd=3,getall3()" :style="ddd==3?{color:'skyblue'}:''">{{$t('m.all3')}}<span style="display: inline-block;width: 0px;height: 3px;background: #608BB1;margin-left: 5px;transition: all 1s" :style="ddd==3?{width: '150px'}:''"></span></p>
                  </section>
                  <section style="width: 1170px;height:240px;background: white;display: flex;flex-direction: row;justify-content: start">
                    <h6 style="width: 234px;height:240px;background: white;border-right: 1px solid #d5d5d5" v-for="(item,index) in OneList" class="animated fadeIn" :class="'delay-1-'+index+'s'" v-if="right_loading">
                      <section class="top black" style="height: 156px">
                        <router-link :to="`/StimulationDetail?id=${item.categoryId}&&id1=${item.id}`" target='_blank' style="border-top: none">
                          <img v-lazy="item.cover" alt="" style="width: 100%;height: 156px">
                          <h2 style="width: 100%;height:100%;position: absolute;top: 0;transition: all .6s;" class="animated fade"></h2>
                          <h3 style="width: 60px;height: 20px;background: rgba(0,0,0,.7);position: absolute;bottom: 0;left: 0;font-size: 12px;line-height: 20px;text-align: center">
                            {{item.tags}}
                          </h3>
                        </router-link>
                      </section>
                      <section class="bottom" style="padding-top: 10px;padding-left: 10px">
                        <h1 style="height:30px;
font-size:14px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:rgba(0,0,0,1);
line-height:18px;">{{item.title}}</h1>
                        <h3 style="font-size:12px;
font-family:NotoSansCJKkr-Medium;
font-weight:500;
color:#d5d5d5;
line-height:18px;margin-top: 10px">{{item.publishTime.split(' ')[0]}}</h3>
                      </section>

                    </h6>

                  </section>
                </section>

              </div>
            </li>
            <li><a href="javascript:;">{{$t('m.Inauguration')}}</a></li>
            <li style="position: relative" ref="searchMain7"> <i class="el-icon-search" @click="togglePanel7" ></i>

            </li>
          </ul>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
  import * as apiRequest from '../api/index'
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        seniorList:[],
        mettingList:[],
        right_loading:true,
        www:1,
        xxx:1,
        ddd:1,
        ww:0,
        visible0:false,
        text: '',// 数组文字转化后的字符串
        lists: [

        ],
        lang1:'',
        noticeList:[],
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
        navBarFixed:false,
        visib:false,
        searchText:'',
        // show:true
        NewssList:[],
        inSightList:[],
        activityList:[],
        coinPriceList:[],
        OneList:[]
      }
    },
    methods: {
      getall1(){
        apiRequest.ContentList({
          type:'future-technology'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.OneList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      getall2(){
        apiRequest.ContentList({
          type:'chain'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.OneList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      getall3(){
        apiRequest.ContentList({
          type:'crypto'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.OneList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      getPrice(){
        axios.get('https://api.jinse.com/v4/market/index/recommends').then(data=>{
          this.coinPriceList = data.data
        })
      },
      getActList(){
        apiRequest.ContentList({
          type:'activity'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.activityList = data.data.slice(0,6)
              this.right_loading = true
            },10)
          }
        )
      },
      getMetting(){
        apiRequest.ContentList({
          type:'meeting'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.mettingList = data.data.slice(0,6)
              this.right_loading = true
            },10)
          }
        )
      },
      getSenior(){
        apiRequest.ContentList({
          type:'senior'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.seniorList = data.data.slice(0,6)
              this.right_loading = true
            },10)
          }
        )
      },
      //Coin
      getCoin(){
        apiRequest.ContentList({
          type:'currency'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.inSightList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      getIco(){
        apiRequest.ContentList({
          type:'ICO'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.inSightList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      getCustor(){
        apiRequest.ContentList({
          type:'exchange'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.inSightList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      //政策
      getPolicyList(){
        apiRequest.ContentList({
          type:'policy'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.NewssList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      //研究

      getResearch(){
        apiRequest.ContentList({
          type:'research'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.NewssList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      //科技
      getTechnology(){
        apiRequest.ContentList({
          type:'technology'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.NewssList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      //海外
      getOverseas(){
        apiRequest.ContentList({
          type:'overseas'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.NewssList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      //行情
      getMarket(){
        apiRequest.ContentList({
          type:'market'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.NewssList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      //人物
      getCharacter(){
        apiRequest.ContentList({
          type:'character'
        }).then(
          data=>{
            this.right_loading = false
            setTimeout(()=>{
              this.NewssList = data.data.slice(0,5)
              this.right_loading = true
            },10)
          }
        )
      },
      ToSearch(){
        // let routeData = this.$router.push(`/search?word=${this.searchText}`)
        let routeData = this.$router.resolve({ path: '/search', query: {  word: this.searchText } });
        window.open(routeData.href, '_blank');
      },
      topItem(){
        this.ww+=1;
        if(this.ww==4){
          this.ww=0
        }
      },
      bottomItem(){
        this.ww-=1;
        if(this.ww == -1){
          this.ww=4
        }
      },
      //公告
      getNotice(){
        apiRequest.ContentList({
          type:'notice'
        })
          .then(
            data=>{
              console.log(data)
              this.noticeList = data.data
              console.log('ccccccccccccc')
            }
          )
      },
      lang(){
        if(window.localStorage.lang == 'EN'){
          this.lang1 = 'English'
          console.log(this.lang1)
          console.log(window.localStorage.lang)
        }else if(window.localStorage.lang == 'CN'){
          this.lang1 = '简体中文'
          console.log(this.lang1)
          console.log(window.localStorage.lang)
        }else{
          this.lang1 = 'Korean'
          console.log(this.lang1)
          console.log(window.localStorage.lang)
        }
      },
      move() {
// 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
        let width = document.getElementById('node').getBoundingClientRect().width
        let box = document.getElementById('box')
        let copy = document.getElementById('copy')
        copy.innerText = this.text // 文字副本填充
        let distance = 0 // 位移距离
//设置位移
        setInterval(function () {
          distance = distance - 1
          // 如果位移超过文字宽度，则回到起点
          if (-distance >= 3000) {
            distance = 16
          }
          box.style.transform = 'translateX(' + distance + 'px)'
        }, 20)
      },
      togglePanel0 () {
        this.visible0 ? this.hide0() : this.show0()
      },
      show0 () {
        this.visible0 = true
        document.addEventListener('click', this.hidePanel0, false)
      },
      hide0 () {
        this.visible0 = false
        document.removeEventListener('click', this.hidePanel0, false)
      },
      hidePanel0 (e) {
        if (!this.$refs.searchMain0.contains(e.target)) {
          this.hide0()
        }},
      changeLanguage(){
        this.$confirm('언어를 전환할 수 있나요?', '제시', {
          confirmButtonText: '확인하다',
          cancelButtonText: '취소',
        }).then(() => {
          localStorage.clear();
            window.localStorage.setItem("lang",'CN');
            this.$i18n.locale = 'CN';//关键语句
            console.log(window.localStorage.lang)
            this.lang1 = '简体中文'
            this.$router.go(0)
        })
      },
      changeLanguage1(){
        this.$confirm('确定切换语言吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.clear();
          window.localStorage.setItem("lang",'KR');
            this.$i18n.locale = 'KR';//关键语句
            console.log(window.localStorage.lang)
            this.lang1 = 'Korean'
            this.$router.go(0)
        })
      },
      changeLanguage2(){
        this.$confirm('确定切换语言吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          localStorage.clear();
            window.localStorage.setItem("lang",'EN');
            this.$i18n.locale = 'EN';//关键语句
            console.log(window.localStorage.lang)
            this.lang1 = 'English'
            this.$router.go(0)

        })
        //   .catch(() => {
        //   this.$message({
        //     type: 'info',
        //   });
        // });
      },
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //  当滚动超过 130 时，实现吸顶效果
        if (scrollTop > 130) {
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
        document.addEventListener('mouseover', this.hidePanel, false)
      },
      hide () {
        this.visible = false
        document.removeEventListener('mouseout', this.hidePanel, false)
      },
      hidePanel (e) {
        if (!this.$refs.searchMain.contains(e.target)) {
          this.show()
        }
        else{
          this.hide()
        }
        },

      togglePanel7 () {
        this.visib ? this.hide7() : this.show7()
      },
      show7 () {
        this.visib = true
        document.addEventListener('click', this.hidePanel7, false)
      },
      hide7 () {
        this.visib = false
        document.removeEventListener('click', this.hidePanel7, false)
      },
      hidePanel7 (e) {
        if (!this.$refs.searchMain7.contains(e.target)) {
          this.hide7()
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
// 把父组件传入的arr转化成字符串
    mounted: function () {
      window.addEventListener('scroll', this.watchScroll)
      this.lang()
      this.move(),
      // console.log(this.$i18n)
      this.getNotice()
      this.getPolicyList()
      this.getPrice()
    },
// 更新的时候运动
    updated: function () {

    },
    //
    filters: {

      numFilter(value) {

        // 截取当前数据到小数点后三位

        let transformVal = Number(value).toFixed(2)

        let realVal = transformVal.substring(0, transformVal.length - 1)

        // num.toFixed(3)获取的是字符串

        return Number(realVal)

      }

    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  header {
    .header_top {
      height: 35px;
      line-height: 35px;
      background: rgba(0, 0, 0, 1);
    }
    .header_top1 {
      height: 30px;
      background: rgba(0, 0, 0, 1);
      display: flex;
      flex-direction: row;
      line-height: 30px;
      .header_top1_container{
        width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        .header_top1_left {
          width: 146px;
          p{
            font-size:12px;
            font-family:Notosans Font;
            color:rgba(255,255,255,1);
          }
        }
        .header_top1_center {
          display: flex;
          flex-direction: row;
          margin-left: 330px;
          width: 440px;
          p{
            font-size:12px;
            font-family:Notosans Font;
            color:rgba(255,255,255,1);
            margin: 0 13px;
          }
          span{
            font-size:12px;
            font-family:Notosans Font;
            color:rgba(255,255,255,1);
            cursor: pointer;
          }
        }
        .header_top1_right {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          .change_lang{
            width:72px;
            height:21px;
            background:rgba(47,104,147,1);
            /*border-radius:11px;*/
            line-height: 21px;
            cursor: pointer;
            p{
              font-size:12px;
              font-family:Notosans Font;
              font-weight:400;
              color:rgba(237,237,237,1);
              text-align: center;
            }
          }
          .lang{
            position: absolute;
            width:72px;
            height:46px;
            background:rgba(47,104,147,1);
            top: 25px;
            p{
              font-size:12px;
              font-family:Notosans Font;
              font-weight:400;
              color:rgba(237,237,237,1);
              text-align: center;
              height: 21px;
              line-height: 21px;
              transition: all .3s ease;
              cursor: pointer;
            }
            p:hover{
              background: white;
              color: rgba(47,104,147,1);
            }
          }
          margin-left: 270px;
          /*div{*/
            /*width:56px;*/
            /*height:23px;*/
            /*line-height: 23px;*/
            /*text-align: center;*/
            /*cursor: pointer;*/
            /*font-size:12px;*/
            /*font-family:NotoSansCJKkr-Regular;*/
            /*color:rgba(255,255,255,1);*/
          /*}*/
          .button1{
            background: #335F6B;
            margin-right: 6px;
          }
          .button2{
            border: 1px solid #394374;
          }
        }
        .header_top1_right1{
          display: flex;
          flex-direction: row;
          height: 35px;
          align-items: center;
          /*margin-left: 30px;*/
          margin-left: 30px;

          div{
            margin-right: 3px;
            cursor: pointer;
          }
          .icon1{
            height: 13px;
            width: 13px;
            background: url("../../static/images/facebook1.png");
            background-size: cover;
            align-items: center;
          }
          .icon2{
            height: 13px;
            width: 13px;
            background: url("../../static/images/twitte1.png");
            background-size: cover;
          }
          .icon3{
            height: 13px;
            width: 13px;
            background: url("../../static/images/shizi.png");
          }
          .icon4{
            height: 13px;
            width: 13px;
            background: url("../../static/images/yuan.png");
            background-size: cover;
          }
          .icon5{
            height: 19px;
            width: 19px;
            background: url("../../static/images/g++.png");
            background-size: cover;
          }
          .icon6{
            height: 15px;
            width: 15px;
            background: url("../../static/images/youtobe1.png");
            background-size: cover;
          }
        }
      }

    }
    .header_center {
      height: 100px;
      background: #28557F;
      .header_center_container {
        width: 1400px;
        margin: 0 auto;
        padding-top: 15px;
        .header_center_logo {
          margin: 0 auto;
          width: 281px;
          height: 69px;
          background-image: url("../../static/images/logo.png");
          background-size: cover;
          cursor: pointer;
        }
      }
    }
  }

  // 限制外框宽度，隐藏多余的部分
  .wrap {
    overflow: hidden;
  }

  // 移动框宽度设置
  #box {
    width: 80000%;
    height: 35px;
    line-height: 35px;
  }

  // 文字一行显示
  #box div {
    float: left;
  }

  // 设置前后间隔
  #marquee {
    margin: 0 16px 0 0;
    .marquee_logo {
      width: 24px;
      height: 24px;
      background-image: url("../../static/images/eth.png");
      background-size: cover;
      position: relative;
      top: 5.5px;
    }
    p {
      font-size: 14px;
      font-family:Notosans Font;
      color: rgba(86, 88, 114, 1);
      font-weight: 500;
      margin-left: 6px;
    }
    span {
      font-size: 12px;
      font-family:Notosans Font;
      color: rgba(86, 88, 114, 1);
      margin-left: 6px;
    }
    h6 {
      font-size: 12px;
      font-family:Notosans Font;
      color: rgba(0, 15, 215, 1);
      margin-left: 6px;
    }
  }

  // 获取宽度的节点，隐藏掉
  #node {
    position: absolute;
    z-index: -999;
    top: -999999px;
  }
  .header_bottom {
    height: 40px;
    background: #3677A8;
    width: 100%;
    box-sizing:border-box;
    .header_bottom_container{
      width: 1400px;
      margin: 0 auto;
      box-sizing:border-box;
      position: relative;
      ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        box-sizing:border-box;
        height: 40px!important;
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
            transition: all .4s;
          }
          p{
            font-size:14px;
            font-family:Notosans Font;
            color:black;
            cursor: pointer;
            text-decoration: none;
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
          div{
            position: absolute;
            left: -311px;
            top: 40px;
          }
        }
        li:nth-of-type(2){
          div{
            position: absolute;
            left: -379px;
            top: 40px;
          }
        }
        li:nth-of-type(3){
          div{
            position: absolute;
            left: -471px;
            top: 40px;
          }
        }
        li:nth-of-type(4){
          div{
            position: absolute;
            left: -564px;
            top: 40px;
          }
        }
        li:nth-of-type(7){
          div{
            position: absolute;
            left: -779px;
            top: 40px;
          }
        }
        li:nth-of-type(8){
          div{
            position: absolute;
            left: -871px;
            top: 40px;
          }
        }
        li:first-of-type:hover>div{
          display: block!important;
        }
        li:nth-of-type(2):hover>div{
          display: block!important;
          /*height: 240px!important;*/
        }
        li:nth-of-type(3):hover>div{
          display: block!important;
        }
        li:nth-of-type(4):hover>div{
          display: block!important;
        }
        li:nth-of-type(7):hover>div{
          display: block!important;
        }
        li:nth-of-type(8):hover>div{
          display: block!important;
        }
        li:last-of-type{
          padding-left: 20px;
          font-size: 20px;
          font-weight: 500;
          padding-top: 5px;
        }
        li:last-of-type:hover>i{
          color: #000;
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
        top: 40px;
        .header_bottom_container_box_left{
          width: 230px;
          height: 240px;
          padding: 22px;
          background: yellow;
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
          width: 1170px;
          height: 240px;
          background: #000fd7;
          ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 240px;
            width: 1170px;
            li{
              width: 234px;
              margin: 0!important;
              color:rgba(0,0,0,1) !important;
              div{
                width: 234px;
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
    /*border-width: 50%;*/
  }
  .navBarWrap {
    position:fixed;
    top:0;
    z-index:999;
  }
  active3{
    color: deepskyblue!important;
  }
  .black{
    position: relative;
  }
  .black:hover h2{

    background: rgba(0,0,0,0.5);
  }
  .active_width{
    width: 170px!important;
  }

</style>
