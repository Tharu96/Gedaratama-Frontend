<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-30 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green" >
              <h4 slot="title" class="card-title">Login</h4>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description"></p>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <span class="text-danger">*</span>
                <md-input 
                v-model="user.email" 
                v-validate="'required'" 
                type="email"
                name="email">
                </md-input>
                <div
                v-if="errors.has('email')"
                class="alert alert-danger"
                role="alert"
              >Email is required!</div>
              </md-field>

              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                 <span class="text-danger">*</span>
                <md-input 
                v-model="user.password"
                 v-validate="'required'" 
                 type="password"
                 name="password">
                 </md-input>
                 <div
                v-if="errors.has('password')"
                class="alert alert-danger"
                role="alert"
              >Password is required!</div>
              </md-field>
              <md-button slot="footer" v-on:click="handleLogin()" class="md-simple md-success md-lg" :disabled="loading">
               <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                LOGIN
              </md-button>
               <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
            </div>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components2";
import User from "../models/user";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: ""
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/homepage4.jpeg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.email && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/profile");
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};
</script>

<style lang="css">
.md-layout-item{
     justify-content: left !important;
}



</style>
