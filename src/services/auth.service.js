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
}

export default new AuthService();