<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="purple">
            <h4 class="title">Pending Shop Requests</h4>
            <p class="category">Check Validity of Shops</p>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="pending_shops" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Unique User Id">{{ item.uuid }}</md-table-cell>
                  <md-table-cell md-label="Shop Name">{{ item.shop_name }}</md-table-cell>
                  <md-table-cell md-label="Location">{{ item.location}}</md-table-cell>
                  <md-table-cell md-label="Shop Owner">{{ item.shop_owner_name }}</md-table-cell>
                  <md-table-cell md-label="Business Reg. No">{{ item.businessRegNo}}</md-table-cell>
                  <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
                  <md-table-cell md-label="NIC">{{ item.nic}}</md-table-cell>
                  <md-table-cell md-label="Mobile No">{{ item.mobile_no }}</md-table-cell>
                  <md-table-cell md-label>
                    <p style="margin:0;">
                      <a href>
                        <button
                          type="button"
                          class="btn btn-outline-secondary btn-sm"
                          id="ok"
                          style="border:0;"
                           @click="acceptPendingShop(item.uuid)"
                        >
                          <i class="material-icons">done</i>
                        </button>
                      </a>

                      <a href>
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                          id="delete"
                          style="border:0;"
                          onclick="return confirm('Are you sure you want to delete?')"
                        >
                          <i class="material-icons">delete_forever</i>
                        </button>
                      </a>
                    </p>
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "./auth.service";
export default {
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pending_shops:[],
       successful: false,
      message: ""
    };
  },

  methods: {
    retrievePendingShops() {
      AuthService.getAllPendingShops()
        .then(response => {
          this.pending_shops = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    acceptPendingShop(uuid){
      console.log(uuid);
       this.message = "";
       AuthService.acceptPendingShop(uuid)
        .then(data => {
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
        )

    }
  },

  mounted() {
    this.retrievePendingShops();
  }
};
</script>
