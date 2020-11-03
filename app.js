const TOKEN = 'token'

App({
  globalData: {
    token: ''
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

    //1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    //2.判断token是否有值
    if (token && token.length !== 0) {
      //已经有token验证token是否过期
      this.check_token(token)
    } else{
      //没有token，进行登录操作
      this.login()
    }

    //登录操作
  },
  check_token(token) {
    console.log('执行了token检查操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },success: res => {
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token;
        } else {
          console.log('token无效')
          this.login()
        }
      },fail: err=> {
        console.log(err)
      }
    })
  },
  login() {
    console.log('执行登录操作')
    wx.login({
      //code只有5分钟有效期
      success:  (res) => {
        //1.获取code
        const code = res.code;

        //2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token;

            //2.将token保存在globalData中
            this.globalData.token = token;
            
            //3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
