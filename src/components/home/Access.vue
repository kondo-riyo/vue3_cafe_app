<template>
    <div class="access">
        <div class="access__title">〜 Access 〜</div>
        <div class="access__body">
            <div class="access__body--shop">
                <img src="../../assets/shop-image.jpg" class="access__body--shop-img"/>
            </div>
            <div class="access__body-content">
                <div>
                    <img src="../../assets/logo_shop_name.png" class="access__body-content--img"/>
                </div>
                <div>〒160 - 0022 東京都新宿区新宿4-3-25 TOKYU REIT新宿ビル8F</div>
                <div>TEL. 01-2345-6789 </div>
                <div>OPEN. 11:00 ~ 15:00 (火曜定休日)</div>
                <div>最寄駅： 新宿三丁目駅</div>
            </div>
        </div>
        <div class="access__foot">
            <div class="access__foot-map">
                <div ref="map" class="access__foot-map--img"></div>
            </div>
            <div class="access__foot-reserve">
                <div class="access__foot-reserve--head">
                    <div>ー 席の予約はこちら ー</div>
                    <span>
                        ※1. ケーキの予約は電話にてお受けいたします<br/>
                        ※2. 予約の変更・キャンセルの際は、お手数ですが、電話にてお申し付けください
                    </span>
                </div>
                <div class="access__foot-reserve--body">
                    <!-- カレンダー -->

                    <!-- 月移動ボタンを表示 -->
                    <div class="calendar__head">
                        <div>
                            <button v-show="nowMonth < month" @click="changeMonth(-1)" class="calendar__head-btn">＜</button>
                        </div>
                        <div class="calendar__head-title">{{year}}年 {{month}}月</div>
                        <div>
                            <button v-show="nowMonth+2 > month" @click="changeMonth(1)" class="calendar__head-btn">＞</button>
                        </div>
                    </div>

                    <!-- カレンダー表示 -->
                    <div class="calendar__body"></div>
                </div>
            </div>
            <!-- <div>{{currentDate}}</div> -->
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

declare global {
     // eslint-disable-next-line
  interface Window { google: any; }
}
window.google = window.google || {};

export default defineComponent({
  name: 'Access',
  data(){
    return {
      myLatLng:{lat: 35.69398953161943, lng: 139.7075547373426},
      //カレンダー----------------
      calendarHTML: '',
      weeks : ['日', '月', '火', '水', '木', '金', '土'],
    //   date: ,
      year: 0,
      nowMonth: 0, 
      month: 0

    }
  },
  mounted(){

    //Google Map-----------------------------------------------------
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer);
        const map = new window.google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 16,
        });
        new window.google.maps.Marker({
          position: this.myLatLng,
          map,
        });
      }
    }, 500);  
    // },

    //calendar--------------------------------------------------------
    this.calendarHTML = ''
    // const weeks = ['日', '月', '火', '水', '木', '金', '土']
    const date = new Date() //object
    this.year = date.getFullYear() //number
    this.nowMonth = date.getMonth() + 1 //number
    this.month = this.nowMonth
    const startDate = new Date(this.year, this.month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(this.year, this.month,  0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    const lastMonthEndDate = new Date(this.year, this.month - 1, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
    let dayCount = 1 // 日にちのカウント
    this.calendarHTML += '<table class="calendar__body--main">'
        // console.log(date.getDay())
    //曜日の行-------
    for (let i = 0; i < this.weeks.length; i++) {
    this.calendarHTML += '<th>' + this.weeks[i] + '</th>'
    }

    //日付の行-------
    for (let w = 0; w < 6; w++) {
    this.calendarHTML += '<tr>'
                // console.log(w)
    for (let d = 0; d < 7; d++) {
        console.log(d)
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            let num = lastMonthendDayCount - startDay + d + 1
            this.calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            let num = dayCount - endDayCount
            this.calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
            dayCount++

        }else {
            //今日----------
            if( dayCount===date.getDate() && this.month === this.nowMonth ) {
                this.calendarHTML += '<td class="calendar__body--today">'
                this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
            } else if( d === 2 ) {
                this.calendarHTML += '<td class="calendar__body--disabled">' + dayCount + '</td>'
            }else {
                //明日以降-----------------
                this.calendarHTML += '<td>'
                // this.calendarHTML += '<td class="calendar__body--event">'
                this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
                if( dayCount > date.getDate() || this.month != this.nowMonth) {
                //予約状況の確認-------------
                this.calendarHTML += '<div>○</div>'
                }
            }
            this.calendarHTML += '</td>'
            dayCount++
        }
    }
    this.calendarHTML += '</tr>'
    }
    this.calendarHTML += '</table>'
    // eslint-disable-next-line
    document.querySelector('.calendar__body')!.innerHTML = this.calendarHTML

    },
    methods: {
        changeMonth(index:number) {
            this.month = this.month+index
            this.calendarHTML = ''
            const date = new Date() //object
            const startDate = new Date(this.year, this.month - 1, 1) // 月の最初の日を取得
            const endDate = new Date(this.year, this.month,  0) // 月の最後の日を取得
            const endDayCount = endDate.getDate() // 月の末日
            const startDay = startDate.getDay() // 月の最初の日の曜日を取得
            const lastMonthEndDate = new Date(this.year, this.month - 1, 0) // 前月の最後の日の情報
            const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
            let dayCount = 1 // 日にちのカウント
            this.calendarHTML += '<table class="calendar__body--main">'

            //曜日の行-------
            for (let i = 0; i < this.weeks.length; i++) {
            this.calendarHTML += '<th>' + this.weeks[i] + '</th>'
            }

            //日付の行-------
            for (let w = 0; w < 6; w++) {
            this.calendarHTML += '<tr>'
            for (let d = 0; d < 7; d++) {
                if (w == 0 && d < startDay) {
                    // 1行目で1日の曜日の前
                    let num = lastMonthendDayCount - startDay + d + 1
                    this.calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
                } else if (dayCount > endDayCount) {
                    // 末尾の日数を超えた
                    let num = dayCount - endDayCount
                    this.calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
                    dayCount++

                }else {
                    //今日----------
                    if( dayCount===date.getDate() && this.month === this.nowMonth) {
                        this.calendarHTML += '<td class="calendar__body--today">'
                        this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
                    } else {
                        //明日以降-----------------
                        this.calendarHTML += '<td>'
                        // this.calendarHTML += '<td class="calendar__body--event">'
                        this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
                        if( dayCount > date.getDate() || this.month != this.nowMonth) {
                        //予約状況の確認-------------
                        this.calendarHTML += '<div>○</div>'
                        }
                    }

                    this.calendarHTML += '</td>'
                    dayCount++
                }
            }
            this.calendarHTML += '</tr>'
            }
            this.calendarHTML += '</table>'
            // eslint-disable-next-line
            document.querySelector('.calendar__body')!.innerHTML = this.calendarHTML
            // if( index === -1 ) {
            // }
            // this.month = this.month+index
            // console.log(this.month)
        },
        clickDate() {
            console.log('click')
        }
        // nextMonth() {
        //     console.log('next')
        // }
    }
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.access {
    background-color: $base_cream;
    // height: 50rem;
}

.access__title {
    color: $base_brown;
    font-size: xxx-large;
    font-weight: bold;
}

.access__body {
    display: flex;
    margin: 1rem 17rem;
}
.access__body--shop {
    width: 40%;
    margin: 1rem;
}
.access__body--shop-img {
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 10px;
}
.access__body-content {
    width: 60%;
    margin: 1rem;
    color: $base_brown;
    font-size: small;
    font-weight: 600;
    text-align: start;
    div {
        margin: 0 0 0.5rem 0;
    }
}
.access__body-content--img {
    width: 55%;
}

//foot-----------------------
.access__foot {
    display: flex;
    width: 100%;
    margin: 0 auto;
}
.access__foot-map {
    width: 60%;
    // margin: 0.3rem;
}
.access__foot-map--img {
    width: 100%;
    height: 550px;
}
.access__foot-reserve {
     width: 40%;
     background-color: $base_of;
    // margin: 0.3rem 0.3rem 0.6rem 0.3rem;
}
.access__foot-reserve--head {
    background-color: $base_pink_brown;
    // height: 100px;
    color: white;
    text-align: start;
    padding: 0.3rem;
    transition: 0.5s;
    div {
        font-weight: 700;
        font-size: x-large;
        text-align: center;
        margin: 0 0 0.5rem 0;;
    }
    span {
        font-weight: 600;
        font-size: x-small;
        text-align: start;
    }
}
.access__foot-reserve--head:hover {
    background-color: $base_pink_brown-30;
    color: $base_brown;
}

.access__foot-reserve--body {

}

.calendar__body {
    width: 100%;
    color: $base_pink_brown;
    // margin: 0.3rem;
    // background-color: $base_cream;

    // display: grid;
    // grid-template-columns: repeat(7, 50px);
}
// .calendar__body-tile {
//     color: $base_brown
//     // border: 2px solid black;
//     // display: grid;
//     // grid-template-columns: repeat(7, 50px);
// }
// .calendar__body-tile--first {
//   grid-column-start: 3;
//   background-color: red;
// }

.calendar__head {
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin: 1rem 3rem;
    color: $base_pink_brown;
}
.calendar__head-btn {
    width: 40px;
    height: 40px;
    border: none;
    // border: 1px solid $base_pink_brown;
    // background-color: transparent;
    border-radius: 9999px;
    color: $base_pink_brown;
    font-weight: 700;
    background-color: $base_pink_brown-30;
    transition: 1s;
}
.calendar__head-btn:hover {
    border: 2px solid $base_pink_brown;
    background-color: transparent;
}
.calendar__head-title {
    font-weight: 600;
    font-size: x-large;
}
.calendar__body--main {
    width: 350px;
    height: 350px;
    // height: auto;
    margin: 0 auto;
    // border: 2px solid $base_pink_brown;
    // border-radius: 20px;
}
table {
    border-spacing: 0;
}
td {
    width: 50px;
    height: 50px;
    border: 1px solid $base_pink_brown;
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
// .calendar__body--dayCount:first-child  {
//     // background-color: rgba(255, 0, 0, 0.2);
// }
td.calendar__body--disabled {
    color: #ccc;
    // background-color: rgba(0, 0, 0, 0.029);
}
.calendar__body--today {
    background-color: $base_cream;
}
</style>