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

  shopRegister(shop) {
    console.log(shop.shopname);
    console.log(shop.email);
    console.log(shop.password);
    return axios.post(API_URL + 'register', {
      shopname :shop.shopname,
      location :shop.location,
      bid : shop.bid,
      mobile_no : shop.mobile_no,
      email : shop.email,
      shop_owner_name : shop.shop_owner_name,
      nic : shop.nic,
      password : shop.password
    });
  }
}

export default new AuthService();