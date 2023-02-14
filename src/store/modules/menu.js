import categories from "../mocks/menu-categories";
import products from "../mocks/products-categories";

const menuStore = {
  namespaced: true,
  state: {
    menuCategories: categories,
    dishes: products,
  },
  getters: {
    kichenCategorie: ({ menuCategories }) => menuCategories.kichen,
    barCategorie: ({ menuCategories }) => menuCategories.bar,
    tia: ({ menuCategories }) => menuCategories.tia,
    nonAlcohol: ({ menuCategories }) => menuCategories.nonAlcohol,
    alcohol: ({ menuCategories }) => menuCategories.alcohol,
    coctails: ({ menuCategories }) => menuCategories.coctails,
    kichen: ({ dishes }) => dishes,
  },
  mutations: {},
  actions: {},
};

export default menuStore;
