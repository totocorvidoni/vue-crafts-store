<template>
  <div class="showcase">
    <viewer :options="options" :images="images" @inited="inited" class="viewer" ref="viewer">
      <template slot-scope="scope">
        <img
          class="image"
          v-for="image in scope.images"
          :key="image.id"
          :src="image.shop_single"
          :alt="image.alt"
          :data-id="image.id"
          v-show="image.id == activeImage"
        />
      </template>
    </viewer>
    <div class="thumbs">
      <img
        class="image"
        v-for="image in images"
        :key="image.id"
        :class="{ active: image.id == activeImage }"
        @click="onThumbClick"
        :src="image.shop_thumbnail"
        :alt="image.alt"
        :data-id="image.id"
      />
      <div class="more">⇣</div>
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
        // TODO - Get from backend bigger images from a consistent size.
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
  display: flex;
  flex-flow: column;
  max-height: 100%;
  width: 100%;
  height: 100%;

  .viewer {
    border-radius: 0.5em;
    overflow: hidden;
    flex: 1;
  }

  .image {
    display: block;
    cursor: pointer;
    object-fit: cover;
    transition: $slow-balanced;
    width: 100%;
    height: 100%;

    &:hover {
      filter: $little-light;
    }
  }

  .thumbs {
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;

    .image {
      border-radius: 0.5em;
      margin-right: 10px;
      transition: $slow-balanced;
      height: 50px;
      width: 50px;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .active {
    opacity: 1;
  }

  .more {
    display: none;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    color: $color-dark-light;
    font-size: 2em;
    user-select: none;
  }
}

@media all and (max-width: $narrow) {
  .showcase {
    height: calc(100vh - 5rem); // 5rem == height of header.
    .viewer {
      border-radius: 0;
    }

    .thumbs {
      justify-content: center;

      .image {
        margin-right: 10px;
        height: 100px;
        width: 100px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    .more {
      display: block;
    }
  }
}

@media all and (max-width: $smallest) {
}
</style>
