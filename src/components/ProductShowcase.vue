<template>
  <div class="showcase">
    <viewer :options="options" :images="images" @inited="inited" class="viewer" ref="viewer">
      <template slot-scope="scope">
        <img
          class="image"
          v-for="image in scope.images"
          :key="image.id"
          :src="image.shop_catalog"
          :alt="image.alt"
          :data-id="image.id"
          v-show="image.id == activeImage"
        >
      </template>
    </viewer>
    <div
      class="thumb"
      v-for="image in images"
      :key="image.id"
      :class="{ active: image.id == activeImage }"
      @click="onThumbClick"
    >
      <img :src="image.shop_catalog" :alt="image.alt" class="image" :data-id="image.id">
    </div>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import viewer from "v-viewer/src/component.vue";

export default {
  name: "product-showcase",
  props: {
    images: Array
  },
  components: {
    viewer
  },

  data() {
    return {
      activeImage: null,
      // v-viewer options
      options: {
        url: image => image.src.replace("-300x300", ""),
        title: false
      }
    };
  },

  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    onThumbClick(e) {
      const id = parseInt(e.target.dataset.id, 10);
      this.activeImage = id;
    }
  },

  created() {
    this.activeImage = this.images[0].id;
  },

  watch: {
    $route(to, from) {
      this.activeImage = this.images[0].id;
    }
  }
};
</script>

<style lang="scss">
.showcase {
  grid-row: 1 / -1;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 5fr;
  grid-auto-rows: 1fr;
  width: 400px;
  height: 500px;

  & > * {
    overflow: hidden;
    border-radius: 0.25rem;
  }

  .viewer {
    grid-column: 1 / -1;
    .image:hover {
      transform: $image-zoom;
    }
  }

  .image {
    cursor: pointer;
    object-fit: cover;
    transition: $slow-balanced;
    width: 100%;
    height: 100%;
    &:hover {
      filter: $little-light;
    }
  }

  .thumb {
    transition: $slow-balanced;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
}
</style>
