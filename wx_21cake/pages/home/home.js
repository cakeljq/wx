// pages/home/home.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    navitems: [
      { id: 1, img_url: "http://172.163.9.81:3000/img/daohan01.jpg", title: "蛋糕" },
      { id: 2, img_url: "http://172.163.9.81:3000/img/daohan03.jpg", title: "面包" },
      { id: 3, img_url: "http://172.163.9.81:3000/img/daohan04.jpg", title: "下午茶" },
      { id: 4, img_url: "http://172.163.9.81:3000/img/daohan06.jpg", title: "周套餐" },
      { id: 5, img_url: "http://172.163.9.81:3000/img/daohan07.jpg", title: "订早餐" },
      { id: 6, img_url: "http://172.163.9.81:3000/img/daohan05.jpg", title: "更多" },
    ],
    list: [],
    product:[] 
  },
  //1:创建方法  getImageList 获取服务器上数据
  //2:在onload调用,将数据保存list
  getImageList: function () {
    wx.request({
      url: "http://172.163.9.81:3000/imagelist",
      success: (res) => {
        this.setData({ list: res.data })
      }
    })
  },
  getPriceList: function () {
    wx.request({
      url: "http://172.163.9.81:3000/products",
      success: (res) => {
      this.setData({ product: res.data })
      }
    })
  },
  onLoad: function (options) {
    this.getImageList();
    this.getPriceList();
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

  },
  //为八宫格中内容绑定点击事件
  handleJumpDangao: function (event) {
    //自定义属性
    var id = event.target.dataset.id;
      if (id == 1) {
        wx.navigateTo({
          url: "/pages/fenlei/fenlei"
        });
    } 
    if (id == 2) {
      wx.navigateTo({
        url: "/pages/fenlei/fenlei"
      });
  } 
  }
})