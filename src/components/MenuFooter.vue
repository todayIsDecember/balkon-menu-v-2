<template>
  <div class="footer"></div>
</template>

<script>
export default {
  name: "MenuFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-image: url("../assets/logo/logo.jpg");
  background-size: cover;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
