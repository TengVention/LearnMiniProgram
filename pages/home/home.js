// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.原生的方式发送网络请求
    this.get_data_option()

    //2.使用封装的request发送网络请求
    //Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://httpbin.org/post',
      method: 'POST'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_option: function() {
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      data: {
        name: 'dwc',
        age: 18
      },
      success: function (res) {
        console.log(res)
      }
    })
  }
})