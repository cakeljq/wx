Page({
  data: {
    // 商品详情介绍
    detailImg: [
      "http://127.0.0.1:3000/img/details01.jpg",
      "http://127.0.0.1:3000/img/details02.jpg",
    ],
  },
  // 收藏
  addLike() {
    this.setData({
      isLike: !this.data.isLike
    });
  },
  // 跳到购物车
  toCar() {
    wx.switchTab({
      url: '/pages/cart/cart'
    })
  },
  // 立即购买
  immeBuy() {
    wx.showToast({
      title: '购买成功',
      icon: 'success',
      duration: 2000
    });
  },
})