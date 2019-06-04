<template>
  <v-container fluid fill-height class="v-body">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{$t('login')}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom></v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                prepend-icon="fa-address-book"
                v-model="userName"
                :rules="$rules({dis:'userName'})"
                :label="$t('userName')"
                type="text"
              ></v-text-field>
              <v-text-field
                id="passWord"
                prepend-icon="fa-key"
                v-model="passWord"
                :label="$t('passWord')"
                :rules="$rules({dis:'passWord'})"
                autocomplete="on"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="clickLogin">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    userName: undefined,
    passWord: undefined
  }),
  methods: {
    clickLogin () {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.$axios.post('/login', { userName: this.userName, passWord: this.passWord })
        .then((result) => {
          this.$store.dispatch('auth/loginSuccess', result.user);
          this.$store.dispatch('auth/token', result.token);
          this.$router.replace('/');
        }).catch((err) => {
          // console.log(err);
          this.$toast(err.message);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.v-body {
  height: 80vh;
}
</style>
