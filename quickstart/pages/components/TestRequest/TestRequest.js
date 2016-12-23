const Promise = require('../../../res/js/bluebird.core.js')
Page({
  data:{
  },
  onLoad:function(options){
    console.log('Promise ', Promise)

    wx.request({
      url: 'https://sec-m.ctrip.com/restapi/soa2/10705/PostPositiveXSearch?_fxpcqlniredt=09031096310342926632',
      data: {
    "OrderId": -2551803290,
    "Channel": 3,
    "Passengers": [
        {
            "Type": 1,
            "Count": 2
        },
        {
            "Type": 2,
            "Count": 0
        }
    ],
    "ReturnResourceNum": 20,
    "PageIndex": 1,
    "OrderSegmentSearch": {
        "OrderSegments": [
            {
                "StartDate": "2016-12-22",
                "EndDate": "2016-12-22",
                "CityId": 2,
                "SegmentResourceState": [
                    {
                        "ResourceType": 4,
                        "TripStateType": 0
                    }
                ]
            },
            {
                "StartDate": "2016-12-24",
                "EndDate": "2016-12-24",
                "CityId": 1332,
                "SegmentResourceState": [
                    {
                        "ResourceType": 4,
                        "TripStateType": 0
                    }
                ]
            }
        ],
        "OrderSegmentNo": 2,
        "DepartureCityId": 2,
        "SalesCityId": 2
    },
    "Version": "7000",
    "head": {
        "cid": "09031096310342926632",
        "ctok": "",
        "cver": "1.0",
        "lang": "01",
        "sid": "8888",
        "syscode": "09",
        "auth": "3720AD760EC9FDE952CF7E73E2D43675A175F690780B05429FA1E00D070B54FF",
        "sauth": "4C0749ECB1534DA1B4343C2D4C58BC239E36D250BBA4E0FA90BEA2B5DCD23DBE",
        "extension": [
            {
                "name": "protocal",
                "value": "https"
            }
        ]
    },
    "contentType": "json"
},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
          
      }, // 设置请求的 header
      success: function(res){
        console.log('Success: ', res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
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
  onShareAppMessage: function() {
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})