// pages/audio2/audio2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxTime:0,
    nowTime:0
  },
  start(){
    wx.createAudioContext("llr").play()
  },
  stop(){
    wx.createAudioContext("llr").pause()
  },
  updateFn(e){
    console.log(e);
    
    this.setData({
      maxTime:e.detail.duration,
      nowTime:e.detail.currentTime
    })
    
  },
  assign(e){
    wx.createAudioContext("llr").seek(e.detail.value)
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