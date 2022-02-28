<template>
    <div class="news-list">
        NewsList
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NewsLis',
});
</script>
<style lang="scss">
@import '../css/style.scss';
.news-list {
  background-color: $base_cream;
  width: 100vw;
  height: 100vh;
}
</style>