<template>
    <div class="news-list">
       <div class="news-list__head">
        <div>
          <img src="../assets/logo_circle.png" class="news-list__head-logo"/>
        </div>
        <div></div>
       </div>
        <div class="news__body">
            <div v-for="news in data.originalNewsList" :key="news.id" class="news__body-card">
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
                    <!-- <div>
                        <span v-show="data.showRead==='続きを読む'" @click="showDetail(news)" class="news__body-card--content-btn">{{data.showRead}}</span>
                        <span v-show="data.showRead==='閉じる'" @click="hideDetail(news)" class="news__body-card--content-btn">{{data.showRead}}</span>
                    </div> -->
                </div>
            </div>
            <!-- {{data.newsList}} -->
        </div>
        <!-- {{data.newsList}} -->
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
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
      
    // let newsListFromStore = computed(()=> store.state.newsList.newsList)

      let data:DataType
      data = reactive({
        // data = {
          detail: '',
          showRead: '続きを読む',
          originalNewsList: [
            {
                id: 1,
                date: '21 JUN. 2022',
                image: '../assets/cake.jpg',
                title: '新作ケーキの販売のお知らせ',
                detail: '新作ケーキの販売のお知らせ！明日(1/22)より、「いちごとベリーのタルト」の販売を開始いたします。昨年よりもタルトをサクサクに改良し、よりタルト好きにはたまらない新作ケーキになっております。ぜひご賞味ください^^'
            },
            {
                id:2,
                date: '03 DEC. 2021',
                image: '../assets/cake.jpg',
                title: 'かぼちゃのタルトの販売のお知らせ',
                detail: '新作ケーキの販売のお知らせ！明日(1/22)より、「かぼちゃのタルト」の販売を開始いたします。昨年よりもタルトをサクサクに改良し、よりタルト好きにはたまらない新作ケーキになっております。ぜひご賞味ください^^'
            },
            {
                id: 3,
                date: '07 OCT. 2021',
                image: '../assets/cake.jpg',
                title: 'りんごのパイの販売のお知らせ',
                detail: '新作ケーキの販売のお知らせ！明日(1/22)より、「りんごのパイ」の販売を開始いたします。昨年よりもパイ生地をサクサクに改良し、よりタルト好きにはたまらない新作ケーキになっております。ぜひご賞味ください^^'
            },
          ],
          // originalNewsList: computed(()=> store.state.newsList),
          // originalNewsList: store.state.newsList,
          newsList: [],
      })
        // }
      console.log(data.originalNewsList)
      data.originalNewsList.forEach(news => data.newsList.push(news))
      data.newsList= data.originalNewsList
      // console.log(data.newsList[0].detail)
      // console.log(data.originalNewsList[0].detail)

      function sendNewsList(){
        router.push('/NewsList')
      }

      const showDetail = (news: NewsListType) => {
        // newsListの配列の位置を取得-------
        let index = data.newsList.findIndex( list => list.id === news.id)
        console.log(data.originalNewsList[index].detail)
        // console.log('show=> '+JSON.stringify(store.state.newsList.newsList))
        
      }
      const hideDetail = (news: NewsListType) => {
        //newsListの配列の位置を取得-------
        let index = data.newsList.findIndex( list => list.id === news.id)
        console.log(index)
        console.log(news.id + data.originalNewsList[index].detail)

        let newDetail = news.detail.length > 50 ? (data.newsList[index].detail).slice(0,50)+"…" : data.newsList[index].detail;
        console.log(news.id + data.originalNewsList[index].detail)

        news.detail = newDetail
        data.newsList.splice(index, 1, news)
        console.log(news.id + data.originalNewsList[index].detail)

      }
      // data.originalNewsList.forEach( news => hideDetail(news))
      console.log(data.newsList[0].detail)
      console.log(data.originalNewsList[0].detail)

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
                    width: 100%;
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