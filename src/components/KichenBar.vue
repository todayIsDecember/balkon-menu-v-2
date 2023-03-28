<template>
  <div class="menu_section">
    <div class="kichen-bar" :class="addActiveClass" @click="pickMenu">
      <div class="menu_section_item kichen">
        <div class="text-content text-kichen">кухня</div>
      </div>
      <div class="menu_section_item bar">
        <div class="text-content text-bar">бар</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KichenBar",
  data: () => ({
    activeSectionData: false,
  }),
  computed: {
    addActiveClass() {
      return {
        active: this.activeSectionData,
      };
    },
  },
  methods: {
    pickMenu(e) {
      this.$emit("pickMenu", e);
      this.activeSectionData = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.kichen-bar {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  // padding-bottom: 235px;
  margin-top: 150px;
  right: 0;
  transition: all 0.4s ease;
  .menu_section_item {
    height: 120px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 1px 1px 10px black;
    border-radius: 15px;
    margin: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: inherit;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      margin: 15px 15px;
    }
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
  .kichen {
    background-image: url("../../public/main_page/kichen.jpg");
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: inherit;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      margin: 15px 15px;
    }
  }
  .bar {
    background-image: url("../../public/main_page/bar.JPG");
    &::before {
      content: "";
      position: absolute;
      top: 150px;
      left: 0;
      right: 0;
      bottom: 0;
      height: inherit;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      margin: 15px 15px;
      z-index: 1;
    }
  }
}
.active {
  right: 400px;
  opacity: 0;
  transition: all 0.4s ease;
}
</style>
