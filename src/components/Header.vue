<template>
    <div class="header">
      <div class="header__news">
        <div class="header__news-date">21 JAN. 2022 / News</div>
        <div class="header__news-title">新作ケーキの販売のお知らせ</div>
      </div>
      <div>
        <img src="../assets/logo_moji.png" class="header__img"/>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
});
</script>
<style lang="scss">
@import '../css/style.scss';
.header {
    background-color: $base_of;
    height: 100px;

    display: flex;
    justify-content: space-between;
}
.header__news {
  font-weight: 600;
  margin: 2rem 0 0 2rem;
  text-align: start;
  .header__news-date {
    padding: 0 3rem 0 0;
    border-bottom: 3px solid black;
    
  }
  .header__news-title {
    padding: 1rem 0 0 0;
  }

}
.header__img {
  margin: 2rem 2rem 0 0 ;
  width: 20rem;
}
</style>