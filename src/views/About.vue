<template>
  <div class="about-us">
    <h1 class="title">Sobre Nosotros</h1>
    <div class="text">
      <p
        class
      >Sed blandit libero volutpat sed cras. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Aliquam id diam maecenas ultricies. Mauris vitae ultricies leo integer malesuada nunc vel. Convallis convallis tellus id interdum. Diam quis enim lobortis scelerisque fermentum dui faucibus. Bibendum est ultricies integer quis. Amet nisl purus in mollis nunc sed id. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Sed augue lacus viverra vitae congue eu. Morbi leo urna molestie at.</p>
      <p
        class
      >Habitant morbi tristique senectus et netus et malesuada fames ac. Quam nulla porttitor massa id neque aliquam vestibulum.</p>
    </div>
    <img class="picture" src="@/assets/about-picture.jpg" alt />
  </div>
</template>

<script>
export default {
  name: "about-us"
};
</script>

<style lang="scss">
.about-us {
  display: grid;
  grid-template-columns: minmax(auto, 40%) 1fr;
  grid-template-rows: auto 1fr;
  line-height: 1.5em;

  .title {
    text-align: center;
    color: $color1;
    grid-column: 1 / 2;
    margin: 0.5em 0;
  }

  .text {
    padding: 1rem 2rem;
    grid-column: 1 / 2;
    text-align: justify;
    p {
      margin-bottom: 1em;
    }
  }

  .picture {
    grid-column: 2 / 3;
    grid-row: 1 / -1;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
