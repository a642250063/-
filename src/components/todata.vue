<template>
  <div class="new">
    <div  id="object" class="fadeIn">
      <div class="head">
        <div @click="toRouter()" class="bacl">返回</div>
        <div class="head-sect">
          <img src="../assets/images/data1.png" alt="">
          <p>{{this.todayData.name}}</p>
<!--          <p>3.21-4.19</p>-->
        </div>
      </div>
      <div class="data">
        <swiper :options="swiperOption" ref="mySwiper" class="a123">
          <swiper-slide class="a321"> <!-- 今日-->
            <today :cname="toData" :time="today" :todady="todayData"></today>
          </swiper-slide>
          <swiper-slide><!-- 明日-->
            <today :cname="toData" :time="tomorrw" :todady="tomorrowData"></today>
          </swiper-slide>
          <swiper-slide><!-- 本周-->
            <week :cname="toData" :time="week" :todady="weekData"></week>
          </swiper-slide>
          <swiper-slide><!-- 下周-->
            <week :cname="toData" :time="nextweek" :todady="nextweekData"></week>
          </swiper-slide>
          <swiper-slide><!-- 本月-->
            <month :cname="toData" :time="month" :todady="monthData"></month>
          </swiper-slide>
          <swiper-slide><!-- 今年-->
            <year :cname="toData" :time="year" :todady="yearData"></year>
          </swiper-slide>
          <div id="a" class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="yunshi">
          <div class="zhuanyediv" @click="toRouter()">
            <div>
              <img src="../assets/images/index3.png" alt="">
              <img src="../assets/images/head3.png" alt="">
            </div>
            <div >
              <span>首页</span><span>头条</span>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div v-show="!todayData.name">-->
<!--      加载中-->
<!--    </div>-->
<!--    <div class="">-->

<!--    </div>-->
  </div>
</template>

<script>
  import today from '@/components/today.vue'
  import week from '@/components/week.vue'
  import month from '@/components/month.vue'
  import year from '@/components/year.vue'

  export default {
    name: 'todata',
    components: {
      today,
      week,
      month,
      year,
    },
    data () {
      return {
        // divX: '',
        data: '',
        toData:'',
        today: 'today',//天数传参
        tomorrw : 'tomorrow',
        week: 'week',
        nextweek: 'nextweek',
        month : 'month',
        year: 'year',
        todayData: '',//今天     数据保存
        tomorrowData: '',//明天
        weekData: '',//本周
        nextweekData: '',//下周
        monthData : '',//本月
        yearData: '',//今年
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className, text) {
              switch (index) {
                case 0:
                  text = '今日'
                  break
                case 1:
                  text = '明日'
                  break
                case 2:
                  text = '本周'
                  break
                case 3:
                  text = '下周'
                  break
                case 4:
                  text = '本月'
                  break
                case 5:
                  text = '本年'
                  break
              }
              return '<span class="' + className + '">' + (text) + '</span>'
            },

          },
        }
      }
    },
    watch:{
      toData(){
        setTimeout(()=>{
          console.log(this.$store.state)
          this.todayData=this.$store.state.today
          this.tomorrowData=this.$store.state.tomorrow
          this.weekData=this.$store.state.week
          this.nextweekData=this.$store.state.nextweek
          this.monthData=this.$store.state.month
          this.yearData=this.$store.state.year
          console.log(this.todayData)
            if(this.$store.state.today){
              //存储在浏览器防止刷新数据消除
              //先转换成JSON字符串
              console.log(1)
              window.localStorage.setItem('today',JSON.stringify(this.$store.state.today))
              window.localStorage.setItem('tomorrow',JSON.stringify(this.$store.state.tomorrow))
              window.localStorage.setItem('week',JSON.stringify(this.$store.state.week))
              window.localStorage.setItem('nextweek',JSON.stringify(this.$store.state.nextweek))
              window.localStorage.setItem('month',JSON.stringify(this.$store.state.month))
              window.localStorage.setItem('year',JSON.stringify(this.$store.state.year))
              console.log(this.todayData)
            }  else if(window.localStorage.today){       //再转换回JSON对象形式
              this.todayData=JSON.parse(window.localStorage.today)
              this.tomorrowData=JSON.parse(window.localStorage.tomorrow)
              this.weekData=JSON.parse(window.localStorage.week)
              this.nextweekData=JSON.parse(window.localStorage.nextweek)
              this.monthData=JSON.parse(window.localStorage.month)
              this.yearData=JSON.parse(window.localStorage.year)
              console.log(2)
              console.log(this.todayData)
            } else {
              console.log(9)
            }
        },500)

      }

    },
    created(){
      if (this.$route.params.toData) {
        this.toData=this.$route.params.toData
        window.localStorage.setItem('toData',this.toData)
      } else {
        this.toData=window.localStorage.toData
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // .getBoundingClientRect().left
      // this.$refs.journalUpward.getBoundingClientRect().top
      // this.divX=document.getElementsByClassName('swiper-slide')[2].getBoundingClientRect().
      this.swiper.slideTo(0, 1000, false)
    },
    methods :{
      // todivX() {
      //   console.log(this.divX)
      // },
      toRouter(){
        this.$router.push({
          name: 'index'
        })
      }
    }
  }

</script>

<style scoped lang="less">
  #object{
    visibility: hidden;
  }
  .bacl {
    color: white !important;
    position: absolute;
    font-size: 0.36rem;
    background: rgba(0,0,0,0.5);
    height: 0.6rem;
    line-height: 0.5rem;
    text-align: center;
    width: 1rem ;
    border-radius: 10px;
    top: 0.5rem;
    left: 0.3rem;
  }
  .head {
    background: url("../assets/images/today.png") no-repeat;
    background-size: 100vw;
    height: 5.34rem;
    width: 100vw;
  }
  .head-sect {
    position: absolute;
    top: 2.3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.22rem;
    text-align: center;
  }
  .head-sect p {
    margin: 0.1rem 0;
  }
  .data {
    font-size: 0.6rem;
  }
  #a {
    font-size: 0.36rem;
    position: absolute;
    top: 0;
  }
  .asd {
    top: -0.45rem;
    left: 0.7rem;
    border: 1px solid transparent;

  }

  .yunshi {
    font-size: 0.36rem;
    padding: 0 0.4rem;
    margin-top: 0.3rem;
    position: relative;
    top: -1rem;
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
  .swiper-container {
    position: relative;
    top: -1rem;
    padding-top: 0.8rem !important;
    /*border: 1px solid black;*/
  }
  .swiper-pagination-bullet-active {
    border: transparent !important;
    opacity: 1 !important;
  }
  .swiper-pagination-bullet{
    width: 1rem !important;
    background: transparent !important;
    height: 0.5rem !important;
    line-height: 0.5rem;
    position: relative;
    top: 0.05rem;
  }

</style>
