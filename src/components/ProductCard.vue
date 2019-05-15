<template>
  <div class="product-card" @click="onCardClick">
    <div class="on-cart" v-if="productInCart">En el pedido</div>
    <img :src="coverImage.shop_catalog" :alt="coverImage.alt" class="image">
    <div class="details">
      <div class="name">
        <h2 class="title">{{ name }}</h2>
        <p class="description" v-html="shortDescription"></p>
      </div>
      <div class="tags">
        <span v-for="tag in tags" :key="tag.id" class="tag">{{ tag.name }}</span>
      </div>
        <price-tag :price="price" :priceRegular="priceRegular" />
    </div>
  </div>
</template>

<script>
import PriceTag from "@/components/base/PriceTag.vue"

export default {
  name: "product-card",
  props: {
    id: Number,
    image: Object,
    name: String,
    shortDescription: String,
    tags: Array,
    price: String,
    priceRegular: String,
    onSale: Boolean
  },

  components: {
    PriceTag
  },

  methods: {
    onCardClick() {
      this.$router.push({ name: "products", params: { id: this.id } });
    }
  },

  computed: {
    productInCart() {
      return this.$store.getters.productInCart(this.id)
    },

    coverImage() {
      if (this.image) {
        return this.image
      } else {
        return {
          shop_catalog: require('@/assets/crochet.svg'),
          alt: 'A yarn as a placeholder image.'
        }
      }
    }
  }
};
</script>

<style lang="scss">
.product-card {
  position: relative;
  display: flex;
  flex-flow: column;
  border: $border-card;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  cursor: pointer;
  font-family: $font-regular;
  transition: $slow-balanced;
  overflow: hidden;

  .on-cart {
    position: absolute;
    top: 10px;
    right: 0;
    background: $color-good;
    color: $color-light;
    font-size: 10pt;
    font-weight: 700;
    padding: 5px;
    border-bottom-left-radius: .5em;
    border-top-left-radius: .5em;
    z-index: 50;
  }

  .image {
    display: block;
    object-fit: cover;
    height: auto;
    width: 100%;
  }

  .details {
    display: grid;
    grid-row-gap: 0.5em;
    grid-template-areas:
      "name name name name"
      "tag   tag   tag  price";
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr auto;
    justify-content: space-between;
    background: $color-light;
    font-size: 0.8em;
    height: 40%;
    padding: 1em;
    z-index: 10;

    .name {
      grid-area: name;
      align-self: center;
      margin-bottom: 0.5em;
    }

    .title {
      grid-area: title;
      color: $color-dark;
      font-family: $font-regular;
      text-align: center;
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
      min-width: 100px;
      justify-self: end;
      grid-area: price;
      margin-left: 5px;
    }
  }

  &:hover {
    box-shadow: $shadow;
    .image {
      transform: $image-zoom;
      filter: $little-light;
    }
  }
  &:active {
    .image {
      transition: $quick-out;
      filter: $big-light;
    }
  }
}

@media all and (max-width: 530px) {
  .product-card {
    border: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    &:hover {
      z-index: 10;
    }
  }
}
</style>
