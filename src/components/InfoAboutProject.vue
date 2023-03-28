<template>
  <b-modal
    id="info-product"
    :hide-header="true"
    :hide-footer="true"
    :scrollable="true"
    class="custom-modal"
    ref="my-modal"
  >
    <div class="info">
      <div
        class="photo"
        :style="{ 'background-image': `url(./products/${product.photo})` }"
      ></div>
      <div class="name">{{ product.name }}</div>
      <div class="storage">{{ product.storage }}</div>
      <div class="weight">Вихід: {{ product.weight }}</div>
      <b-button class="btn-hide" @click="hideModal"
        >Повернутись до меню</b-button
      >
    </div>
  </b-modal>
</template>
<script>
export default {
  name: "InfoAboutProject",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    makeCorrectStorage() {
      const newStorage = this.product.storage.split(",");
      return newStorage;
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  .name {
    color: #223e49;
    font-size: 24px;
    text-align: center;
    letter-spacing: 1px;
  }
  .photo {
    width: 100%;
    height: 500px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 20px 0px;
    border-radius: 15px;
    box-shadow: 1px 1px 10px grey;
  }
  .storage {
    margin: 15px 0;
    font-size: 12px;
    letter-spacing: 1px;
    color: #223e49;
  }
  .weight {
    font-size: 14px;
    // font-weight: bold;
    letter-spacing: 1px;
    color: #223e49;
  }
  .btn-hide {
    margin-top: 15px;
    background-color: #223e49;
    color: #fff;
  }
}
</style>
