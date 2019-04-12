import Vue from 'vue'
import App from './App.vue'
// import 'normalize.css'
import './assets/scss/preset.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

console.log(Math.random())

/* <h2>registration</h2>
    <form @submit.prevent="send" method="post">
      <input type="name" minlength="2" maxlength="60" required v-model="userName">
      <input type="email" required v-model="userEmail">
      <input type="phone" required v-model="userPhone">
      <input type="file" required>
      <input type="submit" @submit.prevent="send">
    </form> */

// methods: {
//   async send () {
//     await fetch(
//       'https://frontend-test-assignment-api.abz.agency/api/v1/token'
//     )
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         console.log(this)
//         let formData = new FormData()
//         let fileField = document.querySelector('input[type="file"]')
//         formData.append('position_id', 2)
//         formData.append('name', this.userName)
//         formData.append('email', this.userEmail)
//         formData.append('phone', this.userPhone)
//         formData.append('photo', fileField.files[0])
//         return fetch(
//           'https://frontend-test-assignment-api.abz.agency/api/v1/users',
//           {
//             method: 'POST',
//             body: formData,
//             headers: {
//               Token: data.token
//             }
//           }
//         )
//       })
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         if (data.success) {
//         } else {
//         }
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }
