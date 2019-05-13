<template>
  <div class="box">
<!--    <img src="go.jpg" alt="">-->
    <button class="bt" @click="toRoute">点击进入</button>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    methods: {
      toRoute(){
        this.$router.push({
          name: 'index'
        })
      }
    }
  }
</script>

<style scoped lang="less">
   .box{
      position: fixed;
     width: 100vw;
     height: 100vh;
     background-image: url('../assets/go3.png');
     background-size: 100vw 100vh;
  }
  /*img {*/
  /*  width: 7.5rem;*/
  /*  position: fixed;*/
  /*}*/

  .bt {
    background: transparent;
    border: 1px solid white;
    color: white;
    font-size: 0.36rem;
    border-radius: 10px;
    position: absolute;
    bottom: 1.5rem;
    height: 1rem;
    width: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
