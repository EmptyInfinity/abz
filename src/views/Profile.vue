<template>
  <div :class="{loading: preloader}">
    <div :class="{ dissapear: !preloader}" class="preloader">
    </div>
    <div class="profile-wrap">
      <div class="profile"
           data-aos="fade"
           data-aos-duration="1000">
        <img src="@/assets/img/icons/next.svg" alt="3"
             @click="prevUser()"
             v-if="isPrev"
             class="prev"
        >
        <img src="@/assets/img/icons/next.svg" alt="4"
             @click="lastUser()"
             v-else
             class="prev"
        >
        <div class="user" :class="{userLoad: userLoading}" @animationend="userLoading = false">
          <div class="photo-wrap">
            <img
              :src="userData.photo"
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
        <img src="@/assets/img/icons/next.svg" alt="1"
             @click="nextUser()"
             class="next"
             v-if="isNext"
        >
        <img src="@/assets/img/icons/next.svg" alt="2"
             @click="firstUser()"
             class="next"
             v-else
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  data () {
    return {
      userData: [],
      date: '',
      isNext: true,
      isPrev: true,
      userLoading: false,
      preloader: false
    }
  },
  async mounted () {
    if (this.user(this.$route.params.id)) {
      this.userData = this.user(this.$route.params.id)
      this.getDate()
    } else {
      this.preloader = true
      await this.$store.dispatch('getUsers') // eslint-disable-next-line
          .then(() => {
          this.preloader = false
          this.userData = this.user(this.$route.params.id)
        })
        .then(() => {
          this.getDate()
        })
    }
  },
  computed: {
    ...mapGetters({
      user: 'userNumber'
    }),
  },
  methods: {
    checkUserOrder(){
      this.isNext = this.$store.state.users.length - this.$route.params.id !== 1;
      if (this.$route.params.id === 0) {
        this.isPrev = false
      }
    },
    getDate(){
      let ms = this.user(this.$route.params.id).registration_timestamp
      let date = new Date(ms*1000);
      let d = date.getDate()
      let m = date.getMonth()+1
      let y = date.getFullYear()
      this.date = `${d} : ${m}  : ${y}`
      this.date = this.date.replace(/\b(\d{1})\b/g, '0$1')
    },
    firstUser () {
      this.userLoading = true
      this.userData = this.user(0)
      this.$route.params.id = 0
      this.getDate()
      this.checkUserOrder()
    },
    lastUser () {
      this.userLoading = true
      this.userData = this.user(this.$store.state.users.length - 1)
      this.getDate()
      this.$route.params.id = this.$store.state.users.length - 1
      this.isPrev = true
      this.checkUserOrder()
    },
    async nextUser () {
      this.userLoading = true
      this.$nextTick()
        .then(() => this.user(++this.$route.params.id))
        .then((user) => {
          this.userData = user
          this.getDate()
        })
        .then(() => this.checkUserOrder())
    },
    async prevUser () {
      this.userLoading = true
      this.$nextTick()
        .then(() => this.user(--this.$route.params.id))
        .then((user) => {
          this.userData = user
          this.getDate()
        })
        .then(() => this.checkUserOrder())
    },
    replaceImg () {
      this.userData.photo = 'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-user-circle-thin.png'
    }
  }
}
</script>

<style scoped lang="scss">
  @keyframes dissapear {
    0% {
      background-image: url("~@/assets/img/imgs/preload.gif");
      background-repeat: no-repeat;
      background-position: center;
      background-color: #fff;
      z-index: 1;
    }
    100% {
      z-index: 1;
      background-image: url("~@/assets/img/imgs/preload.gif");
      background-repeat: no-repeat;
      background-position: center;
      background-color: #fff;
      opacity: 0;
    }
  }
  .preloader{
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    bottom: 0;
    z-index: -1;
    left: 0;
    right: 0;
    animation: dissapear 3s ease;
  }

  .profile-wrap {
    min-height: 100vh;
    padding-top: 52px;

  }

  .loading {
    background-image: url("~@/assets/img/imgs/preload.gif");
    background-repeat: no-repeat;
    background-position: center;

    .profile {
      display: none;
    }
  }

  .profile {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    margin: auto;
    padding-top: 100px;
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
    width: 100%;
    max-width: 350px;
    transition: 1s;

    &.userLoad {
      animation: flash .5s;
      @keyframes flash {
        0% {
          transform: rotateX(180deg);
        }
        50% {
          opacity: 0.9;
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }

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
