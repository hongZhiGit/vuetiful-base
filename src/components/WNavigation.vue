<template>
  <v-navigation-drawer fixed clipped v-model="meDrawer" app>
    <v-list dense>
      <v-list-tile v-for="item in navArray" :key="item.id" :to="item.path">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ $t(item.text) }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <!-- <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
      <v-list-tile class="mt-3">
        <v-list-tile-action>
          <v-icon color="grey darken-1">add_circle_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon color="grey darken-1">settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
      </v-list-tile>-->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    meDrawer: true,
    navArray: [
      {
        id: 1,
        icon: 'trending_up',
        text: 'cardList',
        path: '/card-list'
      },
      {
        id: 2,
        icon: 'trending_up',
        text: 'cardManager',
        path: '/card'
      },
      {
        id: 3,
        icon: 'supervisor_account',
        text: 'memberManager',
        path: '/member'
      }
    ]
  }),
  watch: {
    drawer (value) {
      this.meDrawer = value;
    },
    meDrawer (value) {
      this.$emit('todrawer', value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
