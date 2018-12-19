<template>
  <b-container class="bv-example-row">
    <Nav/>
    <router-view/>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {
  //
}
</script>


<style lang="scss">

</style>
