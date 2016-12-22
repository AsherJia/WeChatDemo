const initData = 'this is first line\nthis is second line'
const extraLine = [];

Page({
  data:{
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
      'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
      'info_circle', 'cancel', 'search', 'clear'
    ],
    text: initData,
    loadingPercent: 0,
    showFinished: false
  },
  onLoad:function(options){
  },
  onReady:function(){
  },
  onShow:function(){
  },
  onHide:function(){
  },
  onUnload:function(){
  },
  onPullDownRefresh: function() {
  },
  onReachBottom: function() {
  },
  add: function() {
    extraLine.push('+_+')
    this.setData({
      text: initData + '\n' + extraLine.join('\n')
    })
  },
  pop: function() {
    if (extraLine.length > 0) {
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
  },
  onShareAppMessage: function() {
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  loadingProgress: function() {
    const that = this
    const timer = setInterval(() => {
      if (that.data.loadingPercent < 100) {
        that.setData({
          loadingPercent: ++that.data.loadingPercent
        })
      } else {
        clearInterval(timer)
        console.log('Finished')
        that.setData({
          showFinished: true
        })
      }
    }, 10)
  }
})