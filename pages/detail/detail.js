Page({
  data: {

  },
  onLoad: function(options) {
    console.log(options)
    console.log(options.id)
    this.setData({mid: options.id})
    let that = this
    wx.request({
      url: 'https://movie.querydata.org/api?id=1302425',
      success: function (res) {
        console.log(res)
        //that.setData({})
      }
    })
  }

})