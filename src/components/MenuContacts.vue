<template>
  <div class="contacts">
    <p class="title">Гастробар Балкон</p>
    <p class="location">
      <b-icon class="icon" icon="pin-map" />Площа Ринок 8, Івано-Франківськ,
      Україна
    </p>
    <p class="phone" type="number">
      <b-icon class="icon" icon="telephone" />098 862 0262
    </p>
  </div>
</template>

<script>
export default {
  name: "MenuContacts",
};
</script>

<style lang="scss" scoped>
.contacts {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 140px;
  padding: 10px;
  z-index: 3;
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
  .title {
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 0;
  }
  .location,
  .phone {
    font-size: 12px;
    color: grey;
    margin: 0;
  }

  .location {
    margin: 10px 0;
  }

  .icon {
    margin-right: 10px;
  }
}
</style>
