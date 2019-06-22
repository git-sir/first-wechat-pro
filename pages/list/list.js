// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
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
    var that = this;
    wx.request({
      url: 'http://localhost:8081/demo/area/list',
      method:'GET',
      data:{},
      success:function(result){
        /**
         * 注：resutl接收了服务端返回的数据，但小程序框架进行了封装，其结构如下（包含三个属性）：
         *  data	string/Object/Arraybuffer	开发者服务器返回的数据
            statusCode	number	开发者服务器返回的 HTTP 状态码
            header	Object	开发者服务器返回的 HTTP Response Heade
            其中，服务端返回的数据其实是包含在data属性中
         */
        if (result.data.code == 200){
          console.log("成功")
          that.setData({
            list: result.data.data
          })
        }else{
          //弹窗提示
          wx.showToast({
            title: result.data.message,
            icon:'',
            duration:2000
          })
        }
      }
    })
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

  },

  addArea: function () {
    wx.navigateTo({
      url: '../operation/operation'
    })
  },
  deleteArea: function (e) {
    console.log(e)
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除[' + e.target.dataset.areaname + ']吗？',
      success: function (sm) {
        if (sm.confirm) {
          wx.request({
            url: 'http://127.0.0.1:8081/demo/area/deleteById',
            data: { 'areaId': e.target.dataset.areaid },
            method: 'GET',
            success: function (res) {
              var code = res.data.code;
              var toastText = null
              if(code == 200){
                that.data.list.splice(e.target.dataset.index, 1);
                that.setData({
                  list: that.data.list
                });
                toastText = "删除成功";
              }else{
                toastText = "删除失败";
              }
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000
              });
            }
          })
        }
      }
    })
  }
})