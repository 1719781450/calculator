var app = getApp()
Page({
  data: {
    greeting: 'hello, world',
    userInfo: {}
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//登录
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({userInfo: res.userInfo})
            that.update()
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    });
  }
})
