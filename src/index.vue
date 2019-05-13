<template>
  <div>
    <div class="xing">
      <p class="xing-p">选择星座</p>
      <div class="slideUp">
        <ul class="xing-ul">
          <li><div class="xing-div" @click="toData('白羊座')"><img src="./assets/images/xz/1.png" alt=""><p class="p1">白羊座</p><p class="p2">Aries</p><p class="p3">(3.21-4.19)</p></div></li>
          <li><div class="xing-div" @click="toData('金牛座')"><img src="./assets/images/xz/2.png" alt=""><p class="p1">金牛座</p><p class="p2">Taurus</p><p class="p3">(4.20-5.20)</p></div></li>
          <li><div class="xing-div" @click="toData('双子座')"><img src="./assets/images/xz/3.png" alt=""><p class="p1">双子座</p><p class="p2">Gemini</p><p class="p3">(5.21-6.21)</p></div></li>
          <li><div class="xing-div" @click="toData('巨蟹座')"><img src="./assets/images/xz/4.png" alt=""><p class="p1">巨蟹座</p><p class="p2">Kingcrab</p><p class="p3">(6.22-7.22)</p></div></li>
          <li><div class="xing-div" @click="toData('狮子座')"><img src="./assets/images/xz/5.png" alt=""><p class="p1">狮子座</p><p class="p2">Leo</p><p class="p3">(7.23-8.22)</p></div></li>
          <li><div class="xing-div" @click="toData('处女座')"><img src="./assets/images/xz/6.png" alt=""><p class="p1">处女座</p><p class="p2">Virgo</p><p class="p3">(8.23-9.22)</p></div></li>
          <li><div class="xing-div" @click="toData('天秤座')"><img src="./assets/images/xz/7.png" alt=""><p class="p1">天秤座</p><p class="p2">Libra</p><p class="p3">(9.23-10.23)</p></div></li>
          <li><div class="xing-div" @click="toData('天蝎座')"><img src="./assets/images/xz/8.png" alt=""><p class="p1">天蝎座</p><p class="p2">Scorpio</p><p class="p3">(10.24-11.22)</p></div></li>
          <li><div class="xing-div" @click="toData('射手座')"><img src="./assets/images/xz/9.png" alt=""><p class="p1">射手座</p><p class="p2">Sagittarius</p><p class="p3">(11.23-12.21)</p></div></li>
          <li><div class="xing-div" @click="toData('摩羯座')"><img src="./assets/images/xz/10.png" alt=""><p class="p1">摩羯座</p><p class="p2">Capricomus</p><p class="p3">(12.22-1.19)</p></div></li>
          <li><div class="xing-div" @click="toData('水瓶座')"><img src="./assets/images/xz/11.png" alt=""><p class="p1">水瓶座</p><p class="p2">Aquanrius</p><p class="p3">(1.20-2.18)</p></div></li>
          <li><div class="xing-div" @click="toData('双鱼座')"><img src="./assets/images/xz/12.png" alt=""><p class="p1">双鱼座</p><p class="p2">Pisces</p><p class="p3">(2.19-3.20)</p></div></li>
        </ul>
      </div>
      <button class="xing-back" @click="toRouter">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      clickdata: ''
    }
  },
  methods:{
    toRouter(){
      this.$router.push({
        name: 'loading'
      })
    },
    toData(x){
      this.clickdata=x
      this.$router.push({
        name: 'todata',
        params :{
          toData:this.clickdata
        }
      })
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
  .xing {
    border: 1px solid transparent;
    background-image: url("./assets/images/bg.png");
    height: 100vh;
    background-size: 100vw;
    background-repeat: no-repeat;
    text-align: center;
  }
  .xing-p {
    font-size: 0.34rem;
    color: #fefefe;
    margin-top: 0.8rem;
    border: 1px solid transparent;
  }
  .xing-back {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: 1px solid white;
    border-radius: 50%;
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
    color: white;
    font-size: 0.42rem;
  }
  .xing-ul {
    width: 7.5rem;
    margin-top: 0.7rem;
    margin-left: 0.42rem;
  }
  .xing-li {
    position: relative;
  }
  .xing-div{
    float: left;
    margin:0 0.65rem 0rem 0.25rem;
  }
  .xing-ul img {
    margin: 0 0.1rem;
    width: 1.21rem;
    height: 1.2rem;
  }
  .xing-ul p {
    font-size: 0.22rem;
    left: 0;
    color: white;
  }
  .p1 {
    font-size: 0.26rem;
  }
  .p2 {
    margin: 0.12rem 0 0.09rem 0;
  }
  .p3 {
    margin-bottom: 0.37rem;
  }
</style>
