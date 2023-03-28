<template>
  <b-modal
    id="advert"
    :hide-header="true"
    :hide-footer="true"
    :scrollable="true"
    class="custom-modal"
    ref="my-modal-add"
  >
    <div class="box" @click="clickAdd">
      <b-icon
        icon="plus-circle-fill"
        class="exit"
        rotate="45"
        font-scale="1.5"
        @click="hideModal"
      ></b-icon>
      <div class="name">Оновлена коктельна карта спеціально для тебе</div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "MenuAdverticing",
  mounted() {
    setTimeout(() => {
      this.$refs["my-modal-add"].show();
    }, 2000);
  },
  methods: {
    hideModal() {
      return this.$refs["my-modal-add"].hide();
    },
    clickAdd(e) {
      this.$emit("clickAdd", e);
      this.$refs["my-modal-add"].hide();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Rampart+One&display=swap");
::v-deep .modal-body {
  padding: 0;
}
::v-deep .modal-content {
  background-image: url("../../public/products/adv.jpg");
  background-size: cover;
  background-position: center;
  height: 80vh;
  width: 80%;
  border-radius: 25px;
  box-shadow: 8px 11px 20px #000;
}

::v-deep .modal-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .exit {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
  }
  .name {
    font-size: 33px;
    color: #1f1e1e;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 2px 2px rgb(255 255 255);
    margin-top: 50px;
  }
}
</style>
