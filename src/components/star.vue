<template>
    <div class="star-module">
      <ul>
          <li v-for="item in itemClass" :class="[item, size]"></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "star",
        props: {
          num: {
            type: Number,
            default: 5
          },
          score: {
            type: Number,
            default: 4.3,
          },
          size: {
            type: String,
            default: ''
          }/*,
          foodScore: {
            type: Number
          }*/
        },
        computed: {
          itemClass(){
            let arr = []
            //计算星星个数(整数和半个)
            let on = Math.floor(this.score)
            let half = (this.score-on)*10
            while (arr.length<on) {
              arr.push('on')
            }
            if (half>4)arr.push('half')
            while (arr.length<this.num) {
              arr.push('off')
            }
            return arr;
          }
        }
      }
</script>

<style scoped lang="less">
  .star-module {
    top: 1.92rem;
    width: 100%;
    /*margin-bottom: .56rem;*/
    position: relative;
  }
  .star-module ul {
    list-style-type: none;
    overflow: hidden;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .star-module ul li {
    margin: .02rem;
    width: .36rem;
    height: .36rem;
    background: url("../assets/images/star24_off@2x.png") no-repeat left/cover;
  }
  .star-module ul .on {
    background-image: url("../assets/images/star24_on@2x.png");
  }
  .star-module ul .half {
    background-image: url("../assets/images/star24_half@2x.png");
  }
  .star-module ul .off {
    background-image: url("../assets/images/star24_off@2x.png");
  }
  .star-module ul .lg {
    width: .48rem;
    height: .48rem;
  }
  .star-module ul .md {
    width: .36rem;
    height: .36rem;
  }
  .star-module ul .xs {
    width: .24rem;
    height: .24rem;
  }
</style>
