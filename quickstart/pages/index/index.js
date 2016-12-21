//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    componentList: [{
      name: 'view',
      url: '../index/index'
    }, {
      name: 'scroll-view',
      url: '../scrollView/scrollView'
    }],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    const that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log('UserInfo: ', userInfo)
    })
  },
  onReady: function() {
    console.log('onReady~~~~~~')
  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh~~~~~~~')
    
    setTimeout(() => {
      wx.stopPullDownRefresh()
      console.log('setTineout finished~~~')
    }, 1000)
  },
  onShareAppMessage: function() {
     return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/pages/index'
    }
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  go: function(event) {
    console.log('url: ', event.target.dataset.url)
    wx.navigateTo({
      url: event.target.dataset.url,
      success: function(ss){
        console.log('success ', ss)
      },
      fail: function(fail) {
        console.log('fail ', fail)
      },
      complete: function(complete){
        console.log('complete ', complete)
      }
    })
  }
})
