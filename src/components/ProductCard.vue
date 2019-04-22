<template>
  <div class="product-card">
    <img :src="images[0].large" :alt="images[0].alt" class="product-card-image">
    <div class="product-card-description">
      <h2 class="title">{{ name }}</h2>
      <p class="description">{{ shortDescription }}</p>
      <div class="details">
        <div class="tags">
          <span v-for="tag in tags" :key="tag.id" class="tag">{{ tag.name }}</span>
        </div>
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
    price: String
  }
};
</script>

<style lang="scss">
.product-card {
  border: 1px solid #446a5f3b;
  font-family: $font-body;
  // border-width: 2px;
  // border-style: solid;
  border-radius: 0.5em;
}

.product-card-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.product-card-description {
  padding: 0.5em;
  text-align: center;
  .title {
    color: $color-dark;
    font-family: $font-body;
    // padding-bottom: 0.5em;
  }
  .description {
    color: $color-dark-faded;
  }
}

.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.tag {
  border-radius: 0.5em;
  color: $color-dark-faded;
  &:not(:last-of-type) {
    &:after {
      content: ", ";
    }
  }
}

.price {
  margin-left: auto;
  justify-self: end;
  background: $color-good;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  color: $color-light;
  font-weight: 700;
}
</style>
