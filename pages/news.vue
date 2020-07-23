<template>
  <v-layout column justify-center align-center>
    <v-flex v-if="isLoading" xs12 sm8 md6>
      Loading ...
    </v-flex>
    <v-flex v-else xs12 sm8 md6>
      <v-card v-for="(article, index) in articles" :key="index" class="my-5">
        <v-card-title class="headline">
          {{ article.title }}
        </v-card-title>
        <v-card-text>
          <img
            :id="'image-' + index"
            :src="article.urlToImage"
            class="image-preview"
          />
          {{ article.content }}
          <div class="text-xs-right">
            <em
              ><small>&mdash; {{ article.author }}</small></em
            >
          </div>
          <hr class="my-3" />
          <a :href="article.url" target="_blank" class="text--primary">
            Source: {{ article.source.name }}
          </a>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { Article } from '~/@types'

@Component({
  components: {
    Logo,
    VuetifyLogo
  }
})
export default class News extends Vue {
  isLoading: boolean = true

  get articles(): Article[] {
    return this.$store.state.news.articles
  }

  async mounted() {
    await this.$store.dispatch('news/getNews')
    this.isLoading = false
  }
}
</script>

<style lang="stylus" scoped>
.image-preview {
  width: 100%;
}
</style>
