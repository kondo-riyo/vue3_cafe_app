<template>
    <div class="news">News</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'News',
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.news {
    background-color: $base_of;
    height: 50rem;
}
</style>