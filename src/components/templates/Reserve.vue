<template>
    <div id="overlay" @click.self="$emit('close')">
        <div id="content" class="reserve" >
            <div class="reserve-calendar">
                <calendar/>
            </div>
            <div class="reserve-form">入力</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import calendar from '../organisms/calendar.vue';

export default defineComponent({
    name: 'Reserve',
    components: {
        calendar
    },
    
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
    margin: 30px 20px;
    padding: 10px;
    background-color: $base_of;
    border-radius: 20px;
}
.reserve-form {
    // grid-column: 2/2;
    // grid-column: auto;
}
</style>