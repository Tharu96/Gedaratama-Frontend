<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Manage Sales</h4>
            <p class="category">Sales</p>
          </md-card-header>
          <md-card-content>
            <div>

              
              <md-table v-model="pending_shops" :table-header-color="tableHeaderColor">
                <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Item code">{{ item.code }}</md-table-cell>
                  <md-table-cell md-label="Item Name">{{ item.name }}</md-table-cell>
                   <md-table-cell md-label="Description">{{ item.description}}</md-table-cell>
                  <md-table-cell md-label="Price">{{ item.price}}</md-table-cell>
                  <md-table-cell md-label="Quantiry ">{{ item.qty }}</md-table-cell>
                  <md-table-cell md-label="Discount">{{ item.discount}}</md-table-cell>
                  <md-table-cell md-label="Availability">{{ item.availability}}</md-table-cell>
                 
                 
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
                          <i class="material-icons">edit</i>
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
       items: [
        {
          code: "I001",
          name: "Keeri Samba",
          price: "LKR 150.00",
          description:"Araliya keeri Samba 1kG",
          qty: "300",
          discount: "5%",
          availability:"Avaliable"
        },
        {
          code: "I002",
          name: "Keeri Samba",
          price: "LKR 150.00",
          description:"Araliya keeri Samba 1kG",
          qty: "300",
          discount: "5%",
          availability:"Avaliable"
        },
        {
          code: "I003",
          name: "Keeri Samba",
          price: "LKR 150.00",
          description:"Araliya keeri Samba 1kG",
          qty: "300",
          discount: "5%",
          availability:"Avaliable"
        },
        {
          code:"I004",
          name: "Keeri Samba",
          price: "LKR 150.00",
          description:"Araliya keeri Samba 1kG",
          qty: "300",
          discount: "5%",
          availability:"Avaliable"
        }
      ],
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
