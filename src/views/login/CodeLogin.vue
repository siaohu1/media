<template>
  <div>
    <div class="tab"></div>
    <section class="container">
      <div class="container_box">
        <div class="container_box_window">
          <div class="container_box_window_line"></div>
          <div class="container_box_window_content">
            <div class="container_box_window_content_top">
              <h1>手机验证码登录</h1>
              <span>立即注册</span>
            </div>
            <div class="container_box_window_content_center">
              <div class="container_box_window_content_center_top">
                <div class="container_box_window_content_center_top_left">
                  <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        + 86<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>+ 86</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
                <div class="container_box_window_content_center_top_right">
                  <input type="text" placeholder="请输入手机号码">
                </div>
              </div>
              <div class="container_box_window_content_center_bottom">
                <div class="container_box_window_content_center_bottom_left">
                  <input type="password" style="" placeholder="请输入验证码">

                </div>
                <div class="container_box_window_content_center_bottom_right">
                  <p>获取验证码</p>
                </div>
              </div>
            </div>
            <div class="container_box_window_content_center_submit">
              <p>登录</p>
            </div>
            <div class="container_box_window_content_bottom">
              <router-link to="/login">
                <span>账号密码登录</span>
              </router-link>
              <span>忘记密码</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped lang="less">
  .tab{
    height: 30px;
    background: #3677A8;
  }
  input::-webkit-input-placeholder {
    color: rgba(102, 102, 102, 1);
    /*text-align: center;*/
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(102, 102, 102, 1);
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(102, 102, 102, 1);
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(102, 102, 102, 1);
  }

  .container {
    height: 705px;
    background: #fff;
    .container_box {
      width: 1400px;
      margin: 0 auto;
      padding-top: 89px;
      .container_box_window {
        width: 422px;
        height: 403px;
        background: rgba(251, 251, 251, 1);
        border-radius: 10px;
        box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.25);
        margin: 0 auto;
        .container_box_window_line {
          height: 7px;
          background: #3677A8;
          border-top-left-radius: 7px;
          border-top-right-radius: 7px;
        }
        .container_box_window_content {
          padding: 28px 41px 0px 41px;
          background: rgba(251, 251, 251, 1);
          .container_box_window_content_top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 42px;
            line-height: 42px;
            h1 {
              font-size: 20px;
              font-family: PingFangSC-Regular;
              color: rgba(51, 51, 51, 1);
            }
            span {
              font-size: 14px;
              font-family: PingFangSC-Regular;
              color: rgba(102, 102, 102, 1);
              cursor: pointer;
            }
          }
          .container_box_window_content_center {
            margin-top: 50px;
            .container_box_window_content_center_top {
              height: 40px;
              border-bottom: 1px solid rgba(181, 181, 181, 1);
              display: flex;
              flex-direction: row;
              .container_box_window_content_center_top_left{
                width: 58px;
                height: 40px;
                line-height: 40px;
              }
              .container_box_window_content_center_top_right{
                height: 40px;
                width: 282px;
                input{
                  width: 100%;
                  height: 100%;
                  border: none;
                  font-size: 16px;
                  font-family: PingFangSC-Regular;
                  outline: none;
                  background: transparent;
                }
              }
            }
            .container_box_window_content_center_bottom {
              display: flex;
              flex-direction: row;
              margin-top: 19px;
              .container_box_window_content_center_bottom_left {
                width: 241px;
                height: 40px;
                border-bottom: 1px solid rgba(181, 181, 181, 1);
                input {
                  width: 100%;
                  height: 100%;
                  border: none;
                  font-size: 16px;
                  font-family: PingFangSC-Regular;
                  text-indent: 60px;
                  outline: none;
                  background: transparent;
                }
              }
              .container_box_window_content_center_bottom_right {
                width: 98px;
                height: 40px;
                background: rgba(54, 119, 168, 1);
                border-radius: 20px;
                cursor: pointer;
                /*box-shadow:NaNpx NaNpx NaNpx NaNpx rgba(0,0,0,0.1);*/
                p {
                  font-size: 14px;
                  font-family: HiraginoSansGB-W3;
                  color: rgba(255, 255, 255, 1);
                  line-height: 40px;
                  text-align: center;
                }
              }
            }
          }
          .container_box_window_content_center_submit {
            height: 40px;
            background: rgba(54, 119, 168, 1);
            border-radius: 20px;
            margin-top: 42px;
            cursor: pointer;
            p {
              font-size: 14px;
              font-family: PingFangSC-Regular;
              color: rgba(255, 255, 255, 1);
              text-align: center;
              line-height: 40px
            }
          }
          .container_box_window_content_bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 42px;
            line-height: 42px;
            padding-top: 20px;
            span {
              font-size: 14px;
              font-family: HiraginoSansGB-W3;
              color: rgba(102, 102, 102, 1);
              cursor: pointer;
            }
            a{
              text-decoration: none;
            }
          }
        }
      }
    }
  }
</style>
