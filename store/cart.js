export const state = () => ({
  products: [],
  empty: true,
  subtotal: null,
  total: null,
});

export const getters = {
  products(state) {
    return state.products;
  },

  count(state) {
    return state.products.length;
  },

  empty(state) {
    return state.empty;
  },

  subtotal(state) {
    return state.subtotal;
  },

  total(state) {
    return state.total;
  },
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },

  SET_EMPTY(state, empty) {
    state.empty = empty;
  },

  SET_SUBTOTAL(state, subtotal) {
    state.subtotal = subtotal;
  },

  SET_TOTAL(state, total) {
    state.total = total;
  },
};

export const actions = {

  async store({ commit }, payload) {
    commit("SET_PRODUCTS", payload.product);
    commit("SET_EMPTY", payload.meta.empty);
    commit("SET_SUBTOTAL", payload.meta.subtotal);
    commit("SET_TOTAL", payload.meta.total);
  },

  async destroy({ dispatch, state }, productRef) {
    state.products.filter((p) => {
      return p.reference !== productRef;
    });

    dispatch("getCart");
  },
};
