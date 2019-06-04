<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="d_date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="d_date"
        :label="$t(label)"
        prepend-icon="fa-file-movie-o"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="d_date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.menu.save(d_date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import _ from 'lodash';
import dateFns from 'date-fns';
export default {
  props: {
    date: {
      default: undefined
    },
    label: {
      type: String,
      default: 'date'
    }
  },
  data: () => ({
    d_date: undefined,
    menu: false,
    modal: false,
    menu2: false
  }),
  created () {
    this.date && (this.d_date = dateFns.format(this.date, 'YYYY-MM-DD'));
  },
  watch: {
    date (value) {
      if (!value) {
        this.d_date = undefined;
      } else if (_.isString(value)) {
        this.d_date = value;
      } else {
        this.d_date = dateFns.format(value, 'YYYY-MM-DD');
      }
    },
    d_date: {
      handler (value) {
        if (!value) {
          this.$emit('update:date', undefined);
        } else if (_.isString(this.date)) {
          this.$emit('update:date', this.d_date);
        } else {
          this.$emit('update:date', new Date(value));
        }
      },
      immediate: false
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
