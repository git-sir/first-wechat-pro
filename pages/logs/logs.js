//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (query) {
    console.log("log.js --> onLoad --> 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。" + query)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function () {
    // Do something when page ready.
    console.log("log.js --> onReady --> 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。")
  },
  onShow: function () {
    // Do something when page show.
    console.log("log.js --> onShow --> 页面显示 / 切入前台时触发。")
  },
  onHide: function () {
    // Do something when page hide.
    console.log("log.js --> onHide --> 页面隐藏/切入后台时触发。 如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。")
  },
  onUnload: function () {
    // Do something when page close.
    console.log("log.js --> onUnload --> 页面卸载时触发。如wx.redirectTo或wx.navigateBack到其他页面时。")
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log("log.js --> onPullDownRefresh --> 监听用户下拉刷新事件。")
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log("log.js --> onReachBottom --> 监听用户上拉触底事件。")
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    console.log("log.js --> onShareAppMessage --> 监听用户点击页面内转发按钮（button 组件 open-type='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮.")
  },
  onPageScroll: function () {
    // Do something when page scroll
    console.log("log.js --> onPageScroll --> 监听用户滑动页面事件。")
  },
  onResize: function () {
    // Do something when page resize
    console.log("log.js --> onResize --> 小程序屏幕旋转时触发。")
  },
  onTabItemTap(item) {
    console.log("log.js --> onTabItemTap --> 点击 tab 时触发。")
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  //自定义组件事件处理函数。与log.wxml中的组件绑定，当事件被触发时，就会执行 log.js 中定义的事件处理函数。
  // Event handler.
  viewTap: function () {
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  }
})
