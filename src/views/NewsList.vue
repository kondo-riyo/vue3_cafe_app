<template>
    <div class="news-list">
        <div class="news__body">
            <div v-for="news in data.newsList" :key="news.id" class="news__body-card">
                <div class="news__body-card--date">{{news.date}} / News</div>
                <div class="news__body-card--content">
                    <div>
                        <img src="../assets/cake.jpg" class="news__body-card--content-img"/>
                    </div>
                    <div class="news__body-card--content-title">{{news.title}}</div>
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
        {{data.newsList}}
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'NewsLis',
  setup() {
      const router = useRouter()
      const store = useStore()

      let data = reactive({
          detail: '',
          showRead: '続きを読む',
          newsList: computed(()=> store.state.newsList)
      })
      function sendNewsList(){
        router.push('/NewsList')
      }

      let sampleDetail = data.newsList[0].detail
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
      return { 
        data, sendNewsList, showDetail, hideDetail 
      }
  }
});
</script>
<style lang="scss">
@import '../css/style.scss';
.news-list {
  background-color: $base_cream;
  width: 100vw;
  height: 100vh;
}

    .news__body {
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

</style>