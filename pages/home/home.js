// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  handleShowToast() {
    wx.showToast({
      title: '你好',
      duration: 1000,
      icon: 'loading',
      mask: true,
      success: function () {
        console.log('展示弹窗成功')
      },
      fail: function () {
        console.log('展示弹窗失败')
      },
      complete: function () {
        console.log('完成函数调用')
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容哈哈哈',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',
      success: function(res) {
        console.log(res)
        if (res.cancel) {
          console.log('用户点击了取消按钮')
        }
        if (res.confirm) {
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      //必须手动调用hideLoading才会让loading消失
      wx.hideLoading({
        success: (res) => {
          console.log("加载完毕")
        },
      })
    }, 1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'orange'
    })
  },
  onShareAppMessage: function (options) {
    return {
      title: '你好，hello',
      path: '/pages/about/about',
      imageUrl: 'https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/65e2551f75ea1dfd868ffef9120ddfe4_254_144.jpg'
    }
  }
})