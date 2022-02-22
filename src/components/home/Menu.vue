<template>
    <div class="menu">
        <div class="menu__title">〜 Menu 〜</div>
        <div class="menu__feature">
            <div class="menu__feature--text-left">癒しの時間。</div>
            <div class="menu__feature--img">
                <!-- <img src="../../assets/back_menu.png" /> -->
            </div>
            <div class="menu__feature--text-rigth">のんびり過ごす、</div>
            <div class="menu__feature--empty"></div>
        </div>
        <!-- スライダー -->
        <!-- <div class="css-slider">

        </div> -->
        <div class="menu__category">
            <span>ドーナッツ</span>
            <span>・</span>
            <span>ランチ</span>
            <span>・</span>
            <span>コーヒー</span>
            <span>・</span>
            <span>スイーツ</span>
        </div>
        <div class="menu__summary">
            どんぐりカフェの特製ブレンドコーヒーと、<br/>
            無添加の自家製ドーナッツをご用意しております。<br/>
            有機野菜を使用したランチセット、季節に合わせた限定スイーツもございます。
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Menu',
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.menu {
    background-color: $base_cream;
    height: 40rem;
}

.menu__title {
    //テキスト-------------------
    color: $base_brown;
    font-size: xxx-large;
    font-weight: bold;
}

.menu__feature {
    display: flex;
    color: $base_brown;
    font-weight: 600;
    font-size: xx-large;
}
.menu__feature--text-left {
    width: 20%;
    height: 50%;
    line-height: 300%;
    // text-align: center;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    padding: 3rem 0 0 0;
}
.menu__feature--text-rigth {
    width: 10%;
    height: 50%;
    line-height: 100%;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    margin: -3rem 0 0 0;
}
.menu__feature--img {
    width: 60%;
    height: 21rem;
    background-image: url(../../assets/sweet.jpg);
    background-size: cover;
    position: relative;
}
.menu__feature--img::after {
    content: '';
    background-image: url(../../assets/back_menu.png);
    background-size:cover;
    // background-color: rgba(0, 0, 0, 0.638);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.menu__feature--empty {
    width: 10%;
}

.menu__category {
    color: $base_brown;
    font-size: x-large;
    font-weight: 600;
}

.menu__summary {
    color: $base_brown;
    font-weight: 500;
    margin: 1rem 0 0 0;
}

//スライダー-------------------
.css-slider {
    width: 800px;
    height: 533px;
  overflow: hidden;
  padding: 7% 0 0%;
  position: relative;
  z-index:1;
}
.css-slider:before,
.css-slider:after {
   content: "";
   z-index: -1;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
}
.css-slider:before {
  width: 500%; /* (n+1)*100% */
  background: url(../../assets/menu_donuts.webp) no-repeat,
     url(../../assets/menu_lunch.jpg) no-repeat, 
     url(../../assets/menu_coffee.webp) no-repeat,
     url(../../assets/sweet.jpg) repeat-x;
  background-position: 75% top, 50% top, 25% top, 0% top; /* (n-1)/n*100%, (n-2)/n*100% ... 0% */
  background-size:  20% auto; /* 100/(n+1)% */
  animation: slide 20s ease-in-out infinite;
}
.css-slider:after {
  right: 0;
//   background:rgba(0, 0, 0, .25);
  background:url(../../assets/back_menu.png);
}
@keyframes slide {
  0%, 20% {
    transform: translate3d(0,0,0);
  }
  25%, 45% {
    transform: translate3d(-20%,0,0);
     /* -1/n+1 * 100% */
  }
  50%, 70% {
    transform: translate3d(-40%,0,0);
  }
  75%, 95% {
    transform: translate3d(-60%,0,0);   
  }
  100% {
    transform: translate3d(-80%,0,0);
    /* -n/n+1 * 100% */
    animation-timing-function: steps(1, end);
  }
}
</style>