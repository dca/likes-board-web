import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    articles(state, articles) {
      state.articles = articles;
    },
  },

  actions: {
    getArticles(context) {
      fetch(`http://localhost:5555/v1/articles`)
      .then((res) => res.json())
      .then((res) => {
        context.commit('articles', res.data);
      });
    },
    postArticle(context, article) {
      fetch(`http://localhost:5555/v1/articles`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      })
      .then((res) => res.json())
      .then((res) => {
        context.dispatch('getArticles');
      });
    },
    postLike(context, id) {
      fetch(`http://localhost:5555/v1/articles/${id}/like`, {method: 'POST'})
      .then((res) => res.json())
      .then((res) => {
        //
      });
    },
  },
});
