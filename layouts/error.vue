<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ErrorLayout extends Vue {
  readonly name: string = 'default';
  layout() {
    return 'empty';
  }

  head(this: any) {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }

  pageNotFound: string = '404 Not Found';
  otherError: string = 'An error occurred';

  @Prop() error: any;
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
