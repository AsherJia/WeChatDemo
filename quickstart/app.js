//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('onLaunch~~~~~~~')
  },
  onShow: function(){
    console.log('onShow~~~~~~~~')
    this.testFunction()
  },
  onHide: function() {
    console.log('onHide~~~~~~~')
  },
  onReady: function() {
    console.log('onReady~~~~~~')
  },
  testFunction: function() {
    console.log('test Function()')
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  onPullDownRefresh: function() {
    // 下拉刷新
    console.log('onPullDownRefresh~~~')
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log('onReachBottom~~~')
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  }
})