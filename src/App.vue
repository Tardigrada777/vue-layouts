<template>
  <!-- sticky -->
  <l-sticky style="color: white">
    <div class="topbar"></div>
  </l-sticky>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <l-sticky>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
      repellendus vitae! Adipisci dolore in, itaque maxime modi quo repudiandae
      sint.
    </p>
  </l-sticky>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, repellendus
    vitae! Adipisci dolore in, itaque maxime modi quo repudiandae sint.
  </p>

  <!-- fixed -->
  <l-fixed :left="15" :bottom="15">
    <div
      style="width: 30px; height: 30px; background: red; border-radius: 50%"
    ></div>
  </l-fixed>

  <!-- absolute -->
  <l-absolute style="width: 500px; height: 500px; background: lightcyan">
    <l-absolute-item
      :x="150"
      :y="75"
      style="width: 75px; height: 75px; background: darkgreen;"
    ></l-absolute-item>
    <l-absolute-item
      :x="317"
      y="36%"
      style="width: 75px; height: 75px; background: yellow;"
    ></l-absolute-item>
    <l-absolute-item
      x="100%"
      y="20%"
      style="width: 75px; height: 75px; background: deeppink;"
    ></l-absolute-item>
  </l-absolute>

  <h3>center</h3>
  <l-center full style="height: 450px" :z="30">
    <span>Center</span>
  </l-center>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fixed } from '@/components/fixed';
import { absolute, absoluteItem } from '@/components/absolute';
import { sticky } from '@/components/sticky';
import { center } from '@/components/center';

export default defineComponent({
  name: 'App',
  components: {
    [fixed.name]: fixed,
    [absolute.name]: absolute,
    [absoluteItem.name]: absoluteItem,
    [sticky.name]: sticky,
    [center.name]: center
  }
});
</script>

<style lang="scss">
@import 'styles/main';

/* TODO: remove */
p {
  font-size: 36px;
}

.topbar {
  height: 50px;
  background-color: deeppink;
}

.container {
  height: 500px;
  background: black;
  overflow-x: scroll;
}

.left-sidebar {
  width: 50px;
  height: 100%;
  background: darkblue;
}
</style>
