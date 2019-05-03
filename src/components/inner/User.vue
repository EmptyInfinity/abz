<template>
  <div class="user"
       data-aos="fade-up"
       data-aos-duration="1000"
       data-aos-offset="100">
      <img :src="photoSrc" :alt="name" @error="replaceImg">
    <div>
      <router-link
        tag="p"
        :to="{name: 'user', params: { id: id }}"
      >{{name}}</router-link>
        <p>{{ position }}</p>
        <p>{{ email}}</p>
        <p>{{ phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    id: Number,
    name: String,
    position: String,
    email: String,
    phone: String,
    photo: String
  },
  data () {
    return {
      photoSrc: this.photo
    }
  },
  methods: {
    replaceImg () {
      this.photoSrc = 'https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-user-circle-thin.png'
    }
  }
}
</script>

<style lang="scss">
  .user {
    display: flex;
    div{
      width: calc(100% - 75px);
      padding-left: 5px;
    }
    p {
      font: 400 14px "Source Sans Pro", sans-serif;
      color: #4d4d4d;
      overflow-wrap: break-word;
      &:first-child {
        color: #000;
        font: 700 22px "Overpass", "sans-serif";
        overflow-wrap: break-word;
        cursor: pointer;
        padding-top: 24px;
      }
    }

    img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }
  }

</style>
