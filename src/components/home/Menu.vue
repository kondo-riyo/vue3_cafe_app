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
              <!-- <div class="menu__slide-img-1"></div> -->
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
      pageWidth: 924,   //１ページの幅
      // Timer: 0,
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
      stopTimer();
      startTimer();
      return data.currentPage = page
    }

    const currentLeft = computed(() => {
      return String(pagePosition()) + "px"
    })

    //カルーセルの自動再生------------------------
    let Timer:number;
    let startTimer = () => {
      Timer = setInterval(()=> {
        if(data.currentPage <= 3){
          data.currentPage += 1
        }else if(data.currentPage === 4){
          data.currentPage = 1
        }
      },4000)
    }

    const stopTimer = () => {
      clearInterval(Timer);
    }
    startTimer();

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
    padding: 0 0 5rem 0;

    //title---------------
    &__title {
      color: $base_brown;
      font-size: xxx-large;
      font-weight: bold;
    }

    //feature--------------
    &__feature {
      display: flex;
      color: $base_brown;
      font-weight: 600;
      font-size: xx-large;

      &--text-left {
        width: 20%;
        height: 50%;
        line-height: 300%;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        padding: 3rem 0 0 0;
      }
      &--text-rigth {
        width: 10%;
        height: 50%;
        line-height: 100%;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        margin: -3rem 0 0 0;
      }
    }

    //category-----------------
    &__category {
      color: $base_brown;
      font-size: x-large;
      font-weight: 600;
      span {
        cursor: pointer;
        transition: 1s ease;
        &:hover {
          border-bottom: 2px solid $base_brown;
        }
      }
    }

    //summary--------------------
    &__summary {
      color: $base_brown;
      font-weight: 500;
      margin: 1rem 0 0 0;
    }
}


//スライダー-------------------
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
  transition: left 2s ease;
  position: relative;
  left: 0;

  &-front {
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: $slider-w;
    height: $slider-h;
  }
  }
}
.menu__slide {
  img {
    width: $slider-w;
    height: $slider-h;
  }
}
</style>