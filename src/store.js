import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let consName = '白羊座'
let type = 'today'  //今天today 明天tomorrow 本周week 下周nextweek 本月month 今年year
let key = '0db4a6757ed64712b97d60238e8c6bf1'
export default new Vuex.Store({
  state: {
    //放数据
    today: '',
    res: '',
    msg: '',
    tomorrow: '',
    week: '',
    nextweek: '',
    month : '',
    year: '',
  },
  mutations:{
    //修改state属性
    msg (state,val) {
      state.msg=val
    },
    res (state,val) {
      state.res=val
    },
    today (state,val) {
      state.today=val
    },
    tomorrow (state,val) {
      state.tomorrow=val
    },
    week(state,val) {
      state.week=val
    },
    nextweek (state,val) {
      state.nextweek=val
    },
    month (state,val) {
      state.month=val
    },
    year (state,val) {
      state.year=val
    },
  },
  actions: {
    getData(state) {
      //创建后请求数据
      // let  val =['白羊座','today']
      let val = arguments[1];
      axios.get(`/api/constellation/getAll?consName=${val[0]}&type=${val[1]}&key=0db4a6757ed64712b97d60238e8c6bf1`)
      //请求index数据
        .then((today) => {
          // state.commit('msg', today.data)
          state.commit(val[1], today.data)
          console.log(val[0])
          // window.localStorage.setItem(val[1],JSON.stringify(state.state))
          // console.log(state.state)
        })
        .catch(function (error) {
          console.log(2)
          console.log(error)
        })
    }
  }
})
