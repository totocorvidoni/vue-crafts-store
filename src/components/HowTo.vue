<template>
  <div class="how-to">
    <h2 class="uppercase home-title">¿Como trabajamos?</h2>
    <div class="steps-wrapper">
      <div class="step">
        <div class="content">
          <img src="@/assets/store-solid.svg" class="icon" />
          <h3>Descubrí</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut omnis officia facere natus ratione, voluptatum corporis, cum esse eum aliquam unde voluptates ea dicta soluta, quia excepturi explicabo laboriosam.</p>
        </div>
      </div>
      <div class="step">
        <div class="content">
          <img src="@/assets/shopping-bag-dark.svg" class="icon" />
          <h3>Elegí</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore odio amet voluptatibus, beatae nemo est ad dolore accusantium placeat, omnis accusamus nesciunt rerum sit vitae tenetur quam labore quidem?</p>
        </div>
      </div>
      <div class="step">
        <div class="content">
          <img src="@/assets/paper-plane-solid.svg" class="icon" />
          <h3>Pedinos</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate accusantium et tempore consequuntur molestias, aliquid recusandae dolorum? Doloribus rem voluptates dolore neque odit, minus minima omnis architecto nam non.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "how-to"
};
</script>

<style lang='scss'>
.how-to {
  .steps-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .step {
    background: $color-light-faded;
    padding: 1em;
  }

  .content {
    border: 2px solid $color-background;
    border-radius: 0.5em;
    padding: 1em;
    width: 15em;
    height: 100%;

    &:hover h3 {
      color: $color3;
    }
  }

  .icon {
    display: block;
    margin: 0 auto;
    height: 5rem;
    width: auto;
  }

  h3 {
    margin: 1em 0;
    text-align: center;
    transition: $quick-out;
  }
}
</style>
