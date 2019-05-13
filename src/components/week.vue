<template>
    <div class="week" v-if="todady">
      <div>
        <div class="yunshi">
          <div><img src="../assets/images/qing3.png" alt=""><span>恋情</span></div>
          <p>{{todady.love}}</p>
        </div>
        <div class="yunshi">
          <div><img src="../assets/images/cai3.png" alt=""><span>财运</span></div>
          <p>{{todady.money}}</p>
        </div>
        <div class="yunshi">
          <div><img src="../assets/images/work3.png" alt=""><span>工作</span></div>
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
    name: 'week',
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
  .week {
    margin-left: 0.3rem;
  }
  .yunshi {
    font-size: 0.36rem;
    padding: 0 0.2rem;
    margin-top: 0.3rem;
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
    width: 5.4rem;
    line-height: 0.5rem;
    margin-top: 0.35rem;
    margin-bottom: 0.35rem;
    margin-left: 0.76rem;
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
    margin: 0.2rem 1.2rem;
  }
  .zhuanyediv span {
    font-size: 0.28rem;
    margin: 0 1.28rem;
  }
</style>
