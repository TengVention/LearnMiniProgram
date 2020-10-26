// pages/home/home.js
Page({

  data: {
    message: '哈哈哈',
    list: []
  },
  onLoad() {
    console.log('onLoad')
    wx.request({
      //
      url: 'http://123.207.32.32:8000/recommend',
      success: (res) => {
        console.log(res)
        // const data = res.data.data.list;
        // this.setData({
        //   list: data
        // })
      }
    })
  },
  onShow() {
    console.log('onShow')
  },
  onHide() {
    console.log('onHide')
  },
  onUnload() {
    console.log('onUnload')
  },
  onReady() {
    console.log('onReady')
  },
  handlerViewClick() {
    console.log("被点击")
  },
  onPageScroll(obj) {
    console.log(obj)
  },
  onReachBottom() {
    console.log("到底了")
  },
  onPullDownRefresh() {
    console.log("下拉刷新")
  }

})