<template>
  <fixed :left="15" :bottom="15">
    <div style="width: 30px; height: 30px; background: red; border-radius: 50%"></div>
  </fixed>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fixed } from "@/components/fixed";

export default defineComponent({
  name: 'App',
  components: {
    fixed,
  }
});
</script>

<style lang="scss">
@import './components/fixed';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
