<template>
    <div class="menu">
        <div class="menu__title">〜 Menu 〜</div>
        <div class="menu__feature">
            <div class="menu__feature--text-left">癒しの時間。</div>
        <!-- スライダー -->
        <!-- <div class="css-slider">
        </div> -->
        <div class="menu__container">
          <div class="menu__slider" :style="{ left: currentLeft }">
            <div class="menu__slide">
              <img src="../../assets/menu_donuts.png"/>
            </div>
            <div class="menu__slide">
              <img src="../../assets/menu_lunch.jpg"/>
            </div>
            <div class="menu__slide">
              <img src="../../assets/menu_coffee.png"/>
            </div>
            <div class="menu__slide">
              <img src="../../assets/menu_sweet.jpg"/>
            </div>
          </div>
        <div class="menu__slider-front">
          <img src="../../assets/back_menu.png"/>
        </div>
        </div>
        <div class="menu__feature--text-rigth">のんびり過ごす、</div>
        </div>
        <div>
          <button @click="backPage">←</button>
          <button @click="nextPage">→</button>
        </div>
        <div class="menu__category">
            <span @click="isCurrentPage(1)">ドーナッツ</span>
            ・
            <span @click="isCurrentPage(2)">ランチ</span>
            ・
            <span @click="isCurrentPage(3)">コーヒー</span>
            ・
            <span @click="isCurrentPage(4)">スイーツ</span>
        </div>
        <div class="menu__summary">
            どんぐりカフェの特製ブレンドコーヒーと、<br/>
            無添加の自家製ドーナッツをご用意しております。<br/>
            有機野菜を使用したランチセット、季節に合わせた限定スイーツもございます。
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
export default defineComponent({
  name: 'Menu',
  setup() {
    let data = reactive({
      currentPage: 1, //現在のページ
      totalPage: 4,  //全ページ数
      pageWidth: 924   //１ページの幅
      
    })
    const nextPage = () => {
      if(data.currentPage === data.totalPage ) {
        return;
      }
      data.currentPage += 1
      console.log(data.currentPage)
    }
    const backPage = () => {
      if(data.currentPage === 1 ) {
        return;
      }
      data.currentPage -= 1
      console.log(data.currentPage)
    }

    //現在のページをpositionに変換
    const pagePosition = ():number => {
      return -data.pageWidth * (data.currentPage -1);
    };

    const isCurrentPage = (page: number) => {
      return data.currentPage = page
    }

    const currentLeft = computed(() => {
      return String(pagePosition()) + "px"
    })
    
    return {
      data, backPage, nextPage, pagePosition, isCurrentPage, currentLeft
    }
  }
});

</script>
<style lang="scss">
@import '../../css/style.scss';
.menu {
    background-color: $base_cream;
    // height: 40rem;
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
    background-image: url(../../assets/menu_sweet.jpg);
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

.menu__category {
    color: $base_brown;
    font-size: x-large;
    font-weight: 600;
    span {
      cursor: pointer;
    }
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
  // background: url(../../assets/menu_donuts.webp) no-repeat,
  //    url(../../assets/menu_lunch.jpg) no-repeat, 
  //    url(../../assets/menu_coffee.png) no-repeat,
  //    url(../../assets/sweet.jpg) repeat-x;
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


//スライダー2/24
$slider-w: 924px;
$slider-h: 600px;
.menu__container {
  clip-path: inset(0);
  position: relative;
  width: $slider-w;
  height: $slider-h;
  display: inline-block;
}
.menu__slider {
  display: flex;
  width:$slider-w;
  height: $slider-h;
  //---------------
  transition: left 0.5s ease;
  position: relative;
  left: 0;
}
.menu__slider-front {
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: $slider-w;
    height: $slider-h;
  }
}
.menu__slide {
  img {
    width: $slider-w;
    height: $slider-h;
  }
}
// .menu__slide-img {
//     width: 100%;
//     height: auto;
// }
</style>