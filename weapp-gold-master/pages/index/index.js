//index.js
var root = getApp()
Page({
  // data
  data: {
    timeLine: root.globalData.timeline.data
  },
  // lifecycle
  onLoad () {
    console.log('timeline onLoad')
  },
  // methods
  touchEntry (e) {
    wx.navigateTo({
      url: '../entry/entry?index=' + e.currentTarget.dataset.index,
      success: function(res){
        // success
        console.log('res: ', res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  contentLimit (text) {
    console.error('text: ', text)
    return '123'
  },
  mixcontent(text) {
    return text
  }
})
