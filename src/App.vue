<template>
  <v-app>
    <!-- 标题end -->
    <div class="v-body">
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer: true
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>
