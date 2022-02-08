<template>
    <div class="menu">Menu</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Menu',
});
</script>
<style lang="scss">
@import '../../css/style.scss';
.menu {
    background-color: $base_cream;
    height: 50rem;
}
</style>