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
                    <div>ー 席の予約ができます ー</div>
                    <span>
                        ※1. ケーキの予約は電話にてお受けいたします<br/>
                        ※2. 予約の変更・キャンセルの際は、お手数ですが、電話にてお申し付けください
                    </span>
                </div>
                <div class="access__foot-reserve--body">
                    <!-- カレンダー -->
                    <!-- xx年xx月を表示 -->
                    <div class="calendar__title">2022年 2月</div>

                    <!-- 月移動ボタンを表示 -->
                    <div class="calendar__btn">
                        <div>
                            <button>＜</button>
                        </div>
                        <div>
                            <button>＞</button>
                        </div>
                    </div>

                    <!-- カレンダー表示 -->
                    <div class="calendar__body">
                        <!-- <div v-for="n in 32" :key="n" class="calendar__body-tile"> -->
                        <div class="calendar__body-tile">
                            <!-- <div v-if="n===1" class="calendar__body-tile--first">{{n}}</div>
                            <div v-else class="">{{n}}</div> -->
                            <div class="calendar__body-tile--first">1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                        </div>
                    </div>
                </div>
            </div>
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
    }
  },
  mounted(){
    // let timer = setInterval(() => {
    //   if(window.google){
    //     clearInterval(timer);
    //     this.map = new window.google.maps.Map(this.$refs.map, {
    //       center: {lat: 35.69398953161943, lng: 139.7075547373426},
    //       zoom: 16
    //     });       
    //   }
    // },500)  
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
    }, 500);  }
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
    height: 500px;
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

.access__foot-reserve--body {

}

.calendar__body {
    width: 100%;
    margin: 1rem;
    background-color: $base_cream;

    // display: grid;
    // grid-template-columns: repeat(7, 50px);
}
.calendar__body-tile {
    border: 2px solid black;
    display: grid;
    grid-template-columns: repeat(7, 50px);
}
.calendar__body-tile--first {
  grid-column-start: 3;
  background-color: red;
}
</style>