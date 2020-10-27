// pages/selector/selector.js
var years=[],months=[],days=[]
for(let i=1990;i<=new Date().getFullYear();i++){
  years.push(i)
}
for(let i=1;i<=12;i++){
  let str=i+""
  months.push(str.padStart(2,"0"))
}
for(let i=1;i<=31;i++){
  let str=i+""
  days.push(str.padStart(2,"0"))
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timetable:["html","java","css","es6","css3"],
    index:0,
    time:"13:22",
    date:"2002-01-02",
    region:["云南省","昆明市","官渡区"],
    firstItem:"--请选择--",
    phoneData:[["华为","小米","苹果"],["华为p30","华为2Max","华为Plus5"]],
    phoneIndex:[0,0],
    years,
    months,
    days,
    dateIndex:[9999,1,2]
  },
  date2Fn(e){
    this.setData({
      dateIndex:e.detail.value
    })
  },
  columnFn(e){
    if(e.detail.column==0){
     var phoneList=this.data.phoneData
      switch (e.detail.value) {
        case 0:
          phoneList[1]=["华为p30","华为2Max","华为Plus5"]
          break;
        case 1:
          phoneList[1]=["小米10Max","红米node8","红米20max","小米30plus"]
          break;
        default:
          phoneList[1]=["苹果6","苹果7","苹果10"]
          break;
      }
      this.setData({
          phoneData:phoneList
      })
    }
  },
  phoneFn(e){
   this.setData({
     phoneIndex:e.detail.value
   })
  },
  regionFn(e){
    this.setData({
      region:e.detail.value
    })
  },
  tableFn(e){
    this.setData({
      index:e.detail.value
    })
  },
  timeFn(e){
    console.log(e);
    this.setData({
      time:e.detail.value
    })
  },
  dateFn(e){
    console.log(e);
    this.setData({
      date:e.detail.value
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