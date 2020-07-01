<template>
  <div class="row h-100">
    <div class="col-md-3 vue-bg h-100 d-flex justify-content-center align-items-center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
      <div class="col-md-12">
        <div class="card card-container">
          <h3 class="card-header text-center">Register Now!!!</h3>

          <form name="form" @submit.prevent="handleShopRegister">
            <div v-if="!successful">
              <div class="form-group">
                <label for="shopname" class="col-form-label col-form-lebal-lg">
                  Shop Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="shopname"
                  v-model="shop.shopname"
                  v-validate="'required|min:3|max:20'"
                  type="text"
                  class="form-control"
                  name="shopname"
                />
                <div
                  v-if="submitted && errors.has('shopname')"
                  class="alert-danger"
                >{{errors.first('shopname')}}</div>
              </div>

              <div class="form-group">
                <label for="location">
                  Location of the Shop
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="location"
                  v-model="shop.location"
                  v-validate="'required|max:40'"
                  type="text"
                  class="form-control"
                  name="location"
                />
                <div
                  v-if="submitted && errors.has('location')"
                  class="alert-danger"
                >{{errors.first('location')}}</div>
              </div>

              <div class="form-group">
                <label for="bid">
                  Business Registration No
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="bid"
                  v-model="shop.bid"
                  v-validate="'required|min:3|max:20'"
                  type="bid"
                  class="form-control"
                  name="bid"
                />
                <div
                  v-if="submitted && errors.has('bid')"
                  class="alert-danger"
                >{{errors.first('bid')}}</div>
              </div>

              <div class="form-group">
                <label for="email" class="col-form-label col-form-lebal-lg">
                  Email
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="email"
                  v-model="shop.email"
                  v-validate="'required|email|max:50'"
                  type="email"
                  class="form-control"
                  name="email"
                />
                <div
                  v-if="submitted && errors.has('email')"
                  class="alert-danger"
                >{{errors.first('email')}}</div>
              </div>

              <div class="form-group">
                <label for="mobile_no">
                  Mobile No
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="mobile_no"
                  v-model="shop.mobile_no"
                  v-validate="'required|min:10|max:10'"
                  type="text"
                  class="form-control"
                  name="mobile_no"
                />
                <div
                  v-if="submitted && errors.has('mobile_no')"
                  class="alert-danger"
                >{{errors.first('mobile_no')}}</div>
              </div>

              <div class="form-group">
                <label for="shop_owner_name">
                  Shop Owner Name
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="shop_owner_name"
                  v-model="shop.shop_owner_name"
                  v-validate="'required|min:3|max:20'"
                  type="text"
                  class="form-control"
                  name="shop_owner_name"
                />
                <div
                  v-if="submitted && errors.has('shop_owner_name')"
                  class="alert-danger"
                >{{errors.first('shop_owner_name')}}</div>
              </div>

              <div class="form-group">
                <label for="nic">
                  Shop Owner NIC
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="nic"
                  v-model="shop.nic"
                  v-validate="'required|min:10|max:10'"
                  type="nic"
                  class="form-control"
                  name="nic"
                />
                <div
                  v-if="submitted && errors.has('nic')"
                  class="alert-danger"
                >{{errors.first('nic')}}</div>
              </div>

              <div class="form-group">
                <label for="password">
                  Password
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="password"
                  v-model="shop.password"
                  v-validate="'required|min:6|max:40'"
                  type="password"
                  class="form-control"
                  name="password"
                />
                <div
                  v-if="submitted && errors.has('password')"
                  class="alert-danger"
                >{{errors.first('password')}}</div>
              </div>

              <div class="form-group">
                <button class="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          </form>

          <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >{{message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Shop from "../models/shop";

export default {
  name: "Signup_Shop",
  data() {
    return {
      shop: new Shop("", "", "", "", "", "", "", ""),
      submitted: false,
      successful: false,
      message: ""
    };
  },
  computed: {
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

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 600px !important;
  padding: 40px 40px;
}

.card {
  background-color: #fff;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 300px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>