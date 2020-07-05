<login-card header-color="green">
              <h4 slot="title" class="card-title">Register Your Shop</h4>

              <p slot="description" class="description"></p>

              <div v-if="!successful">
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
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
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
                    class="form-control"
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
                <md-button slot="footer" v-on:click="handleShopRegister()"  class="md-simple md-success md-lg" :disabled="loading" > 
                   <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                REGISTER</md-button>
              </div>
            </login-card>