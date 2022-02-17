<template>
    <div>
        <div class="calendar__head">
            <div>
                <button v-show="nowMonth < month" @click="changeMonth(-1)" class="calendar__head-btn">＜</button>
            </div>
            <div class="calendar__head-title">{{year}}年 {{month}}月</div>
            <div>
                <button v-show="nowMonth+2 > month" @click="changeMonth(1)" class="calendar__head-btn">＞</button>
            </div>
        </div>
        <div class="calendar__body"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'calendar',
    data() {
        return {
      //カレンダー----------------
      calendarHTML: '',
      weeks : ['日', '月', '火', '水', '木', '金', '土'],
    //   date: ,
      year: 0,
      nowMonth: 0, 
      month: 0

        }
    },
    mounted() {
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
        console.log(date.getDay())
    //曜日の行-------
    for (let i = 0; i < this.weeks.length; i++) {
    this.calendarHTML += '<th>' + this.weeks[i] + '</th>'
    }
    //日付の行-------
    for (let w = 0; w < 6; w++) {
    this.calendarHTML += '<tr>'
                // console.log(w)
    for (let d = 0; d < 7; d++) {
        // console.log(d)
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
            //tdタグの中
            //今日----------
            if( dayCount===date.getDate() && this.month === this.nowMonth ) {
                this.calendarHTML += '<td class="calendar__body--today">'
                this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
            }else {
                //明日以降-----------------
                this.calendarHTML += '<td>'
                // this.calendarHTML += '<td class="calendar__body--event">'
                this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'

                //予約状況の確認-------------
                //今月と選択月が一緒か--------
                if(this.month === this.nowMonth) {
                    //今日以降＋火曜日-----------
                    if(dayCount > date.getDate()) {
                        if(d === 2) {
                            this.calendarHTML += '<div>ー</div>'
                        }else {
                            this.calendarHTML += '<div>○</div>'
                        }
                    }
                }else {
                    if(d === 2) {
                        this.calendarHTML += '<div>ー</div>'
                    }else {
                        this.calendarHTML += '<div>○</div>'
                    }
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
                    //tdタグの中
                    //今日----------
                    if( dayCount===date.getDate() && this.month === this.nowMonth ) {
                        this.calendarHTML += '<td class="calendar__body--today">'
                        this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
                    }else {
                        //明日以降-----------------
                        this.calendarHTML += '<td>'
                        // this.calendarHTML += '<td class="calendar__body--event">'
                        this.calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'

                        //予約状況の確認-------------
                        //今月と選択月が一緒か--------
                        if(this.month === this.nowMonth) {
                            //今日以降＋火曜日-----------
                            if((dayCount > date.getDate())) {
                                if(d === 2) {
                                    this.calendarHTML += '<div>ー</div>'
                                }else {
                                    this.calendarHTML += '<div>○</div>'
                                }
                            }
                        }else {
                            if(d === 2) {
                                this.calendarHTML += '<div>ー</div>'
                            }else {
                                this.calendarHTML += '<div>○</div>'
                            }
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

        }
    }
})
</script>
<style lang="scss">
@import '../../css/style.scss';
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