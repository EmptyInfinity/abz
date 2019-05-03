<template>
  <div class="container">
    <div
      id="users"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="100">
      <h2>Our cheerful users</h2>
      <h4>Attention! Sorting users by registration date</h4>
    </div>
    <div class="users">
      <div v-for="(user, i) in users" :key="i + 0" class="user-wrap">
        <User
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="100"
          :id="i"
          :name="user.name"
          :position="user.position"
          :email="user.email"
          :phone="user.phone"
          :photo="user.photo"
        />
      </div>
    </div>
    <button @click="getUsers"
            v-if="isMoreUsers"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-offset="50"
    >Show more
    </button>
    <div id="signUp"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-offset="100">
      <h2>Register to get a work</h2>
      <h4>Attention! After successful registration and alert, update the list of users in the block from the top</h4>
    </div>
    <form action="post" @submit.prevent="submit"
          data-aos="fade-in"
          data-aos-duration="1300"
          data-aos-offset="150">
      <div class="inputs">
        <label for="name">
          <span>Name</span>
          <input type="text" placeholder="Your name" id="name" v-model="userName" required>
          <p v-if="errName" class="warn"
             data-aos="fade-in-out"
             data-aos-duration="500">Name should be 2-60 characters!</p>
        </label>
        <label for="email">
          <span>Email</span>
          <input type="email" placeholder="Your email" id="email" v-model="userEmail" required>
          <p v-if="errEmail" class="warn"
             data-aos="fade-in-out"
             data-aos-duration="500">Input correct email!</p>
        </label>
        <label for="phone">
          <p v-if="errPhoneSet" class="warn"
             data-aos="fade-in-out"
             data-aos-duration="500">Phone number should start with code of Ukraine +380</p>
          <p v-if="errPhoneLength" class="warn"
             data-aos="fade-in-out"
             data-aos-duration="500">Input correct number!</p>
          <span>Phone</span>
          <input
            id="phone"
            :value="userPhoneHandler"
            v-imask="mask"
            @accept="onAccept"
            autocomplete="off"
            required>
        </label>
      </div>
      <div class="selects">
        <div class="select"
             @click.stop="isSelectOpen=!isSelectOpen"
             :class="{open: isSelectOpen}">
          <p class="warn" v-if="errPosition">Choose your position!</p>
          <span>{{ position || 'Choose your position' }}</span>
          <img src="@/assets/img/icons/caret-down.svg" alt>
          <div class="options" @click.stop="setPosition($event)">
            <p v-for="(position,i) in positions" :key="i" :data-id="i+1">
              {{ position.name }}
            </p>
          </div>
        </div>
        <div class="file-wrap">
          <label class="file">
            <input type="file" id="file" @change="userFileUpload($event)" required>
            <span class="filename">{{fileName || 'Upload your photo'}}</span>
            <span class="file-custom"></span>
          </label>
          <div v-if="errFileName || errFileSize" class="warn-wrap"
               data-aos="fade-in-out"
               data-aos-duration="500">
            <p class="warn" v-if="errFileSize">File size must not exceed 5MB!</p>
            <p class="warn" v-if="errFileName">Photo should be jpg image!</p>
          </div>
          <p class="desc">File format jpg up to 5 MB, the minimum size of 70x70px</p>
        </div>
      </div>
      <p class="warn special">
        <span v-if="errMessage"
              data-aos="fade-in-out"
              data-aos-duration="300"
        >{{errMessage}}</span>
      </p>
      <input
        type="submit"
        class="submit"
        value="Sign Up"
        :class="{active: getFormStatus}"
      />
    </form>
    <div class="modal" v-if="isModalOpen"
         data-aos="fade-in-out"
         data-aos-duration="700">
      <div class="entity">
        <h3>Congratulations</h3>
        <p>You have successfully passed the registration</p>
        <button @click="isModalOpen=!isModalOpen">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import User from './inner/User.vue'
import { IMaskDirective } from 'vue-imask'
import { mapState } from 'vuex'

export default {
  name: 'Users',
  components: { User },
  data: () => {
    return {
      isModalOpen: false,
      isSelectOpen: false,
      isMoreUsers: true,
      users: [],
      positions: [],
      position: '',
      fileName: '',
      userName: '',
      userEmail: '',
      userPhone: '',
      userPosition: null,
      userPhoneHandler: '+38(___) ___ __ __',
      errName: false,
      errPhoneSet: false,
      errPhoneLength: false,
      errEmail: false,
      errPosition: false,
      errFileSize: false,
      errFileName: false,
      isPhoneComplited: false,
      mask: {
        mask: '{+38}({0}00) 000 00 00',
        lazy: false
      }
    }
  },
  directives: {
    imask: IMaskDirective
  },
  computed: {
    getFormStatus () {
      return !(this.errEmail || this.errName || this.errPhoneSet || !this.position || this.errFileSize || this.errFileName || !this.userEmail || this.userName.length < 2 || this.userName.length > 60 || !this.userPhone || !this.fileName)
    },
    ...mapState([
      'errMessage'
    ])
  },
  watch: {
    userName () {
      this.userName.length < 2 || this.userName.length > 60 ? this.errName = true : this.errName = false
    },
    userEmail () { // eslint-disable-next-line
        let emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      this.errEmail = !this.userEmail.match(emailReg)
    },
    userPhoneHandler () {
      if ((this.errPhoneLength = !this.isPhoneComplited)) {
        this.errPhoneSet = false
        return false
      }
      this.userPhone = this.userPhoneHandler.replace(/[ )(]/g, '')
      if ((this.errPhoneSet = !this.userPhone.includes('+380'))) return false
    }
  },
  methods: {
    async getUsers () {
      let usersAmount = this.users.length
      let moreUsers = this.$store.state.users.slice(usersAmount, usersAmount + 6)
      moreUsers.forEach(user => this.users.push(user))
      if (this.users.length === this.$store.state.users.length) this.isMoreUsers = false
    },
    setPosition (e) {
      if (e.target.nodeName === 'P') {
        this.userPosition = e.target.dataset.id
        this.position = e.target.innerText
        this.isSelectOpen = false
      }
    },
    onAccept (e) {
      this.userPhoneHandler = e.detail.value
      this.isPhoneComplited = !(e.detail._unmaskedValue.length < 13)
    },
    userFileUpload (e) {
      if (e.target.files[0]) {
        this.fileName = e.target.files[0].name
        this.errFileSize = e.target.files[0].size > 5242880
        this.errFileName = e.target.files[0].type.split('/')[1] !== 'jpeg'
      }
    },
    async submit () {
      this.$store.commit('resetErrMessage')
      this.errPosition = !this.position
      if (this.errEmail || this.errName || this.errPhoneSet || !this.position || this.errFileSize || this.errFileName) return false
      await this.getToken()
      await this.addUser()
    },
    async getToken () {
      return this.$store.state.token
    },
    async addUser () {
      await this.$store.dispatch('addUser', {
        position: this.userPosition,
        name: this.userName,
        email: this.userEmail,
        phone: this.userPhone
      })
      if (this.errMessage.length < 1) {
        this.isModalOpen = !this.isModalOpen
        this.users = this.$store.state.users
      }
    }
  },
  async mounted () {
    let select = document.querySelector('.select') // eslint-disable-next-line
      document.addEventListener('click', e => e.target !== select ? this.isSelectOpen = false : false)
    await this.$store.dispatch('getToken')
    await this.$store.dispatch('getPages')
    if (this.$store.state.users.length === 0) {
      await this.$store.dispatch('getUsers')
        .then(() => this.getUsers())
    } else {
      this.getUsers()
    }
    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(response => response.json())
      .then(data => data.positions.forEach(position => this.positions.push(position)))
      .catch(err => console.log(err))
  }
}
</script>

<style scoped lang="scss">

  .container {
    padding: 140px 0 150px 0;
  }

  h2 {
    text-align: center;
    padding-bottom: 15px;
  }

  h4 {
    font: 400 18px "Source Sans Pro", sans-serif;
    text-align: center;
    padding-bottom: 70px;
  }

  p {
    font: 400 14px "Source Sans Pro", sans-serif;
    color: #4d4d4d;
  }

  .users {
    display: flex;
    flex-wrap: wrap;

    .user-wrap {
      width: 30%;
      margin-right: 5%;
      margin-bottom: 60px;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }

  }

  button {
    font: 700 20px "Source Sans Pro", sans-serif;
    min-width: 290px;
    margin: 0 auto;
    display: block;
    border: 2px solid #d36c19;
    color: #d36c19;
    background: #fff;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 150px;
  }

  form {
    .warn {
      position: absolute;
      top: -35px;
      left: 0;
      font: 400 14px "Source Sans Pro", sans-serif;
      background: #d36c198b;
      padding: 5px 10px;
      border-radius: 4px;

      &.special {
        position: static;
        text-align: center;
        background: none;
        margin-bottom: 10px;
        height: 28px;

        span {
          background: #d36c198b;
          border-radius: 4px;
          padding: 5px 10px;
        }
      }
    }

    .warn-wrap {
      position: absolute;
      top: -35px;
      left: 0;
      display: flex;
      font: 400 14px "Source Sans Pro", sans-serif;

      .warn {
        position: static;
        margin-right: 5px;
      }
    }

    .submit {
      background: #d6d6d6;
      border: none;
      color: #8b8b8b;
      font: 700 20px "Source Sans Pro", sans-serif;
      min-width: 290px;
      margin: 0 auto;
      display: block;
      height: 40px;
      border-radius: 4px;

      &.active {
        border: 2px solid #d36c19;
        color: #d36c19;
        background: #fff;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    label {
      border: 1px solid #b5b5b5;
      border-radius: 4px;
      position: relative;
      width: 32%;
      margin-right: 3%;

      &:nth-child(3n) {
        margin-right: 0;
      }

      span {
        position: absolute;
        top: 0;
        transform: translateY(-50%);
        left: 14px;
        font: 400 12px "Source Sans Pro", sans-serif;
        padding: 0 5px;
        color: #b5b5b5;
        background: #fff;
      }

      input {
        border: none;
        height: 53px;
        border-radius: 4px;
        width: 100%;
        font: 400 16px "Source Sans Pro", sans-serif;
        padding: 0 17px;

        &::placeholder {
          color: #b5b5b5;
        }
      }

      input#phone {
        color: #b5b5b5;

        &:focus {
          color: #000;
        }
      }
    }

    .inputs {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

    }

    .selects {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;

      .file-wrap {
        position: relative;
        width: 48.5%;

        label {
          position: static;
          width: 100%;
          margin: 0;

          .file-custom {
            transform: none;
          }
        }
      }

      .select {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #b5b5b5;
        border-radius: 4px;
        font: 400 16px "Source Sans Pro", sans-serif;
        position: relative;
        width: 48.5%;
        height: 55px;
        padding: 0 16px;
        cursor: pointer;

        .options {
          display: none;
          width: 100%;
          background: #fff;
          position: absolute;
          cursor: default;
          top: calc(100% + 5px);
          left: 0;
          padding: 5px 0;
          border: 1px solid #b5b5b5;
          border-radius: 4px;
          user-select: none;

          p {
            padding: 5px 10px;
            cursor: pointer;
            font: 400 16px "Source Sans Pro", sans-serif;
            color: #000;

            &:hover {
              background: #d36c19;
              color: #fff;
            }
          }
        }

        &.open {
          img {
            transform: rotate(180deg);
          }

          .options {
            display: block;
          }
        }
      }
    }

    .desc {
      position: absolute;
      bottom: -20px;
      left: 18px;
      user-select: none;
      font: 400 14px "Source Sans Pro", sans-serif;
      color: #b5b5b5;
    }

    button {
      background: #d6d6d6;
      border: none;
      color: #8b8b8b;
      margin-bottom: 10px;
    }

    .file {
      position: relative;
      display: inline-block;
      cursor: pointer;
      height: 55px;
      width: 48.5%;
    }

    .file input {
      min-width: 14rem;
      margin: 0;
      filter: alpha(opacity=1);
      opacity: 0;
    }

    .file-custom {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 18px;
      background-color: #fff;
      border: 1px solid #b5b5b5;
      border-radius: 4px;
      user-select: none;
    }

    .filename {
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 2;
      padding: 0;
      font: 400 16px "Source Sans Pro", sans-serif;
      color: #b5b5b5;
    }

    .file-custom:before {
      position: absolute;
      font: 700 20px "Source Sans Pro", sans-serif;
      z-index: 1;
      border: 2px solid #d36c19;
      color: #d36c19;
      box-sizing: border-box;
      min-width: 130px;
      background: #fff;
      right: 0;
      height: 55px;
      display: flex;
      justify-content: center;
      border-radius: 0 4px 4px 0;
      align-items: center;
      content: "Upload";
    }

  }
</style>
