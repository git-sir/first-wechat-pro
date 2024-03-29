//app.js
App({
  onLaunch: function () {
    console.log("App.js --> onLaunch --> 小程序初始化完成时触发，全局只触发一次。参数也可以使用 wx.getLaunchOptionsSync 获取。")
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow(options) {
    // Do something when show.
    console.log("App.js --> onShow --> 小程序启动，或从后台进入前台显示时触发。也可以使用 wx.onAppShow 绑定监听。")
  },
  onHide() {
    // Do something when hide.
    console.log("App.js --> onHide --> 小程序从前台进入后台时触发。也可以使用 wx.onAppHide 绑定监听。")
  },
  onError(msg) {
    console.log("App.js --> onError --> 小程序发生脚本错误或 API 调用报错时触发。也可以使用 wx.onError 绑定监听。")
    console.log(msg)
  },
  onPageNotFound(res) {
    console.log("App.js --> onPageNotFound --> 小程序要打开的页面不存在时触发。也可以使用 wx.onPageNotFound 绑定监听。")
    wx.redirectTo({
      url: 'pages/...'
    }) // 如果是 tabbar 页面，请使用 wx.switchTab
  },
  globalData: {
    userInfo: null
  }
})