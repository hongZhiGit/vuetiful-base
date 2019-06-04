<template>
  <v-app>
    <!-- 导航 -->
    <w-navigation v-if="$store.getters['auth/user']" :drawer="drawer" @todrawer="(p)=> drawer = p"></w-navigation>
    <!-- 导航end -->
    <!-- 标题 -->
    <v-toolbar color="primary" app dense fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{$t('advokateCard')}}</span>
        <span class="font-weight-light">{{$t('pos')}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div style="width:120px;">
        <v-select
          v-model="i18nValue"
          :items="i18nArray"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="fa-language"
          single-line
        ></v-select>
      </div>
    </v-toolbar>
    <!-- 标题end -->
    <v-content class="v-content">
      <div class="v-body">
        <router-view/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import WNavigation from './components/WNavigation.vue';
export default {
  name: 'App',
  components: {
    WNavigation
  },
  data () {
    return {
      drawer: true,
      i18nValue: process.env.VUE_APP_I18N_LOCALE,
      i18nArray: ['en', 'zh-cn']
    };
  },
  watch: {
    i18nValue (value) {
      this.$i18n.locale = value;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.v-content {
  background-color: #ededed;

  .v-body {
    margin: 20px 10px;
    background-color: #ffffff;
  }
}

.word {
  word-wrap: break-word;
  word-break: break-all;
}
</style>
