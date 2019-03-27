<template>
    <div>
        <div class="zq-waterfall">
            <div class="zq-waterfall-left">
                <div class="box" v-for="(item,index) in itemsA" :key="index">
                    <img :src="item.img" alt="">
                </div>
            </div>
            <div class="zq-waterfall-right">
                <div class="box" v-for="(item,index) in itemsB" :key="index">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { img: '@/assets/images/1.png'},
        { img: '@/assets/images/2.png'},
        { img: '@/assets/images/3.png'},
        { img: '@/assets/images/4.png'},
        { img: '@/assets/images/5.png'},
        { img: '@/assets/images/6.png'},
        { img: '@/assets/images/2.png'},
        { img: '@/assets/images/5.png'},
        { img: '@/assets/images/6.png'},
        { img: '@/assets/images/1.png'}
      ],
      itemsA: [],
      itemsB: []
    }
  },
  computed: {},
  mounted: function () {
    this.getData()
  },
  methods: {
    // 方法
    getImg (url, callback) {
      var img = new Image()
      img.src = url
      // 如果图片被缓存，则直接返回缓存数据
      if (img.compltet) {
        /* callback(img.width, img.height); */
        callback(img.width, img.height, Number(img.height) / Number(img.width))
      } else {
        // 完全加载完毕的事件
        img.onload = function () {
          /* callback(img.width, img.height); */
          callback(img.width, img.height, Number(img.height) / Number(img.width))
        }
      }
    },
    getData () {
      // 加载完页面执行的函数
      let boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
      let boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
      let that = this
      for (let val of this.items) {
        that.getImg(val.img, function (w, h, r) {
          console.log(w)
          boxA = document.getElementsByClassName('zq-waterfall-left')[0].clientHeight
          boxB = document.getElementsByClassName('zq-waterfall-right')[0].clientHeight
          if (boxA > boxB) {
            that.itemsB.push(val)
          } else {
            that.itemsA.push(val)
          }
        })
      }
    }
  },
  components: {
    // 组件
  }
}
</script>

<style scoped lang="stylus">
.zq-waterfall{
  padding: 0 0.1615rem;
  .box{
    margin-bottom: 0.333rem;
    img{
      width: 100%;
      border-radius: 0.133rem;
      display: block;
    }
  }
  .zq-waterfall-left{
    float: left;
    width: 4.5rem;
    margin: 0 0.1615rem 0.333rem;
    background-color: #ccc;
  }
  .zq-waterfall-right{
    float: left;
    width: 4.5rem;
    margin: 0 0.1615rem 0.333rem;
    background-color: #f47a91;
  }
}
</style>
