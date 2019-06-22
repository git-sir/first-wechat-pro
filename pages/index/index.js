//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../list/list'
    })
  },
  onLoad: function (query) {
    console.log("index.js --> onLoad --> 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。")
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    // Do something when page ready.
    console.log("index.js --> onReady --> 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。")
  },
  onShow: function () {
    // Do something when page show.
    console.log("index.js --> onShow --> 页面显示 / 切入前台时触发。")
  },
  onHide: function () {
    // Do something when page hide.
    console.log("index.js --> onHide --> 页面隐藏/切入后台时触发。 如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。")
  },
  onUnload: function () {
    // Do something when page close.
    console.log("index.js --> onUnload --> 页面卸载时触发。如wx.redirectTo或wx.navigateBack到其他页面时。")
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
    console.log("index.js --> onPullDownRefresh --> 监听用户下拉刷新事件。")
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log("index.js --> onReachBottom --> 监听用户上拉触底事件。")
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    console.log("index.js --> onShareAppMessage --> 监听用户点击页面内转发按钮（button 组件 open-type='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮.")
  },
  onPageScroll: function () {
    // Do something when page scroll
    console.log("index.js --> onPageScroll --> 监听用户滑动页面事件。")
  },
  onResize: function () {
    // Do something when page resize
    console.log("index.js --> onResize --> 小程序屏幕旋转时触发。")
  },
  onTabItemTap(item) {
    console.log("index.js --> onTabItemTap --> 点击 tab 时触发。")
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
