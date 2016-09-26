//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    iconSize:[20,30,40,50,60,70],
    iconColor:[
      'red','orange','yellow','green','rgb(0,255,255)','blue','purple'
    ],
    iconType:[
      'success','info','warn','waiting','safe_sucess','safe-warn',
      'success_circle','success_no_circle','waiting_circle','circle','download',
      'info_circle','cancle','search','clear'
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
