<template>
    <div id="overlay" @click.self="$emit('close')">
        <div id="content" class="reserve" >
            <div class="reserve-calendar">
                <!-- <calendar/> -->
                <div>
                    <div class="calendar__head">
                        <div>
                            <button v-show="data.nowMonth < data.month" @click="changeMonth(-1)" class="calendar__head-btn">＜</button>
                        </div>
                        <div class="calendar__head-title">{{data.year}}年 {{data.month}}月</div>
                        <div>
                            <button v-show="data.nowMonth+2 > data.month" @click="changeMonth(1)" class="calendar__head-btn">＞</button>
                        </div>
                    </div>
                    <!-- <div class="calendar__body"></div> -->
                    <div v-html="data.calendarHTML" class="calendar__body"></div>
                </div>
            </div>
            <div class="reserve-reserveform">
              <reserveForm/>
            </div>
        </div>
        <!-- {{orderInfo}} -->
    </div>
</template>
<script lang="ts">
import { defineComponent, ref} from 'vue';
// import calendar from '../organisms/calendar.vue';
import reserveForm from '../organisms/reserveForm.vue';
// import { useStore } from 'vuex';

export default defineComponent({
    name: 'Reserve',
    props: [ 'orderInfo' ],
    components: {
        // calendar,
        reserveForm
    },
    // setup(props) {
        // const store = useStore()
        // store.dispatch('calendarAct')
        // console.log('props=> '+props.orderInfo)
        // eslint-disable-next-line
        // document.querySelector('.calendar__body')!.innerHTML= props.orderInfo
    // }
    setup(props) {
    // const store = useStore()
    let data = ref({
      calendarHTML: props.orderInfo,
      weeks : ['日', '月', '火', '水', '木', '金', '土'],
    //   date: ,
      year: 0,
      nowMonth: 0, 
      month: 0
    })
    console.log(typeof(props.orderInfo))
    // eslint-disable-next-line
    // let calendarFromStore = computed(() => store.state.calendarHTML)
    // let calendarHTML = calendarFromStore.value
    // console.log(calendarHTML)
    // onMounted(()=> {
    const date = new Date() //object
    data.value.year = date.getFullYear() //number
    data.value.nowMonth = date.getMonth() + 1 //number
    data.value.month = data.value.nowMonth
    console.log(data.value.year)
    // eslint-disable-next-line
    // document.querySelector('.calendar__body')!.innerHTML= calendarHTML.value
    // })
    console.log(data.value.year)
    
    const changeMonth = (index:number) => {
        console.log('click')
            data.value.month = data.value.month+index
            console.log(data.value.month)
            data.value.calendarHTML = ''
            const date = new Date() //object
            const startDate = new Date(data.value.year, data.value.month - 1, 1) // 月の最初の日を取得
            const endDate = new Date(data.value.year, data.value.month,  0) // 月の最後の日を取得
            const endDayCount = endDate.getDate() // 月の末日
            const startDay = startDate.getDay() // 月の最初の日の曜日を取得
            const lastMonthEndDate = new Date(data.value.year, data.value.month - 1, 0) // 前月の最後の日の情報
            const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
            let dayCount = 1 // 日にちのカウント
            data.value.calendarHTML += '<table class="calendar__body--main">'

            //曜日の行-------
            for (let i = 0; i < data.value.weeks.length; i++) {
            data.value.calendarHTML += '<th>' + data.value.weeks[i] + '</th>'
            }
            //日付の行-------
            for (let w = 0; w < 6; w++) {
            data.value.calendarHTML += '<tr>'
            for (let d = 0; d < 7; d++) {
                if (w == 0 && d < startDay) {
                    // 1行目で1日の曜日の前
                    let num = lastMonthendDayCount - startDay + d + 1
                    data.value.calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
                } else if (dayCount > endDayCount) {
                    // 末尾の日数を超えた
                    let num = dayCount - endDayCount
                    data.value.calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
                    dayCount++

                }else {
                    //tdタグの中
                    //今日----------
                    if( dayCount===date.getDate() && data.value.month === data.value.nowMonth ) {
                        data.value.calendarHTML += '<td class="calendar__body--today">'
                        data.value.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
                    }else {
                        //明日以降-----------------
                        data.value.calendarHTML += '<td>'
                        // calendarHTML += '<td class="calendar__body--event">'
                        data.value.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'

                        //予約状況の確認-------------
                        //今月と選択月が一緒か--------
                        if(data.value.month === data.value.nowMonth) {
                            //今日以降＋火曜日-----------
                            if((dayCount > date.getDate())) {
                                if(d === 2) {
                                    data.value.calendarHTML += '<div>ー</div>'
                                }else {
                                    data.value.calendarHTML += '<div>○</div>'
                                }
                            }
                        }else {
                            if(d === 2) {
                                data.value.calendarHTML += '<div>ー</div>'
                            }else {
                                data.value.calendarHTML += '<div>○</div>'
                            }
                        }
                    }
                    data.value.calendarHTML += '</td>'
                    dayCount++
                }
            }
            data.value.calendarHTML += '</tr>'
            }
            data.value.calendarHTML += '</table>'
            // eslint-disable-next-line
            // document.querySelector('.calendar__body')!.innerHTML = calendarHTML

    }

    return {
        // calendarHTML,
        data,
        changeMonth
    }
    }, 
    // mounted() {

    // // eslint-disable-next-line
    // document.querySelector('.calendar__body')!.innerHTML = this.calendarHTML

    // },
    
})
</script>
<style lang="scss">
@import '../../css/style.scss';

//モーダル設定
#overlay {
  /*要素を重ねた時の順番*/
  z-index: 9999;
  /*画面全体を覆う設定*/
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  /*画面の右側に要素を表示させる設定*/
//   padding-top: 150px;
  display: flex;
  align-items: flex-end;
//   justify-content: flex-end;
}
#content {
  z-index: 9998;
  width: 100%;
//   max-width: 600px;
//   min-width: 350px;
  height: 80%;
//   top: 100px;
  bottom: 0;
//   padding: 0;
//   background-color: rgba(240, 233, 224, 0.597);
  color: #673A15;
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  //アニメーション-----------------------
//   margin-top: 150px;
//   padding-top: 150px;
  animation-name: slideIn ;
  animation-duration: 1s;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.reserve {
    width: 100%;
    display: flex;
    // grid-template-rows: 800px ;
    // grid-template-columns: 350px auto;
    // background-color: $base_pink_brown;
    background-image: url(../../assets/back_reserve.png);
    background-size: cover;
    
}
.reserve-calendar {
    // grid-column: 1/2;
    // grid-column: auto;
    // width: 100%;
    // height: 50%;
    width: 40%;
    margin: 45px 20px 10px 20px;
    padding: 10px;
    background-color: $base_of;
    border-radius: 20px;
}
.reserve-reserveform {
    width: 60%;
    margin: 45px 20px 10px 20px;
    // padding: 10px;
    background-color: $base_of;
    border-radius: 20px;
}

//---------------------------------
.calendar__body {
    width: 100%;
    color: $base_pink_brown;
    // background-color: $base_of;
    // border-radius: 20px;
}

.calendar__head {
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin: 1rem 3rem;
    color: $base_brown;
}
.calendar__head-btn {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 9999px;
    color: $base_brown;
    font-weight: 700;
    background-color: $base_pink_brown-30;
    transition: 1s;
}
.calendar__head-btn:hover {
    border: 2px solid $base_brown;
    background-color: transparent;
}
.calendar__head-title {
    font-weight: 600;
    font-size: x-large;
}
.calendar__body--main {
    width: 350px;
    height: 350px;
    margin: 0 auto;
}
table {
    border-spacing: 0;
}
td {
    width: 50px;
    height: 50px;
    border: 1px solid $base_brown;
}
td:first-child {
    color: red;
}
td:last-child {
    color: royalblue;
}
td:nth-child(3) {
    color: #ccc;
}
td.calendar__body--disabled {
    color: #ccc;
}
.calendar__body--today {
    background-color: $base_cream;
}

</style>