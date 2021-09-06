<template>
  <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Inspire extends Vue {
  readonly name: string = 'inspire';
  layout() {
    return 'default';
  }
}
</script>
