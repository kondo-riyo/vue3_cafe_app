import { ActionTree, MutationTree } from 'vuex';

interface State {
    calendarHTML: string
}

const state:State = {
    calendarHTML: '',

}

const getters = {

}


const makeActions = <T extends ActionTree<State, unknown>>(actions: T): T => actions
const actions = makeActions({
    calendarAct({ commit }): void {
        console.log('calendar')
    let calendarHTML = ''
    const weeks = ['日', '月', '火', '水', '木', '金', '土']
    const date = new Date() //object
    const year = date.getFullYear() //number
    const nowMonth = date.getMonth() + 1 //number
    const month = nowMonth 
    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month, 0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
    let dayCount = 1 // 日にちのカウント
    calendarHTML += '<table class="calendar__body--main">'
        console.log(date.getDay())
    //曜日の行-------
    for (let i = 0; i < weeks.length; i++) {
    calendarHTML += '<th>' + weeks[i] + '</th>'
    }
        //日付の行-------
    for (let w = 0; w < 6; w++) {
    calendarHTML += '<tr>'
                // console.log(w)
    for (let d = 0; d < 7; d++) {
        // console.log(d)
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            const num = lastMonthendDayCount - startDay + d + 1
            calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            const num = dayCount - endDayCount
            calendarHTML += '<td class="calendar__body--disabled">' + num + '</td>'
            dayCount++

        }else {
            //tdタグの中
            //今日----------
            if( dayCount===date.getDate() && month === nowMonth ) {
                calendarHTML += '<td class="calendar__body--today">'
                calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'
            }else {
                //明日以降-----------------
                calendarHTML += '<td>'
                // this.calendarHTML += '<td class="calendar__body--event">'
                calendarHTML += '<div class="calendar__body--dayCount">'+ dayCount +'</div>'

                //予約状況の確認-------------
                //今月と選択月が一緒か--------
                if(month === nowMonth) {
                    //今日以降＋火曜日-----------
                    if(dayCount > date.getDate()) {
                        if(d === 2) {
                            calendarHTML += '<div>ー</div>'
                        }else {
                            calendarHTML += '<div>○</div>'
                        }
                    }
                }else {
                    if(d === 2) {
                        calendarHTML += '<div>ー</div>'
                    }else {
                        calendarHTML += '<div>○</div>'
                    }
                }
            }
            calendarHTML += '</td>'
            dayCount++
        }
    }
    calendarHTML += '</tr>'
    }
        calendarHTML += '</table>'
        console.log('store/calendar'+calendarHTML)
    commit('calendarMut', calendarHTML)
    // // eslint-disable-next-line
    // document.querySelector('.calendar__body')!.innerHTML = this.calendarHTML

    }
})


const makeMutations = <T extends MutationTree<State>>(mutations: T): T => mutations
const mutations = makeMutations({
    calendarMut(state, props):void {
      state.calendarHTML = props
    }
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}