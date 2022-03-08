const state = {
  tagsList: [],
  collapse: false,
  // cachedViews : [],
  // currentClose : ''
};

const mutations = {
  DEL_TAGS_ITEM: (state, data) => {
    state.tagsList.splice(data.index, 1);
  },
  SET_TAGS_ITEM: (state, data) => {
    state.tagsList.push(data);
  },
  CLEAR_TAGS: (state) => {
    state.tagsList = [];
  },
  CLOSE_TAGS_OTHER: (state, data) => {
    state.tagsList = data;
  },
  CLOSE_CURRENT_TAG: (state, data) => {
    for (let i = 0, len = state.tagsList.length; i < len; i++) {
      const item = state.tagsList[i];
      if (item.path === data.$route.fullPath) {
        if (i < len - 1) {
          data.$router.push(state.tagsList[i + 1].path);
        } else if (i > 0) {
          data.$router.push(state.tagsList[i - 1].path);
        } else {
          data.$router.push("/");
        }
        state.tagsList.splice(i, 1);
        break;
      }
    }
  },
  HANDLE_COLLAPSE: (state, data) => {
    state.collapse = data;
  },
};

const actions = {
  delTagsItem({ commit, state }, data) {
     commit("DEL_TAGS_ITEM", data);
    // return new Promise((resolve) => {
    //   commit("DEL_TAGS_ITEM", data);
    //   resolve([...state.tagsList]);
    // });
  },
  setTagsItem({ commit, state }, data) {
    commit("SET_TAGS_ITEM", data);
    // return new Promise((resolve) => {
    //   commit("SET_TAGS_ITEM", data);
    //   resolve([...state.tagsList]);
    // });
  },
  clearTags({ commit }) {
    commit("CLEAR_TAGS");
    // return new Promise((resolve) => {
    //   commit("CLEAR_TAGS", data);
    //   resolve([...state.tagsList]);
    // });
  },
  closeTagsOther({ commit, state }, data) {
    commit("CLOSE_TAGS_OTHER", data);
    // return new Promise((resolve) => {
    //   commit("CLOSE_TAGS_OTHER", data);
    //   resolve([...state.tagsList]);
    // });
  },
  closeCurrentTag({ commit, state }, data) {
    commit("CLOSE_CURRENT_TAG", data);
    // return new Promise((resolve) => {
    //   commit("CLOSE_CURRENT_TAG", data);
    //   resolve([...state.tagsList]);
    // });
  },
  handleCollapse({ commit }, data) {
    commit("HANDLE_COLLAPSE", data);
    // return new Promise((resolve) => {
    //   commit("HANDLE_COLLAPSE", data);
    //   // resolve(...state.collapse);
    // });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
