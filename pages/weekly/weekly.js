Page({
  data: {
    weeklyMovieList: [
      {
        id: 1302425,
        name: "阿凡达",
        comment: "派遣到潘多拉（Pandora）的截瘫海军陆战队员执行一项独特的任务，在遵循他的命令与保护他认为是他的家园的世界之间陷入了困境。",
        imagePath: "/images/avatar2009.png",
        isHighlyRecommended: true
      },
      {
        id:78,
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "/images/jf.jpg",
        isHighlyRecommended: false
      },
      {
        id:79,
        name: "泰坦尼克号",
        comment: "沉没的大船",
        imagePath: "/images/titanic.png",
        isHighlyRecommended: true
      }
    ],
    count: 123,
    score: 61,
    currentIndex: 0
  },
  onLoad: function(options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  f0: function(event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },
  f1: function(event) {
    let movidId = event.currentTarget.dataset.movieId
    console.log(movidId)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movidId,
    })
  }
})