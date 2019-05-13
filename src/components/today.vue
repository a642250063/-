<template>
    <div class="mode-sect" v-if="todady">
      <div class="xx">
        <div>
          <p>综合指数：</p><star :score="todady.all.replace('%' , '')/100*6" class="asd"></star>
        </div>
        <div>
          <p>健康指数：</p><star :score="todady.health.replace('%' , '')/100*6" class="asd"></star>
        </div>
        <div>
          <p>爱情指数：</p><star :score="todady.love.replace('%' , '')/100*6"  class="asd"></star>
        </div>
        <div>
          <p>财运指数：</p><star :score="todady.money.replace('%' , '')/100*6" class="asd"></star>
        </div>
        <div>
          <p>工作指数：</p><star :score="todady.work.replace('%' , '')/100*6" class="asd"></star>
        </div>
        <div>
          <span>速配星座：</span><span>{{todady.QFriend}}</span>
        </div>
        <div>
          <span>幸运颜色：</span><span>{{todady.color}}</span>
        </div>
        <div>
          <span>综合数字：</span><span>{{todady.number}}</span>
        </div>
      </div>
      <div class="heng"></div>
      <div class="yunshi">
        <div><img src="../assets/images/gaishu3.png" alt=""><span>今日概述</span></div>
        <p>{{todady.summary}}</p>
      </div>
      <div class="yunshi">
        <div><img src="../assets/images/yunshi3.png" alt=""><span>综合运势</span></div>
        <p>{{todady.summary}}</p>
      </div>
      <div class="yunshi">
        <div><img src="../assets/images/12.png" alt=""><span>每日推荐</span></div>
        <div>
          <img src="../assets/images/zhuanye.png" class="zhuanye" alt="">
        </div>
      </div>
    </div>
</template>

<script>
  import star from '@/components/star.vue'

  export default {
    name: 'today',
    components: {
    star,
  },
    props: {
      cname: '',
      time: '',
      todady: '',
    },
    created() {
      let arr = [this.cname, this.time];
      this.$store.dispatch('getData', arr)
      // console.log(this.todady)
    },
    computed:{
    }
  }
</script>

<style scoped lang="less">
  .mode-sect {
    width: 100vw;
    padding: 0 0.2rem 0 0.3rem;
  }

  .xx p,.xx span{
    opacity: 0.8;
  }
  .xx>div {
    display: inline-block;
    width: 40vw;
    padding:0 0 0 0.2rem;
    font-size: 0.26rem;
    height: 0.44rem;
    line-height: 0.44rem;
    margin-right: 0.2rem;
  }

  .heng {
    height: 1.5px;
    width: 6.9rem;
    margin-left: 0.1rem;
    background: black;
    opacity: 0.2;
    margin-top: 0.3rem;
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
    width: 6.5rem;
    line-height: 0.5rem;
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
<style>
  .xx ul {
    position: relative;
    top: -2.35rem !important;
    left: 2.2rem !important;
  }
</style>
