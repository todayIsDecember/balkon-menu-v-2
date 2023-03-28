<template>
  <div class="preloader">
    <div class="preloader__row">
      <div class="preloader__item">Balcon IF</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuLoader",
  created() {
    window.onload = function () {
      document.body.classList.add("loaded_hiding");
      window.setTimeout(() => {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
      }, 500);
    };
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1001;
  .preloader__row {
    position: relative;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    margin-top: -60px;
    margin-left: -60px;
    text-align: center;
    .preloader__item {
      position: absolute;
      z-index: 2;
      color: #fff;
      letter-spacing: 1px;
      font-size: 13px;
      font-weight: bold;
      background-color: #223e49;
      width: 120px; /* поддерживаются любые единицы, в том числе проценты */
      margin: 1em auto;
      background: #223e49;
      border-radius: 50%;
      text-align: center;
      text-transform: uppercase;
      animation-name: logo-scale, logo-shadow;
      animation-duration: 0.5s, 1s;
      animation-iteration-count: 1, infinite;
      animation-timing-function: ease-out;
      &::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        padding-top: 100%;
      }
    }
    @keyframes logo-scale {
      0% {
        scale: 0;
      }
      100% {
        scale: 1;
      }
    }
    @keyframes logo-shadow {
      0% {
        box-shadow: 1px 1px 10px black;
      }
      50% {
        box-shadow: 1px 1px 20px black;
      }
      100% {
        box-shadow: 1px 1px 10px black;
      }
    }
  }
}
.loaded_hiding .preloader {
  transition: 0.3s opacity;
  opacity: 0;
}

.loaded .preloader {
  display: none;
}
</style>
