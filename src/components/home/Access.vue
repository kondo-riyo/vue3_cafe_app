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
                <div @click="ReserveOpen" class="access__foot-reserve--head">
                    <div>ー 席の予約はこちら ー</div>
                    <span>
                        ※1. ケーキの予約は電話にてお受けいたします<br/>
                        ※2. 予約の変更・キャンセルの際は、お手数ですが、電話にてお申し付けください
                    </span>
                </div>
                <div class="access__foot-reserve--body">
                    <!-- カレンダー -->
                    <calendar/>
                </div>
            </div>
            <!-- <button @click="sendReserve">クリック</button> -->
        </div>
        <!-- <Reserve v-show="showReserve" @close="closeReserve"/> -->
        <Reserve 
            :orderInfo="data.reserveInfo"
            v-show="showReserve"
            @close="closeReserve"
        >
        </Reserve>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import calendar from '../organisms/calendar.vue';
import Reserve from '../templates/Reserve.vue';
declare global {
     // eslint-disable-next-line
  interface Window { google: any; }
}
window.google = window.google || {};

export default defineComponent({
  name: 'Access',
  components: {
      calendar,
      Reserve
  },
  setup() {
    const store = useStore()

    //data----------------------
    let data = reactive({
        reserveInfo: computed(() => store.state.calendarHTML),

    })
    // let data = ref({
    //   myLatLng:{lat: 35.69398953161943, lng: 139.7075547373426},
    //   showReserve: false,
    //   reserveInfo: '',
    // })

    // const mapRef = ref(Map)
    // //mounted-------------------
    // onMounted(() => {
    //     //Google Map-----------------------------------------------------
    //     // const refType = $refs(null);
    //     let timer = setInterval(() => {
    //     if (window.google) {
    //         clearInterval(timer);
    //         const map = new window.google.maps.Map(mapRef.value.map, {
    //         center: data.value.myLatLng,
    //         zoom: 16,
    //         });
    //         new window.google.maps.Marker({
    //         position: data.value.myLatLng,
    //         map,
    //         });
    //     }
    //     }, 500);  
    // })

    store.dispatch('calendarAct')
    // const calendarHTML = 
    // console.log(calendarFromStore)
    // })
    // return{
    //     mapRef
    // }
    return {
        // calendarHTML: computed(() => store.state.calendarHTML)
        data
    }

  },
  data(){
    return {
      myLatLng:{lat: 35.69398953161943, lng: 139.7075547373426},
      showReserve: false,

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
    // this.$store.dispatch('calendarAct')
    },
    methods: {
        closeReserve() {
            this.showReserve = false
        },
        ReserveOpen() {
            // this.reserveInfo = this.calendarHTML
            // console.log(this.reserveInfo)
            this.showReserve = true
        },
        sendReserve() {
            this.$router.push('/Reserve')
        }
    //     clickDate() {
    //         console.log('click')
    //     }
    }
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.access {
    background-color: $base_cream;
    // height: 50rem;

    &__title {
        color: $base_brown;
        font-size: xxx-large;
        font-weight: bold;
    }

    &__body {
        display: flex;
        margin: 1rem 17rem;

        &--shop {
            width: 40%;
            margin: 1rem;
            &-img {
                width: 100%;
                height: auto;
                margin: 0 auto;
                border-radius: 10px;
            }
        }

        &-content {
            width: 60%;
            margin: 1rem;
            color: $base_brown;
            font-size: small;
            font-weight: 600;
            text-align: start;
            div {
                margin: 0 0 0.5rem 0;
            }
            &--img {
                width: 100%;
            }
        }
    }

    &__foot {
        display: flex;
        width: 100%;
        margin: 0 auto;

        &-map {
            width: 60%;
            &--img {
                width: 100%;
                height: 550px;
            }
        }

        &-reserve {
            width: 40%;
            background-color: $base_of;

            &--head {
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

                &:hover {
                    background-color: $base_pink_brown-30;
                    color: $base_brown;
                }
            }
        }
    }
}

//foot-----------------------
// .access__foot {
//     display: flex;
//     width: 100%;
//     margin: 0 auto;
// }
// .access__foot-map {
//     width: 60%;
//     // margin: 0.3rem;
// }
// .access__foot-map--img {
//     width: 100%;
//     height: 550px;
// }
// .access__foot-reserve {
//      width: 40%;
//      background-color: $base_of;
//     // margin: 0.3rem 0.3rem 0.6rem 0.3rem;
// }
// .access__foot-reserve--head {
//     background-color: $base_pink_brown;
//     // height: 100px;
//     color: white;
//     text-align: start;
//     padding: 0.3rem;
//     transition: 0.5s;
//     div {
//         font-weight: 700;
//         font-size: x-large;
//         text-align: center;
//         margin: 0 0 0.5rem 0;;
//     }
//     span {
//         font-weight: 600;
//         font-size: x-small;
//         text-align: start;
//     }
// }
// .access__foot-reserve--head:hover {
//     background-color: $base_pink_brown-30;
//     color: $base_brown;
// }

// .access__foot-reserve--body {

// }

// .calendar__body {
//     width: 100%;
//     color: $base_pink_brown;
// }

// .calendar__head {
//     display: flex;
//     justify-content:space-around;
//     align-items: center;
//     margin: 1rem 3rem;
//     color: $base_pink_brown;
// }
// .calendar__head-btn {
//     width: 40px;
//     height: 40px;
//     border: none;
//     border-radius: 9999px;
//     color: $base_pink_brown;
//     font-weight: 700;
//     background-color: $base_pink_brown-30;
//     transition: 1s;
// }
// .calendar__head-btn:hover {
//     border: 2px solid $base_pink_brown;
//     background-color: transparent;
// }
// .calendar__head-title {
//     font-weight: 600;
//     font-size: x-large;
// }
// .calendar__body--main {
//     width: 350px;
//     height: 350px;
//     margin: 0 auto;
// }
// table {
//     border-spacing: 0;
// }
// td {
//     width: 50px;
//     height: 50px;
//     border: 1px solid $base_pink_brown;
// }
// td:first-child {
//     color: red;
// }
// td:last-child {
//     color: royalblue;
// }
// td:nth-child(3) {
//     color: #ccc;
// }
// td.calendar__body--disabled {
//     color: #ccc;
// }
// .calendar__body--today {
//     background-color: $base_cream;
// }
</style>