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
                        {{data.detail}}
                    </div>
                    <div>
                        <span v-show="data.showRead==='続きを読む'" @click="showDetail" class="news__body-card--content-btn">{{data.showRead}}</span>
                        <span v-show="data.showRead==='閉じる'" @click="hideDetail" class="news__body-card--content-btn">{{data.showRead}}</span>
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
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'News',
  setup() {
      const router = useRouter()

      let data = reactive({
          detail: '',
          showRead: '続きを読む',
      })
      function sendNewsList(){
        router.push('/NewsList')
      }

      let sampleDetail = '新作ケーキの販売のお知らせ！明日(1/22)より、「いちごとベリーのタルト」の販売を開始いたします。昨年よりもタルトをサクサクに改良し、よりタルト好きにはたまらない新作ケーキになっております。ぜひご賞味ください^^'
      data.detail = sampleDetail;
      
    //   let contentDetail = computed(()=> {
    //       return data.detail.length > 50 ? (data.detail).slice(0,50)+"…" : data.detail;
    //   })
      const showDetail = () => {
          data.detail = sampleDetail;
          data.showRead = '閉じる'
      }
      const hideDetail = () => {
        data.detail = data.detail.length > 50 ? (data.detail).slice(0,50)+"…" : data.detail;
        data.showRead = '続きを読む'
      }

      hideDetail()
      return { data, sendNewsList, showDetail, hideDetail }
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
                    width: 300px;
                    margin: 0.5rem 0;
                    // display: -webkit-box;
                    // -webkit-box-orient: vertical;
                    // -webkit-line-clamp: 3;
                    // overflow: hidden;
                }
                &-btn {
                    font-weight: 600;
                    font-size: small;
                    border-bottom: 1px solid black;
                    cursor: pointer;
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