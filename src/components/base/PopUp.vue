<template>
  <div class="popper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "pop-up"
};
</script>

<style lang="scss">
.popper {
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  background: $color2;
  padding: 5px;
  color: $color-adaptable;
  border-radius: 0.5em;
  width: 150px;
  text-align: center;
}
</style>
