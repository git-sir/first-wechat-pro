// pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaId: null,
    areaName: '',
    priority: '',
    addUrl: 'http://127.0.0.1:8081/demo/area/add',
    modifyUrl: 'http://127.0.0.1:8081/demo/area/modify'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {//对于onLoad函数，可以从其入参options中，获取上个页面跳转到此页面时，跳转路径中携带的参数
    var that = this;
    if (options.areaId == undefined) {
      return;
    }
    that.setData({
      areaId: options.areaId,
    });
    wx.request({
      url: 'http://127.0.0.1:8081/demo/area/getById',
      data: { "areaId": options.areaId },
      method: 'GET',
      success: function (res) {
        if(res.data.code == 200){
          var area = res.data.data;
          that.setData({
            areaName: area.areaName,
            priority: area.priority
          })
        }else{
          var text = res.data.message;
          wx.showToast({
            title: text,
            icon: '',
            duration: 2000
          });
        }
      }
    })
  },
  /**
   *  表单功能
   */
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value; //获取表数据
    var url = that.data.addUrl;  //默认url
    if (that.data.areaId != undefined) {
      formData.areaId = that.data.areaId;
      url = that.data.modifyUrl;
    }
    wx.request({
      url: url,
      data: formData,
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var code = res.data.code;
        if(code == 200){
          //关闭当前页并跳转到list页。会触发当前页的onUnload函数
          wx.redirectTo({
            url: '../list/list',
          })
        }else{
          console.log(res.data.message)
          wx.showToast({
            title: "操作失败",
            icon: '',
            duration: 3000
          });
        }
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
    // Do something when page close.
    console.log("operation.js --> onUnload --> 页面卸载时触发。如wx.redirectTo或wx.navigateBack到其他页面时。")
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