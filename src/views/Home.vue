<template>
  <div class="home">
    <hr>

    <b-btn variant="outline-success" @click="showAdd = true">新增文章</b-btn>

    <p v-show="showAdd">
      <b-form @submit="onSubmit">
        <b-form-group id="inputGroupTitle"
                      label="Title:"
                      label-for="artcleTitle">
          <b-form-input id="artcleTitle"
                        type="text"
                        v-model="form.title"
                        required
                        placeholder="">
          </b-form-input>
        </b-form-group>
        <b-form-group id="inputGroupContent"
                      label="Content:"
                      label-for="artcleContent">
          <b-form-input id="artcleContent"
                        type="text"
                        v-model="form.Content"
                        required
                        placeholder="">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </p>

    <hr>

    <p v-for="article in articles" :key="article.id">
      <b-card :title="article.title">
        <p class="card-text">
            {{ article.content }}
        </p>
        <b-button variant="outline-primary" @click="doLike(article)">
          Likes <b-badge variant="light">{{ article.likes }}</b-badge>
        </b-button>
      </b-card>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {

  private showAdd = false;
  private form = {
    title: '',
    content: '',
  };

  private mounted() {
    this.$store.dispatch('getArticles');
  }

  private get articles() {
    return this.$store.state.articles;
  }

  private doLike(article: any) {
    article.likes++;
    this.$store.dispatch('postLike', article.id);
  }

  private onSubmit(evt: any) {
    evt.preventDefault();
    this.$store.dispatch('postArticle', this.form);

    this.showAdd = false;
    this.form = {
      title: '',
      content: '',
    };
  }
}
</script>
