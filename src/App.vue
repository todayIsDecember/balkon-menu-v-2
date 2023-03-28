<template>
  <div id="app">
    <MenuLoader />
    <MenuAdverticing @clickAdd="onClickAdd" />
    <MenuHeader />
    <MenuContacts />
    <MenuNavigation :nav="choose_section" @shooseNavItem="onChooseNavItem" />
    <KichenBar @pickMenu="onPickMenu" v-if="choose_section == 'Головна'" />
    <MenuCategories
      :categories="menu_categories"
      @chooseEl="onChooseEl"
      v-else-if="choose_section == 'Кухня' || choose_section == 'Бар'"
    />
    <BarCategories
      :categories="bar_categories"
      @chooseEl="onChooseEl"
      v-else-if="
        choose_section == 'Чаї' ||
        choose_section == 'Безалкогольні напої' ||
        choose_section == 'Алкоголь' ||
        choose_section == 'Коктейлі'
      "
    />
    <MenuDishes :dishes="ObjDataValues" v-else />
    <MenuFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuHeader from "./components/MenuHeader.vue";
import MenuContacts from "./components/MenuContacts.vue";
import KichenBar from "./components/KichenBar.vue";
import MenuFooter from "./components/MenuFooter.vue";
import MenuCategories from "./components/MenuCategories.vue";
import MenuNavigation from "./components/MenuNavigation.vue";
import MenuDishes from "./components/MenuDishes.vue";
import BarCategories from "./components/BarCategories.vue";
import MenuLoader from "./components/MenuLoader.vue";
import MenuAdverticing from "./components/MenuAdverticing.vue";

export default {
  name: "App",
  components: {
    MenuHeader,
    MenuContacts,
    KichenBar,
    MenuFooter,
    MenuCategories,
    MenuNavigation,
    MenuDishes,
    BarCategories,
    MenuLoader,
    MenuAdverticing,
  },
  data: () => ({
    menu_categories: {},
    bar_categories: {},
    choose_section: "Головна",
    ObjDataValues: {},
  }),
  methods: {
    ...mapGetters("menu", [
      "kichenCategorie",
      "barCategorie",
      "tia",
      "nonAlcohol",
      "alcohol",
      "coctails",
      "kichen",
    ]),
    onPickMenu(e) {
      let item = e.target;
      if (
        item.classList.contains("kichen") ||
        item.classList.contains("text-kichen")
      ) {
        this.menu_categories = { ...this.kichenCategorie() };
        this.choose_section = "Кухня";
      } else if (
        item.classList.contains("bar") ||
        item.classList.contains("text-bar")
      ) {
        this.menu_categories = { ...this.barCategorie() };
        this.choose_section = "Бар";
      } else {
        return;
      }
    },
    onChooseNavItem(name) {
      this.choose_section = name;
    },
    onChooseEl(name) {
      this.choose_section = name;
      if (name == "Чаї") {
        this.bar_categories = { ...this.tia() };
        return;
      } else if (name == "Безалкогольні напої") {
        this.bar_categories = { ...this.nonAlcohol() };
        return;
      } else if (name == "Алкоголь") {
        this.bar_categories = { ...this.alcohol() };
        return;
      } else if (name == "Коктейлі") {
        this.bar_categories = { ...this.coctails() };
        return;
      } else {
        window.scrollTo(0, 0);
        this.ObjDataValues = { ...this.kichen()[name] };
      }
    },
    onClickAdd(e) {
      if (e.target.classList.contains("box")) {
        this.ObjDataValues = { ...this.kichen()["Холодні коктейлі"] };
        this.choose_section = "Холодні коктейлі";
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
