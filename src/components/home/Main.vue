<template>
    <div class="main">Main</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Main',
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.main {
    background-color: $base_of;
    height: 50rem;
}
</style>