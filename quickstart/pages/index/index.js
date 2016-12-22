//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    componentList: [{
      name: 'scroll-view',
      url: '../components/scrollView/scrollView'
    }, {
      name: 'swiper',
      url: '../components/swiperView/swiperView'
    }, {
      name: 'base',
      url: '../components/base/base'
    }, {
      name: 'form',
      url: '../components/form/form'
    }, {
      name: 'medium',
      url: '../components/medium/medium'
    }],
    
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
