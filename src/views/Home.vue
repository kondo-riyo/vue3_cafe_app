<template>
  <div class="home">
    <Header />
    <Main />
    <Menu />
    <News />
    <Access />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/Header.vue';
import Main from '@/components/home/Main.vue';
import Menu from '@/components/home/Menu.vue';
import News from '@/components/home/News.vue';
import Access from '@/components/home/Access.vue';


export default defineComponent({
  name: 'Home',
  components: {
    // HelloWorld,
    Header,
    Main,
    Menu,
    News,
    Access
  },
});
</script>
<style lang="scss">
@import '../css/style.scss';
.home {
  background-color: none;
}
</style>