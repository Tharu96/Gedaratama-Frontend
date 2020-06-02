<template>
   

        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
            <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
                <div class="card ">
                    <h3 class="card-header text-center">Register Now!!!</h3>
                    
                    <form id="signup-form"  name="form" @submit.prevent="handleRegister">
                    <div v-if="!successful">
                        <div class="col-12 from-group">
                            <label for="shopname" class="col-form-label col-form-lebal-lg">Shop Name<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.shopname"
                                v-validate="'required|min:3|max:20'" 
                                type="text" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="shopname"
                            />
                            <div 
                                v-if="submitted && errors.has('shopname')"
                                class="alert-danger"
                             >{{errors.first('shopname')}}
                            </div>
                        </div>
                        
                        <div class="col-12 from-group">
                            <label for="location" class="col-form-label col-form-lebal-lg">Location of the shop<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.location"
                                v-validate="'required|min:3|max:20'" 
                                type="text" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="location"
                            />
                            <div 
                                v-if="submitted && errors.has('location')"
                                class="alert-danger"
                             >{{errors.first('location')}}
                            </div>
                        </div>

                        <div class="col-12 from-group">
                            <label for="bid" class="col-form-label col-form-lebal-lg">Business Registration No<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.bid"
                                v-validate="'required|min:3|max:20'" 
                                type="text" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="bid"
                            />
                            <div 
                                v-if="submitted && errors.has('bid')"
                                class="alert-danger"
                             >{{errors.first('bid')}}
                            </div>
                        </div>

                        <div class="col-12 from-group">
                            <label for="mobile_no" class="col-form-label col-form-lebal-lg">Mobile No<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.mobile_no"
                                v-validate="'required|min:10|max:10'" 
                                type="text" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="mobile_no"
                            />
                            <div 
                                v-if="submitted && errors.has('mobile_no')"
                                class="alert-danger"
                             >{{errors.first('mobile_no')}}
                            </div>
                        </div>

                        <div class="col-12 from-group">
                            <label for="email" class="col-form-label col-form-lebal-lg">Email<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.email"
                                v-validate="'required|email|max:50'" 
                                type="email" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="email"
                            />
                            <div 
                                v-if="submitted && errors.has('email')"
                                class="alert-danger"
                             >{{errors.first('email')}}
                            </div>
                        </div>

                        <div class="col-12 from-group">
                            <label for="shop_owner_name" class="col-form-label col-form-lebal-lg">Shop Owner Name<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.shop_owner_name"
                                v-validate="'required|min:3|max:20'" 
                                type="shop_owner_name" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="shop_owner_name"
                            />
                            <div 
                                v-if="submitted && errors.has('shop_owner_name')"
                                class="alert-danger"
                             >{{errors.first('shop_owner_name')}}
                            </div>
                        </div>

                        <div class="col-12 from-group">
                            <label for="nic" class="col-form-label col-form-lebal-lg">Shop Owner NIC<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.nic"
                                v-validate="'required|nic|max:10'" 
                                type="nic" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="nic"
                            />
                            <div 
                                v-if="submitted && errors.has('nic')"
                                class="alert-danger"
                             >{{errors.first('nic')}}
                            </div>
                        </div>

                        
                       <div class="col-12 from-group">
                            <label for="password" class="col-form-label col-form-lebal-lg">Password<span class="text-danger">*</span></label>
                            <input
                                v-model="shop.password"
                                v-validate="'required|min:6|max:40'" 
                                type="password" v-model.trim="$v.fullname.$model" :class="{'is-invalid':validationStatus($v.fullname)}" class="form-control form-control-lg"
                                name="password"
                            />
                            <div 
                                v-if="submitted && errors.has('password')"
                                class="alert-danger"
                             >{{errors.first('password')}}
                            </div>
                        </div>
                        
                        <div class="col-12 from-group text-center">
                            <button class="btn btn-vue btn-lg col-4">Sign Up</button>
                        </div>
                    </div>
                    </form>

                    <div
                        v-if="message"
                        class="alert"
                        :class="successful ? 'alert-success' : 'alert-danger'"
                    >{{message}}
                    </div>
                </div>
            </div>
        </div>
    
</template>

<script>
import Shop from '../models/shop';

// import{ required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default{
    name: 'ShopSignup',
    data(){
        return {
            shop: new Shop('','','','','','','',''),
            submitted: false,
            successful: false,
            message: ''
            };
    },
    computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/shopRegister', this.user).then(
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

<style>

 /* .card-container.card {
     
  max-width: 350px !important;
  padding: 40px 40px;
} 

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
} */
.btn{
   
   background: #53B985;
   color: #31485D;
   font-weight: bold; 
}
</style>