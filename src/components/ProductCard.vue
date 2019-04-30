<template>
  <div class="product-card" @click="onCardClick">
    <img :src="images[0].shop_catalog" :alt="images[0].alt" class="image">
    <div class="details">
      <div class="name">
        <h2 class="title">{{ name }}</h2>
        <p class="description" v-html="shortDescription"></p>
      </div>
      <div class="tags">
        <span v-for="tag in tags" :key="tag.id" class="tag">{{ tag.name }}</span>
      </div>
      <div class="price-wrapper">
        <span v-if="onSale" class="discount">${{ priceRegular }}</span>
        <span class="price">${{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: {
    id: Number,
    images: Array,
    name: String,
    shortDescription: String,
    tags: Array,
    price: String,
    priceRegular: String,
    onSale: Boolean
  },

  methods: {
    onCardClick() {
      this.$router.push({ name: "products", params: { id: this.id } });
    }
  },

  computed: {}
};
</script>

<style lang="scss">
.product-card {
  display: grid;
  grid-template-rows: 300px auto;
  border: $border-card;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  cursor: pointer;
  font-family: $font-body;
  transition: $transition-slow-and-steady;
  overflow: hidden;

  .image {
    z-index: -10;
  }

  .details {
    display: grid;
    grid-gap: 0.5em;
    grid-template-areas:
      "name name name name"
      "tag   tag   tag  price";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr auto;
    background: $color-light;
    height: 100%;
    font-size: 0.8em;
    padding: 1em;

    .name {
      grid-area: name;
      align-self: center;
      margin-bottom: 0.5em;
    }

    .title {
      grid-area: title;
      color: $color-dark;
      font-family: $font-body;
    }

    .description {
      grid-area: description;
      color: $color-dark-faded;
      text-align: center;
      font-size: 0.9em;
    }

    .tags {
      grid-area: tag;
      align-self: end;
      color: $color-dark-faded;
      font-size: 0.8em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      .tag:not(:last-of-type) {
        &:after {
          content: ", ";
        }
      }
    }

    .price-wrapper {
      grid-area: price;
      justify-self: end;

      .discount {
        font-weight: 700;
        margin-right: 5px;
        color: $color-dark-faded;
        text-decoration: line-through $color-bad;
      }
    }
  }

  &:hover {
    box-shadow: $shadow;
    .image {
      transform: $image-zoom;
      filter: $little-light;
    }
  }
}
</style>
