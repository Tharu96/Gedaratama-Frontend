<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >

          
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Register Your Shop</h4>

              <p slot="description" class="description"></p>

              
                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>email</md-icon> -->
                  <label>
                    Shop Name...
                    <span class="text-danger">*</span>
                  </label>
                  <md-input
                    v-model="shop.shopname"
                    v-validate="'required|min:3|max:20'"
                    type="text"
            
                    name="shopname"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('shopname')"
                    class="alert-danger"
                  >{{errors.first('shopname')}}</div>
                </md-field>

                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>email</md-icon> -->
                  <label>
                    Location of the Shop
                    <span class="text-danger">*</span>
                  </label>

                  <md-input
                    v-model="shop.location"
                    v-validate="'required|max:40'"
                    type="text"
  
                    name="location"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('location')"
                    class="alert-danger"
                  >{{errors.first('location')}}</div>
                </md-field>

                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>email</md-icon> -->
                  <label>
                    Business Registration No
                    <span class="text-danger">*</span>
                  </label>
                  <md-input
                    v-model="shop.bid"
                    v-validate="'required|min:3|max:20'"
                    type="bid"
                    
                    name="bid"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('bid')"
                    class="alert-danger"
                  >{{errors.first('bid')}}</div>
                </md-field>

                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>email</md-icon> -->
                  <label>
                    Email
                    <span class="text-danger">*</span>
                  </label>
                  <md-input
                    v-model="shop.email"
                    v-validate="'required|email|max:50'"
                    type="email"
                    
                    name="email"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('email')"
                    class="alert-danger"
                  >{{errors.first('email')}}</div>
                </md-field>

                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>email</md-icon> -->
                  <label>
                    Mobile No
                    <span class="text-danger">*</span>
                  </label>
                  <md-input
                    v-model="shop.mobile_no"
                    v-validate="'required|min:10|max:10'"
                    type="text"
                    
                    name="mobile_no"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('mobile_no')"
                    class="alert-danger"
                  >{{errors.first('mobile_no')}}</div>
                </md-field>

                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>email</md-icon> -->
                  <label>
                    Shop Owner Name
                    <span class="text-danger">*</span>
                  </label>
                  <md-input
                    v-model="shop.shop_owner_name"
                    v-validate="'required|min:3|max:20'"
                    type="text"
                    
                    name="shop_owner_name"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('shop_owner_name')"
                    class="alert-danger"
                  >{{errors.first('shop_owner_name')}}</div>
                </md-field>

                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>email</md-icon> -->
                  <label>
                    Shop Owner NIC
                    <span class="text-danger">*</span>
                  </label>
                  <md-input
                    v-model="shop.nic"
                    v-validate="'required|min:10|max:10'"
                    type="nic"
                    
                    name="nic"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('nic')"
                    class="alert-danger"
                  >{{errors.first('nic')}}</div>
                </md-field>

                <md-field class="md-form-group" slot="inputs">
                  <!-- <md-icon>lock_outline</md-icon> -->
                  <label>
                    Password
                    <span class="text-danger">*</span>
                  </label>
                  <md-input
                    v-model="shop.password"
                    v-validate="'required|min:6|max:40'"
                    type="password"
                    
                    name="password"
                  ></md-input>
                  <div
                    v-if="submitted && errors.has('password')"
                    class="alert-danger"
                  >{{errors.first('password')}}</div>
                </md-field>
                <md-button slot="footer" v-on:click="handleShopRegister()" class="md-simple md-success md-lg" :disabled="loading">
               <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                REGISTER
              </md-button>
               <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
               </div>
               
            </login-card>
            <div
              v-if="message"
              class="alert"
              :class="successful ? 'alert-success' : 'alert-danger'"
            >{{message}}</div> 
             
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components2";
import Shop from "../models/shop";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
     shop: new Shop("", "", "", "", "", "", "", ""),
      submitted: false,
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleShopRegister() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch("auth/pendingShopRegister", this.shop).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};
</script>

<style lang="css">
.md-layout-item {
  justify-content: left !important;
}
</style>
