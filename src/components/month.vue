<template>
    <div v-if="todady">
      <div>
        <div class="yunshi">
          <div><img src="../assets/images/qing3.png" alt=""><span>综合运势</span></div>
          <p>{{todady.all}}</p>
        </div>
        <div class="yunshi">
          <div><img src="../assets/images/cai3.png" alt=""><span>健康运势</span></div>
          <p>{{todady.health}}</p>
        </div>
        <div class="yunshi">
          <div><img src="../assets/images/work3.png" alt=""><span>爱情运势</span></div>
          <p>{{todady.love}}</p>
        </div>
        <div class="yunshi">
          <div><img src="../assets/images/work3.png" alt=""><span>财运运势</span></div>
          <p>{{todady.money}}</p>
        </div>
        <div class="yunshi">
          <div><img src="../assets/images/work3.png" alt=""><span>工作运势</span></div>
          <p>{{todady.work}}</p>
        </div>
        <div class="yunshi">
          <div><img src="../assets/images/yunshi3.png" alt=""><span>每日推荐</span></div>
          <div>
            <img src="../assets/images/zhuanye.png" class="zhuanye" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'month',
    props: {
      cname: '',
      time: '',
      todady: '',
    },
    created() {
      let arr = [this.cname, this.time];
      this.$store.dispatch('getData',arr)
      // console.log(this.todady)
    }
  }
</script>

<style scoped lang="less">
  .yunshi {
    font-size: 0.36rem;
    padding: 0 0.4rem;
  }
  .yunshi img {
    width: 0.48rem;
    position: relative;
    top: 0.1rem;
    margin-right: 0.3rem;
  }
  .yunshi p {
    font-size: 0.28rem;
    opacity: 0.7;
    margin-left: 0.8rem;
    width: 6rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .zhuanye {
    width: 6.5rem !important;
    margin-top: 0.2rem;
  }
  .zhuanyediv {
    text-align: center;
  }
  .zhuanyediv img {
    width: 0.7rem;
    margin: 0.2rem 1.25rem;
  }
  .zhuanyediv span {
    font-size: 0.28rem;
    margin: 0 1.33rem;
  }
</style>
