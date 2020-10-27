// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winH:0,
    listData:[],
    page:1
  },
  reqFn(){
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://x.dscmall.cn/api/goods/type_list',
      data: {
        page:this.data.page,
        size:10,
        type:"is_best"
      },
      success: (result) => {
        console.log(result);
        if(result.statusCode==200){
         let list= this.data.listData.concat(result.data.data)
         let page=++this.data.page
         this.setData({
           page,
           listData:list
         })
        }
        wx.hideLoading()
      },
     
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const res = wx.getSystemInfoSync()
    this.setData({
      winH:res.windowHeight
    })
    this.reqFn()
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