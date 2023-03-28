<template>
  <div class="navigation">
    <div
      class="navigation-item"
      v-for="(name, index) in changeNavigator"
      :key="index"
      @click="shooseNavItem"
    >
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuNavigation",
  props: {
    nav: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    navLine: [],
  }),
  methods: {
    addNavigatorItem() {
      this.navLine.push(this.nav);
      return this.navLine;
    },
    shooseNavItem(e) {
      let name = e.target.outerText;
      if (name == "Головна") {
        this.navLine = [];
      } else if (name == "Бар" || name == "Кухня") {
        this.navLine = ["Головна"];
      } else if (this.navLine[this.navLine.length - 1] === name) {
        this.navLine.pop();
      } else {
        this.navLine.pop();
        this.navLine.pop();
      }
      window.scrollTo(0, 0);
      this.$emit("shooseNavItem", name);
    },
  },
  computed: {
    changeNavigator() {
      return this.addNavigatorItem();
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  z-index: 100;
  width: 100%;
  bottom: 0;
  height: 60px;
  // margin: 20px 15px;
  background-color: #223e49;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0.8;
  .navigation-item {
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    margin-left: 10px;
    border-right: 1px dashed white;
    border-left: 1px dashed white;
    padding: 0px 6px;
    border-radius: 10px;
  }
}
</style>
