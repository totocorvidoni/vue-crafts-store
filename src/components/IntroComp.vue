<template>
  <div class="intro">
    <div class="home-title">
      <h1>Hola!</h1>
      <p>Bienvenidos a Nuestra Web</p>
    </div>

    <p
      class="text"
    >Porque los materiales que elegimos? hablar de la importancia de las texturas y de la energia del producto hecho a mano y Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nam sit obcaecati fugiat nemo rerum fugit dolorem! Itaque id explicabo ipsam totam, ad dolor eaque cupiditate voluptatem accusamus aspernatur distinctio.</p>
  </div>
</template>

<script>
export default {
  name: "intro-comp"
};
</script>

<style lang="scss">
.intro {
  text-align: center;
  margin: 2em;

  .home-title {
    color: $color1;
    letter-spacing: 0.25em;
    margin: 0.5em;
    font-size: 1.5em;
    font-weight: 700;
  }

  .text {
    font-size: 1.2em;
    margin: 0.5em auto;
    width: 50%;
  }
}
</style>
