//index.js
//获取应用实例
const app = getApp()
const url = 'https://qianshan.suitaquba.com/a/app/';

Page({
  data: {
    motto: 'Hello World',
    message: [],
    imgUrls: [],
    gate: [],
    food: [],
    native: [],
    hotel: [],
    zhinengdaoyou: [],
    autoplay: true,
    interval: 5000,
    indicatorColor: "rgba(255,255,255,1)",
    indicatorActiveColor: "#62d15b",
    duration: 1000,
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: url + 'banner?tbareaid=77bdba5ea6bc4d5483980889eb7e7538',
      method: 'GET',
      success: function (res) {
        that.setData({
          imgUrls: res.data.data
        })
      }
    }),
      wx.request({
      url: url + 'homePage?areaId=77bdba5ea6bc4d5483980889eb7e7538',
        method: 'GET',
        success: function (res) {
          that.setData({
            gate: res.data.data.gateList,
            food: res.data.data.foodList,
            message: res.data.data.messageList,
            native: res.data.data.nativeList,
            zhinengdaoyou: res.data.data.zhinengdaoyou,
            hotel: res.data.data.hotelList
          });
          wx.setStorageSync('indexData', res.data.data);

        }
      })
  },
})
