<template>
  <!-- fixed -->
  <l-fixed :left="15" :bottom="15">
    <div style="width: 30px; height: 30px; background: red; border-radius: 50%"></div>
  </l-fixed>

  <!-- absolute -->
  <l-absolute style="width: 500px; height: 500px; background: lightcyan">
    <l-absolute-item :x="150" :y="75" style="width: 75px; height: 75px; background: darkgreen;"></l-absolute-item>
    <l-absolute-item :x="317" y="36%" style="width: 75px; height: 75px; background: yellow;"></l-absolute-item>
    <l-absolute-item x="100%" y="20%" style="width: 75px; height: 75px; background: deeppink;"></l-absolute-item>
  </l-absolute>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fixed } from "@/components/fixed";
import { absolute, absoluteItem } from '@/components/absolute';

export default defineComponent({
  name: 'App',
  components: {
    [fixed.name]: fixed,
    [absolute.name]: absolute,
    [absoluteItem.name]: absoluteItem,
  }
});
</script>

<style lang="scss">
@import 'components/main';
</style>
