<template>
  <div class="categories-section" :class="putClass">
    <div
      class="categories-item"
      v-for="(value, name, index) in categories"
      :key="index"
      :style="{
        'background-image': `url(./categories/${value.photo})`,
      }"
      @click="chooseEl(value.name, $event)"
    >
      <div class="bg">
        <div class="text-content">{{ value.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCategories",
  created() {
    setTimeout(() => {
      this.isActive = true;
    }, 10);
  },
  props: {
    categories: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    isActive: false,
  }),
  computed: {
    putClass() {
      return this.isActive ? "isActive" : "not-active";
    },
  },
  methods: {
    chooseEl(name) {
      this.$emit("chooseEl", name);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.categories-section {
  position: relative;
  margin-top: 170px;
  left: 150px;
  opacity: 0;
  transition: all 0.4s ease-out;
  .categories-item {
    position: relative;
    height: 120px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 10px black;
    border-radius: 15px;
    margin: 15px 15px;
    .bg {
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 120px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      .text-content {
        position: absolute;
        font-size: 30px;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
        z-index: 2;
      }
    }
  }
}
.isActive {
  left: 0;
  opacity: 1;
  transition: all 0.4s ease-out;
}
</style>
