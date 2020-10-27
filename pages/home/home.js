// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   swiperData:[],
   bgNum:0,
   bgColor:"#f34646",
   category:[],
   newsList:["新闻1","新闻2","新闻3","新闻4","新闻5"]
  },
  fn(e){
    let index=e.detail.current;
    this.setData({
      bgColor:this.data.swiperData[index].bgColor
    })

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    let that=this;
    wx.request({
      url: 'https://x.dscmall.cn/api/app/home',
      success(res){
        // console.log(res.data.data[3].data.list);
        that.setData({
          // swiperData:res.data.data[2].data.list,
          // category:res.data.data[3].data.list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})