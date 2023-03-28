<template>
  <div class="header_section">
    <div class="header_bg"></div>
    <div class="logo">Balkon IF</div>
  </div>
</template>

<script>
export default {
  name: "MenuHeader",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");
.header_section {
  position: relative;
  display: flex;
  justify-content: center;
  .header_bg {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 170px;
    background-image: url("../assets/logo/logo.jpg");
    background-size: cover;
    background-position: center;
    z-index: 1;
    border-top: 6px solid #223e49e1;
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
  .logo {
    position: absolute;
    z-index: 2;
    color: #fff;
    letter-spacing: 1px;
    font-size: 10px;
    background-color: #223e49;
    width: 90px; /* поддерживаются любые единицы, в том числе проценты */
    margin: 1em auto;
    background: #223e49cf;
    border-radius: 50%;
    text-align: center;
    margin-top: 35px;
    text-transform: uppercase;
    font-family: "Abril Fatface", cursive;
    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      padding-top: 100%;
    }
  }
}
</style>
