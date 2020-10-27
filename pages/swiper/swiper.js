// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabData:[{
      id:1,
      title:"推荐"
    },{
      id:2,
      title:"视频"
    },{
      id:3,
      title:"小说"
    },{
      id:4,
      title:"音乐"
    },{
      id:5,
      title:"动漫"
    },{
      id:6,
      title:"关注"
    },{
      id:7,
      title:"郑州"
    },{
      id:8,
      title:"抗疫"
    },{
      id:9,
      title:"其他"
    }],
    currentIndex:0,
    sceollLift:0
  },

  changeFn(e){
    this.setData({
      currentIndex:e.target.dataset.index
    })
  },
  swiperTabFn(e){
    let current=e.detail.current
    this.setData({
      currentIndex:current
    })
    if(current>=2&&current<7){
      this.setData({
        sceollLift:(current-2)*75
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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