<template>
  <div class="la-ball-grid-beat la-dark la-3x">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "shop-spinner"
};
</script>

<style lang="scss">
/*!
 * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
 * Copyright 2015 Daniel Cardoso <@DanielCardoso>
 * Licensed under MIT
 */
.la-ball-grid-beat,
.la-ball-grid-beat > div {
  position: relative;
  box-sizing: border-box;
}
.la-ball-grid-beat {
  display: block;
  font-size: 0;
  color: #fff;
  margin: auto 0;
}
.la-ball-grid-beat.la-dark {
  color: $color3;
}
.la-ball-grid-beat > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}
.la-ball-grid-beat {
  width: 36px;
  height: 36px;
}
.la-ball-grid-beat > div {
  width: 8px;
  height: 8px;
  margin: 2px;
  border-radius: 100%;
  animation-name: ball-grid-beat;
  animation-iteration-count: infinite;
}
.la-ball-grid-beat > div:nth-child(1) {
  animation-duration: 0.65s;
  animation-delay: 0.03s;
}
.la-ball-grid-beat > div:nth-child(2) {
  animation-duration: 1.02s;
  animation-delay: 0.09s;
}
.la-ball-grid-beat > div:nth-child(3) {
  animation-duration: 1.06s;
  animation-delay: -0.69s;
}
.la-ball-grid-beat > div:nth-child(4) {
  animation-duration: 1.5s;
  animation-delay: -0.41s;
}
.la-ball-grid-beat > div:nth-child(5) {
  animation-duration: 1.6s;
  animation-delay: 0.04s;
}
.la-ball-grid-beat > div:nth-child(6) {
  animation-duration: 0.84s;
  animation-delay: 0.07s;
}
.la-ball-grid-beat > div:nth-child(7) {
  animation-duration: 0.68s;
  animation-delay: -0.66s;
}
.la-ball-grid-beat > div:nth-child(8) {
  animation-duration: 0.93s;
  animation-delay: -0.76s;
}
.la-ball-grid-beat > div:nth-child(9) {
  animation-duration: 1.24s;
  animation-delay: -0.76s;
}
.la-ball-grid-beat.la-sm {
  width: 18px;
  height: 18px;
}
.la-ball-grid-beat.la-sm > div {
  width: 4px;
  height: 4px;
  margin: 1px;
}
.la-ball-grid-beat.la-2x {
  width: 72px;
  height: 72px;
}
.la-ball-grid-beat.la-2x > div {
  width: 16px;
  height: 16px;
  margin: 4px;
}
.la-ball-grid-beat.la-3x {
  width: 108px;
  height: 108px;
}
.la-ball-grid-beat.la-3x > div {
  width: 24px;
  height: 24px;
  margin: 6px;
}
/*
 * Animation
 */
@-webkit-keyframes ball-grid-beat {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes ball-grid-beat {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes ball-grid-beat {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
  100% {
    opacity: 1;
  }
}
@keyframes ball-grid-beat {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.35;
  }
  100% {
    opacity: 1;
  }
}
</style>

