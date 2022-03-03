<template>
    <div class="news-list">
       <div class="news-list__head">
        <div>
          <img src="../assets/logo_circle.png" class="news-list__head-logo"/>
        </div>
        <div></div>
       </div>
        <div class="news__body">
            <div v-for="news in data.newsList" :key="news.id" class="news__body-card">
                <div class="news__body-card--date">{{news.date}} / News</div>
                <div class="news__body-card--content">
                    <div>
                        <img src="../assets/cake.jpg" class="news__body-card--content-img"/>
                    </div>
                    <div class="news__body-card--content-title">{{news.title}}</div>
                    <div class="news__body-card--content-detail">
                        {{news.detail}}
                    </div>
                    <!-- {{news.id}} -->
                    <div>
                        <span v-show="data.showRead==='続きを読む'" @click="showDetail(news.detail)" class="news__body-card--content-btn">{{data.showRead}}</span>
                        <span v-show="data.showRead==='閉じる'" @click="hideDetail(news)" class="news__body-card--content-btn">{{data.showRead}}</span>
                    </div>
                </div>
            </div>
            <!-- {{data.newsList}} -->
        </div>
        <!-- {{data.newsList}} -->
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

type NewsListType = {
  id: number,
  date: string,
  image: string,
  title: string,
  detail: string
}

type DataType = {
  detail: string,
  showRead: string,
  newsList: NewsListType[]
}

export default defineComponent({
  name: 'NewsLis',
  setup() {
      const router = useRouter()
      const store = useStore()
      
      let newsListFromStore = computed(()=> store.state.newsList)
      // console.log(newsListFromStore.value[1])

      let data:DataType
      data = reactive({
          detail: '',
          showRead: '続きを読む',
          newsList: []
      })
      data.newsList = newsListFromStore.value
      // console.log(data.newsList)

      function sendNewsList(){
        router.push('/NewsList')
      }

      let sampleDetail = data.newsList[0].detail
      data.detail = sampleDetail;
      
    //   let contentDetail = computed(()=> {
    //       return data.detail.length > 50 ? (data.detail).slice(0,50)+"…" : data.detail;
    //   })
      const showDetail = (detail:string) => {
        console.log(detail)
        // let getShowDetail = data.newsList.filter((news)=> news.id === id)
        // console.log(getShowDetail[0].detail)
          // data.detail = sampleDetail;
          // data.showRead = '閉じる'
      }
      const hideDetail = (news: NewsListType) => {
        // console.log(data.newsList.indexOf(id))
        
        // let gethideDetail = data.newsList.filter((news)=> news.id === id)
        console.log(news)
        // gethideDetail[0].detail
        // data.detail = data.detail.length > 50 ? (data.detail).slice(0,50)+"…" : data.detail;
        // data.showRead = '続きを読む'
      }
      // console.log(data.newsList.length)
      hideDetail(2)

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
  width: 100% auto;
  // height: 100vh;
  display: flex;
  padding: 1rem;

  &__head {
    width: 15%;
    &-logo {
      width: 100%;
    }
  }
}

    .news__body {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        // justify-content: center;

        //card------------
        &-card {
            width: 40%;
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