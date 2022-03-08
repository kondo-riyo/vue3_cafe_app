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
                        <span v-show="data.showRead==='続きを読む'" @click="showDetail(news)" class="news__body-card--content-btn">{{data.showRead}}</span>
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
  originalNewsList: NewsListType[],
  newsList: NewsListType[]
}

export default defineComponent({
  name: 'NewsLis',
  setup() {
      const router = useRouter()
      const store = useStore()
      
    let newsListFromStore = computed(()=> store.state.newsList)

      let data:DataType
      data = reactive({
          detail: '',
          showRead: '続きを読む',
          originalNewsList: computed(()=> store.state.newsList),
          // originalNewsList: store.state.newsList,
          newsList: []
      })
      console.log(data.originalNewsList[0].detail)
      data.newsList= newsListFromStore.value

      function sendNewsList(){
        router.push('/NewsList')
      }

      const showDetail = (news: NewsListType) => {
        // newsListの配列の位置を取得-------
        let index = data.newsList.findIndex( list => list.id === news.id)

        console.log('show=> '+JSON.stringify(store.state.newsList))
        
      }
      const hideDetail = (news: NewsListType) => {
        //newsListの配列の位置を取得-------
        let index = data.newsList.findIndex( list => list.id === news.id)

        let newDetail = news.detail.length > 50 ? (data.newsList[index].detail).slice(0,50)+"…" : data.newsList[index].detail;
        news.detail = newDetail
        data.newsList.splice(index, 1, news)
        
      }
      data.newsList.forEach( news => hideDetail(news))

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