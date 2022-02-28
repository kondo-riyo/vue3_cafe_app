<template>
    <div class="news">
        <div class="news__title">〜 News 〜</div>
        <div class="news__body">
            <div v-for="n in 2" :key="n" class="news__body-card">
                <div class="news__body-card--date">21 JUN. 2022 / News</div>
                <div class="news__body-card--content">
                    <div>
                        <img src="../../assets/cake.jpg" class="news__body-card--content-img"/>
                    </div>
                    <div class="news__body-card--content-title">新作ケーキの販売のお知らせ</div>
                    <div class="news__body-card--content-detail">
                        新作ケーキの販売のお知らせ！明日(1/22)より、「いちごとベリーのタルト」の販売を開始いたします。
                        昨年よりもタルトをサクサクに改良し、よりタルaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </div>
                    <div>
                        <span class="news__body-card--content-btn">続きを読む</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="news__submit">
            <button @click="sendNewsList" class="news__submit-btn">NEWS LIST</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'News',
  setup() {
      const router = useRouter()
      function sendNewsList(){
        router.push('/NewsList')
      }

      return { sendNewsList}
  }
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.news {
    background-color: $base_cream;
    height: 40rem;

    &__title {
        color: $base_brown;
        font-size: xxx-large;
        font-weight: bold;
    }

    //body-----------
    &__body {
        width: 80%;
        margin: 0 auto;
        display: flex;

        //card------------
        &-card {
            width: 50%;
            text-align: start;
            font-size: large;
            border-top: 2px solid black;
            margin: 1rem;

            &--date {
                font-weight: 700;
            }
            &--content {
                width: 80%;
                margin:0 auto;

                &-img {
                    width: 100%;
                }
                &-title {
                    font-weight: 700;
                    font-size: medium;
                    margin: 0.5rem 0;
                }
                &-detail {
                    font-weight: 600;
                    font-size: x-small;
                    width: 100px;
                    margin: 0.5rem 0;
                    text-overflow: ellipsis;
                    // white-space: nowrap;
                }
                &-btn {
                    font-weight: 600;
                    font-size: small;
                    border-bottom: 1px solid black;
                }   
            }

        }

    }

    //submit-btn----------------------
    &__submit-btn {
        background-color: $base_brown;
        border:none;
        border-radius: 9999px;
        color: white;
        font-weight: 600;
        font-size: normal;

        padding: 0.5rem 7rem;
        margin: 1rem;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
            background-color: lighten($base_brown, 30);
            color: $base_brown;

        }
    }

    
}

</style>