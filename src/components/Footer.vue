<template>
  <footer>
    <section>
      <div class="container">
        <div class="footer_top">
          <div class="footer_top_logo"></div>
          <div class="footer_top_content">
            <p>뉴스 | 인사이트 | 컨퍼런스 | 시세 | 동영상 | 고급정보 | 블록체인101 | 체인 | 포럼 | 이벤트</p>
            <p>기사제보 | 광고문의</p>
            <p>Copyright ⓒ ChainNews. All Rights Reserved.</p>
            <p> 법인명 : (주)크립터스   |   주소 : 서울특별시 강남구 삼성동 141-35 남경빌딩 12층</p>
            <p>인터넷신문등록번호 : 서울 아 04906   |   등록일자 : 2018.08.31   |   발행인 · 편집인 : 김지혁   |   개인정보 책임자 : 권준섭</p>
            <p>chainnews.kr의 모든 컨텐츠와 기사는 저작권법의 보호를 받은바, 무단 전재, 복사, 배포 등을 금합니다.</p>
            <p>대표전화 : 02-557-0501 / 광고문의 : 02-557-0501 / info@chainnews.kr</p>
          </div>
          <div class="footer_top_window">
            <div class="footer_top_window_left">
              <input type="text" placeholder="Email">
            </div>
            <div class="footer_top_window_right">
              <span>구독하기</span>
            </div>
          </div>
          <div class="footer_top_icon">
            <div class="icon1"></div>
            <div class="icon2"></div>
            <div class="icon3"></div>
            <div class="icon4"></div>
            <div class="icon5"></div>
            <div class="icon6"></div>
          </div>
        </div>
        <div class="footer_bottom">
          <p>2018. All Right Reserved. Design and Developed by Cryptus</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  footer{
    section{
      background: black;
      .container{
        width: 1400px;
        margin: 0 auto;
        .footer_top{
          height: 454px;
          padding-top: 20px;
          .footer_top_logo{
            width: 281px;
            height: 69px;
            background-image: url("../../static/images/logo.png") ;
            background-size: cover;
            margin: 0 auto;
          }
          .footer_top_content{
            width:591px;
            height:136px;
            font-size:13px;
            font-family:NotoSansCJKkr-Regular;
            color:rgba(157,157,157,1);
            line-height:20px;
            margin: 20px auto 0 auto;
            p{
              text-align: center;
            }
          }
          .footer_top_window{
            width:366px;
            height:53px;
            background: #4C575C;
            margin: 38px auto 0 auto;
            display: flex;
            flex-direction: row;
            .footer_top_window_left{
              input{
                height: 53px;
                width: 256px;
                border: none;
                outline: none;
                font-size:16px;
                font-family:NotoSansCJKkr-Regular;
                font-weight: 500;
                text-indent: 20px;
                color: #ADB4B8;
                background: transparent;
              }
            }
            .footer_top_window_right{
              width: 110px;
              height: 45px;
              line-height: 45px;
              background: #F2C04E;
              position: relative;
              top: 4px;
              right: 4px;
              text-align: center;
              cursor: pointer;
              span{
                font-size:14px;
                font-family:NotoSansCJKkr-Regular;
                color:rgba(7,7,7,1);
              }
            }
          }
          .footer_top_icon{
            width: 366px;
            height: 44px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 25px auto 0 auto;
            div{
              height: 44px;
              width: 44px;
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
        .footer_bottom{
          height: 40px;
          line-height: 40px;
        }
        p{
          font-size:10px;
          font-family:NotoSansCJKkr-Regular;
          color:rgba(112,112,112,1);
          text-align: center;
        }
      }
    }
  }
</style>
