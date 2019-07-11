<template>
  <router-link :to="{name: 'products', params: { id: id }}" class="product-card">
    <div class="on-cart" v-if="productInCart">En el pedido</div>
    <img :src="coverImage.shop_catalog" :alt="coverImage.alt" class="image" />
    <div class="details">
      <div class="main">
        <h2 class="title">{{ name }}</h2>
        <p class="description" v-html="shortDescription"></p>
      </div>
      <div class="secondary">
        <div class="tags">
          <span v-for="tag in tags" :key="tag.id" class="tag">{{ tag.name }}</span>
        </div>
        <price-tag :price="price" :priceRegular="priceRegular" />
      </div>
    </div>
  </router-link>
</template>

<script>
import PriceTag from "@/components/base/PriceTag.vue";

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

  computed: {
    productInCart() {
      return this.$store.getters.productInCart(this.id);
    },

    coverImage() {
      if (this.image) {
        return this.image;
      } else {
        return {
          shop_catalog: require("@/assets/crochet.png"),
          alt: "A yarn as a placeholder image."
        };
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
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
  font-family: $font-regular;
  transition: $slow-balanced;
  text-decoration: none;
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
    border-bottom-left-radius: 0.5em;
    border-top-left-radius: 0.5em;
    z-index: 2;
  }

  .image {
    display: block;
    object-fit: cover;
    height: auto;
    width: 100%;
  }

  .details {
    flex-grow: 2;
    background: $color-light;
    border: $border-card;
    border-top: none;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 0.5em;
    transition: $slow-balanced;
    z-index: 10;

    .main {
      grid-area: name;
      align-self: center;
      margin-bottom: 0.5em;
    }

    .title {
      grid-area: title;
      color: $color1;
      font-family: $font-title;
      margin: 0.5em;
      text-align: center;
    }

    .description {
      grid-area: description;
      color: $color-dark-faded;
      text-align: center;
      font-size: 0.9em;
    }

    .secondary {
      display: flex;
      justify-content: space-between;
    }

    .tags {
      color: $color-dark-faded;
      font-size: 0.8em;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: auto 0;

      .tag:not(:last-of-type) {
        &:after {
          content: ", ";
        }
      }
    }

    .price-tag {
      flex-grow: 2;
      font-size: 1.2em;
      margin: 0 0.25em;
    }
  }

  &:hover {
    box-shadow: $shadow;
    .image {
      transform: $image-zoom;
      filter: $little-light;
    }

    .details {
      border-color: transparent;
    }
  }

  &:active {
    .image {
      transition: $quick-out;
      filter: $big-light;
    }
  }
}

@media all and (max-width: $smallest) {
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
