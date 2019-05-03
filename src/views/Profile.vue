<template>
  <div class="profile" data-aos="fade"
       data-aos-duration="1000">
    <img src="@/assets/img/icons/next.svg" alt=""
         @click="prevUser()"
         v-if="isPrev"
         class="prev"
    >
    <img src="@/assets/img/icons/next.svg" alt=""
         @click="lastUser()"
         v-else
         class="prev"
    >
    <div class="user">
      <div class="photo-wrap">
        <img :src="userData.photo"
             :alt="userData.name"
             @error="replaceImg">
      </div>
      <div class="text">
        <p>{{userData.name}}</p>
        <p>{{ userData.position }}</p>
        <p>{{ userData.email}}</p>
        <p>{{ userData.phone }}</p>
        <span>{{date}}</span>

      </div>
    </div>
    <img src="@/assets/img/icons/next.svg" alt=""
         @click="nextUser()"
         class="next"
         v-if="isNext"
    >
    <img src="@/assets/img/icons/next.svg" alt=""
         @click="firstUser()"
         class="next"
         v-else
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  data () {
    return {
      userData: {},
      date: '',
      isNext: true,
      isPrev: true
    }
  },
  async mounted () {
    if (this.user(this.$route.params.id)) {
      this.userData = this.user(this.$route.params.id)
    } else {
      await this.$store.dispatch('getUsers') // eslint-disable-next-line
        .then(() => this.userData = this.user(this.$route.params.id))
        .then(() => {
          let ms = this.user(this.$route.params.id).registration_timestamp
          let now = new Date().getTime()
          let d1 = new Date(now - ms)
          let d = d1.getDate()
          let m = d1.getMonth()
          let y = d1.getFullYear()

          this.date = `${y} : ${m}   : ${d}`
          this.date = this.date.replace(/\b(\d{1})\b/g, '0$1')
        })
    }
  },
  computed: {
    ...mapGetters({
      user: 'userNumber'
    })
  },
  methods: {
    firstUser () {
      this.userData = this.user(0)
      this.$route.params.id = 0
      this.isNext = true
    },
    lastUser () {
      this.userData = this.user(this.$store.state.users.length - 1)
      this.$route.params.id = this.$store.state.users.length - 1
      this.isPrev = true
    },
    async nextUser () {
      this.$nextTick()
        .then(() => this.user(++this.$route.params.id))
        .then((user) => {
          this.userData = user
        })
        .then(() => {
          if (this.$store.state.users.length - this.$route.params.id === 1) {
            this.isNext = false
          }
        })
    },
    async prevUser () {
      this.$nextTick()
        .then(() => this.user(--this.$route.params.id))
        .then((user) => {
          this.userData = user
        })
        .then(() => { // eslint-disable-next-line
          if (this.$route.params.id == 0) {
            this.isPrev = false
          }
        })
    },
    replaceImg () {
      this.userData.photo = 'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-user-circle-thin.png'
    }
  }
}
</script>

<style scoped lang="scss">
  .profile {
    display: flex;
    justify-content: space-between;
    width: 600px;
    margin: 84px auto 20px auto;
  }

  .next, .prev {
    width: 60px;
    height: 60px;
    margin-top: 110px;
    cursor: pointer;

    &.load {
      opacity: .4;
    }
  }

  .prev {
    transform: rotate(180deg);
  }

  .user {
    flex-direction: column;
    width: 350px;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    img {
      position: absolute;
      bottom: -30px;
      right: 40px;
      width: 100px;
      height: 100px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, .3),
      -3px -3px 5px rgba(0, 0, 0, .3);
    }

  }

  .photo-wrap {
    position: relative;
    border-radius: 5px 5px 0 0;
    height: 110px;
    background: url("../assets/img/imgs/user-bgjpg.jpg");
  }

  .text {
    padding: 0 22px 20px 20px;
    border: 1px solid #5983cf;
    border-top: none;
    border-radius: 0 0 4px 4px;
  }

  p {
    font-size: 18px;
  }

  span {
    font: 700 15px "Overpass", "sans-serif";
    text-align: right;
    padding-top: 10px;
    opacity: 0.3;
  }

  p:first-child {
    font-size: 28px;
    padding-top: 40px;
    width: auto;
    cursor: default;
  }

</style>
