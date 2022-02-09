<template>
    <div class="main">
        <div class="main__caption">
            <!-- <div class="main__caption-title">engineer : kondo riyo @ Rakus Partners Co., Ltd.</div> -->
            <div class="main__caption-title">engineer : kondo riyo @ Rakus Partners Co., Ltd.</div>
        </div>
        <div class="main__border"></div>
        <div class="main__body">
            <div class="main__body-logo">
                <div>
                    <img src="../../assets/logo_circle.png" class="main__body-logo--img"/>
                </div>
                <div class="main__body-logo--menu">
                    <div>MENU</div>
                    <div>NEWS</div>
                    <div>ACCESS</div>
                </div>
            </div>
            <div class="main__body-content">
                <div>cafe &amp; Donuts</div>
                <div>どんぐりカフェ</div>
                <div>〒160 - 0022 <br/>東京都新宿区新宿4-3-25<br/> TOKYU REIT新宿ビル8F</div>
                <div>TEL. 01-2345-6789 </div>
                <div>OPEN. 11:00 ~ 15:00 (火曜定休日)</div>
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
    background-color: $base_of;
    // height: 35rem;
    height: 50rem;
    display: flex;
    padding: 2rem 0 0 0;
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
    margin: 5rem 0 0 1rem ;
}
.main__border {
    width: 5%;
    border-left: 1px solid $base_pink_brown;
}
//中央-------------
.main__body {
    margin: 3rem 0 0 0;
    width: 40%;

}
.main__body-logo {
    display: flex;
}
.main__body-logo--img {
    width: 17rem;
    padding: 0 0 0 1rem;
}
.main__body-logo--menu {
    font-weight: bold;
    color: $base_pink_brown;
}
.main__body-content {
    text-align: start;
    color: $base_pink_brown;
    background-image: url(../../assets/back_cream.png);
    background-size: cover;
    margin: 3rem 0 0 0;
    // padding: 50px 0 50px 100px;
    padding: 3rem 0 3rem 6rem;
}

.main__feature {
    width: 40%;
    height: 80%;
    background-image: url(../../assets/coffee-people.jpg);
    // background-position:50%;
    background-size: cover;
    position: relative;
    margin: 0 0 2rem 0;

}
.main__feature::after {
    content: '';
    background-image: url(../../assets/back_home_main.png);
    background-size:cover;
    // background-color: rgba(0, 0, 0, 0.638);
    position: absolute;
    left: 0;
  right: 0;
  top: 0;
  bottom: 0;
    // height: 240px;

}
</style>