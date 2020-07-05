import axios from 'axios';

const API_URL = 'http://localhost:8081/';

class AuthService {
  login(user) {
    console.log(user.email);
    console.log(user.password);
    return axios
      .post(API_URL + 'login', {
        email: user.email,
        password: user.password
       

      })
      .then(response => {
          console.log(response);
        if (response.data.data.access_token) {
            console.log(response.data.data.access_token); 
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    console.log(user.email);
    console.log(user.password);
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }

  pendingShopRegister(shop) {
    console.log(shop.shopname);
    console.log(shop.email);
    console.log(shop.password);
    return axios.post(API_URL + 'pending_shops', {
      shop_name :shop.shopname,
      location :shop.location,
      businessRegNo : shop.bid,
      mobile_no : shop.mobile_no,
      email : shop.email,
      shop_owner_name : shop.shop_owner_name,
      nic : shop.nic,
      password : shop.password
    });
  }

  getAllPendingShops(){
    return axios.get(API_URL + 'pending_shops/un_published');
  }

  acceptPendingShop(uuid){
    console.log(uuid);
    // console.log(API_URL + 'pending_shops/'+uuid);
    
    return axios.post(API_URL + 'pending_shops/ba6b31c1-5921-4855-a955-5434b908e163' );
  }
}

export default new AuthService();