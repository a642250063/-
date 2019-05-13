<template>
  <div v-if="todady">
    <div class="yunshi">
      <div><img src="../assets/images/qing3.png" alt=""><span>年度密码</span></div>
      <p>{{todady.mima.info}}</p>
      <p>年度说明</p>
      <p>{{todady.mima.text[0]}}</p>
    </div>
    <div class="yunshi">
      <div><img src="../assets/images/qing3.png" alt=""><span>事业运</span></div>
      <p>{{todady.career[0]}}</p>
    </div>
    <div class="yunshi">
      <div><img src="../assets/images/cai3.png" alt=""><span>爱情运</span></div>
      <p>{{todady.love[0]}}</p>
    </div>
    <div class="yunshi">
      <div><img src="../assets/images/work3.png" alt=""><span>财运</span></div>
      <p>{{todady.finance[0]}}</p>
    </div>
    <div class="yunshi">
      <div><img src="../assets/images/yunshi3.png" alt=""><span>每日推荐</span></div>
      <div>
        <img src="../assets/images/zhuanye.png" class="zhuanye" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'year',
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

<style scoped>
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
    font-size: 0.32rem;
    opacity: 0.7;
    width: 6.2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.1rem;
    margin-left: 0.4rem;
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
