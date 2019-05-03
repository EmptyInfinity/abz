<template>
  <div class="container-wrap">
    <div class="container" data-aos="fade-left"
         data-aos-easing="ease-in-out"
         data-aos-offset="100"
         data-aos-duration="600">
      <h1>Test assignment for Frontend Developer position</h1>
      <p>
        We kindly remind you that your test assignment should
        be submitted as a link to github/bitbucket repository.
        Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!
      </p>
      <router-link
        @click.native="scrollToEl('signUp')"
        tag="button"
        to="#signUp">
        Sign Up
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data: () => {
    return {}
  },
  methods: {
    scrollToEl (e) {
      let to = document.getElementById(e).offsetTop - 100
      window.scrollTo({
        top: to,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container-wrap {
  background-image: url("~@/assets/img/imgs/bg-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 135px 0 140px 0;
}
h1 {
  font: 600 50px "Overpass", sans-serif;
  max-width: 475px;
}
p {
  width: 540px;
  padding: 20px 0 35px 0;
  font: 400 20px "Source Sans Pro", sans-serif;
}
button{
  font: 700 20px "Source Sans Pro", sans-serif;
    height: 40px;
    min-width: 290px;
    border-radius: 4px;
    background: #d36c19;
    border: none;
    color: #fff;
}
</style>
