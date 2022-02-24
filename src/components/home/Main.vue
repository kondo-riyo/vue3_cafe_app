<template>
    <div class="main">
        <div class="main__caption">
            <!-- <div class="main__caption-title">engineer : kondo riyo @ Rakus Partners Co., Ltd.</div> -->
            <div class="main__caption-title">engineer : kondo riyo @ Rakus Partners Co., Ltd.</div>
        </div>
        <div class="main__border"></div>
        <div class="main__body">
            <!-- <div class="main__body-logo"> -->
                <div class="main__body-logo--logo">
                    <img src="../../assets/logo_circle.png" class="main__body-logo--img"/>
                </div>
                <div class="main__body-logo--menu">
                    <div>MENU</div>
                    <div>NEWS</div>
                    <div>ACCESS</div>
                </div>
            <!-- </div> -->
            <div class="main__body-content">
                <div class="main__body-content-back">
                    <!-- <div> -->
                        <img src="../../assets/logo_shop_name2.png" class="main__body-content--img"/>
                    <!-- </div> -->
                    <div>
                        <div>〒160 - 0022 <br/>東京都新宿区新宿4-3-25<br/> TOKYU REIT新宿ビル8F</div>
                        <div>TEL. 01-2345-6789 </div>
                        <div>OPEN. 11:00 ~ 15:00 (火曜定休日)</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main__feature">
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Main',
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.main {
    background-color: $base_cream;
    // height: 35rem;
    height: 60rem;
    display: flex;
    padding: 2rem 0 ;
}

//左---------------
.main__caption {
    width: 5%;
    // background-color: salmon;
    // height: 100rem;
    // transform: rotate(270deg);
    // height: 0rem;
    // height: 22rem;
    // text-align: start;
    // border-right: 1px solid $base_pink_brown;
}
.main__caption-title {
    width: 100%;
    color: $base_pink_brown;
    // height: max-content;
    // height: 10rem;
    // padding: -10px 0;
    // text-align: center;
    // margin: 0 auto;
    // padding: 0 3rem 3rem  ;
    // background-color: aquamarine;
    
    //向きを変える--------------------
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);

    //位置調整------------------------
    margin: 20rem 0 0 1rem ;
}
.main__border {
    width: 2%;
    border-left: 1px solid $base_pink_brown;
}
//中央-------------
.main__body {
    // margin: 3rem 0 0 0;
    width: 43%;
    display: grid;
    grid-template: 
    'logo menu' 40%
    'content content'60%/
    65% 35%;
    // align-items: flex-end;

}
// .main__body-logo {
//     display: flex;
// }
.main__body-logo--logo {
    grid-area: logo;
    height: 100%;
    // margin: 2rem 0 0 0 ;
    display: flex;
    // align-items: flex-end;
    // justify-content: center;
    // align-content: center;
    align-items: center;
}
.main__body-logo--img {
    width: 100%;
    margin:auto 0;
    // bottom: 0;
    // align-items: center;
    // justify-items: center;
    // justify-content: center;
    // height: auto;
    // padding: 0 0 0 0.5rem;
}
.main__body-logo--menu {
    font-weight: bold;
    color: $base_pink_brown;
    grid-area: menu;
    display: flex;
    flex-direction: column;
    // margin: auto 0;
    // justify-content: end;
    div {
        font-weight: 700;
        font-size: xx-large;
        text-align: start;
        margin: auto 0.5rem;
        // align-items: stretch;
    }
}
.main__body-content {
    grid-area: content;
    // z-index: 1;
    text-align: start;
    color: $base_cream;
    font-weight: 600;
    // background-image: url(../../assets/back_brown.png);
    // background-size: cover;
    // width: 100%;
    width: 100%;
    height: auto;

    // margin: 3rem 0 0 -2rem;
    // padding: 3rem 3rem 6rem 6rem;
    // div {
    //     margin: 0 0 0.5rem 0;
    // }
}
.main__body-content-back {
    background-image: url(../../assets/back_brown.png);
    // background-size: contain;
    background-size: 100% 100%;
    // width: 100%;
    // height: auto;
    padding: 3rem 3rem 4rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
        div{
            margin: 0.3rem auto;
            text-align: start;
        }
    }
}
.main__body-content--img {
    width: 85%;
    margin: 0 0 0.5rem 0;
    // margin: 0 auto;
}

// .main__feature {
//     width: 40%;
//     height: 80%;
//     background-image: url(../../assets/coffee-people.jpg);
//     background-size: cover;
//     position: relative;
//     padding: 0 0 10rem 0;

// }
// .main__feature::after {
//     content: '';
//     background-image: url(../../assets/back_home_main_cream.png);
//     background-size: 100% 100%;
//     position: absolute;
//     left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
// }

.main__feature {
    width: 50%;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 1;
    margin: 1rem 0 0 0;
}
.main__feature:before,
.main__feature:after {
   content: "";
   z-index: -1;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
}
.main__feature:before {
  width: 500%; /* (n+1)*100% */
  background: url(../../assets/coffee-people.jpg) no-repeat,
            url(../../assets/shop-image2.jpg) no-repeat,
            url(../../assets/shop-image3.jpg) no-repeat,
            // url(../../assets/shop-image4.jpg) no-repeat,
            url(../../assets/shop-image5.jpg) repeat-x;
  background-position: 75% top, 50% top, 25% top, 0% top; /* (n-1)/n*100%, (n-2)/n*100% ... 0% */
//   background-position: 80% top, 60% top, 40% top, 20% top, 0% top; /* (n-1)/n*100%, (n-2)/n*100% ... 0% */
  background-size:  20% auto; /* 100/(n+1)% */
//   background-size:  16.6666667% auto; /* 100/(n+1)% */
  animation: slide 20s ease-in-out infinite;

}
.main__feature:after {
  right: 0;
//   background:rgba(0, 0, 0, .25);
  background:url(../../assets/back_home_main_cream.png);
  background-size: 100% auto;

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
//   0%, 16.66667% {
//     transform: translate3d(0,0,0);
//   }
//   20%, 36.66667% {
//     transform: translate3d(-16.6%,0,0);
//   }
//   40%, 56.66667% {
//     transform: translate3d(-33.333%,0,0);
//      /* -1/n+1 * 100% */
//   }
//   60%, 76.66667% {
//     transform: translate3d(-50%,0,0);   
//   }
//   80%, 96.66667% {
//     transform: translate3d(-66.6666%,0,0);   
//   }
//   100% {
//     transform: translate3d(-83.333%,0,0);
//     /* -n/n+1 * 100% */
//     animation-timing-function: steps(1, end);
//   }
}

</style>