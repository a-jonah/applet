// pages/images/images.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc:"https://img20.360buyimg.com/pop/s1180x940_jfs/t1/154865/36/2171/83305/5f86974dE973f530a/a385836e1cdd1ed8.jpg"
  },
  imgFn(e){
    console.log(e);
    
    let srcImg=this.data.imgSrc
    wx.previewImage({
      current: srcImg, // 当前显示图片的http链接
      urls: [srcImg,"https://img10.360buyimg.com/pop/s1180x940_jfs/t1/143339/12/11771/87752/5f927219E4b762739/8bf4f008c670a87c.jpg"] // 需要预览的图片http链接列表
    })
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