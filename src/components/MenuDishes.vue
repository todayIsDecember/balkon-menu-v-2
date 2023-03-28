<template>
  <div class="menu-dishes" :class="putClass">
    <div
      class="dishes-item"
      @click="takeID(value.id)"
      v-for="(value, name, index) in dishes"
      :key="index"
      v-b-modal.info-product
    >
      <div class="menu-dishes-info">
        <div class="dishes-name">{{ value.name }}</div>
        <div class="dishes-desc">{{ value.desc }}</div>
        <div class="menu-dishes-sub-info">
          <div class="dishes-price">{{ value.price }}</div>
        </div>
      </div>
      <div
        class="dishes-img"
        :style="{ 'background-image': `url(./products/${value.photo})` }"
      ></div>
    </div>
    <InfoAboutProject :product="dishes[id]" />
  </div>
</template>

<script>
import InfoAboutProject from "./InfoAboutProject.vue";
export default {
  name: "MenuDishes",
  props: {
    dishes: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    InfoAboutProject,
  },
  created() {
    setTimeout(() => {
      this.isActive = true;
    }, 10);
  },
  data: () => ({
    isActive: false,
    id: 1,
  }),
  computed: {
    putClass() {
      return this.isActive ? "isActive" : "not-active";
    },
  },
  methods: {
    takeID(id) {
      this.id = id;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-dishes {
  position: relative;
  margin-top: 170px;
  opacity: 0;
  left: 120px;
  display: flex;
  flex-direction: column;
  // margin-bottom: 275px;
  .dishes-item {
    display: flex;
    justify-content: space-between;
    margin: 0px 15px;
    padding: 15px;
    // border-bottom: 1px dashed #223e49;
    border-radius: 15px;
    box-shadow: 1px 1px 20px grey;
    margin-bottom: 15px;
    .menu-dishes-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 60%;
      .dishes-name {
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #223e49;
        padding-bottom: 10px;
        border-bottom: 1px dashed #223e49;
      }
      .dishes-desc {
        font-size: 12px;
        color: grey;
      }
      .menu-dishes-sub-info {
        display: flex;
        justify-content: space-between;
        .dishes-price {
          font-size: 14px;
          color: #223e49;
        }
        .dishes-weight {
          font-size: 14px;
          color: #223e49;
        }
      }
    }
    .dishes-img {
      width: 130px;
      height: 130px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 15px;
    }
  }
}

.isActive {
  left: 0;
  opacity: 1;
  transition: all 0.4s ease-out;
}
</style>
