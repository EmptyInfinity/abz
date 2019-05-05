<template>
  <div class="container about">
    <h2
      data-aos="fade-up"
      class="tablet"
      data-aos-duration="1000">Let's get ac quainted</h2>
    <div class="text">
      <div>
        <img src="@/assets/img/imgs/man-mobile.svg" alt=""
             id="aboutMe"
             data-aos="fade-right"
             data-aos-offset="250"
             data-aos-duration="1000">
      </div>
      <div>
        <h2
          data-aos="fade-up"
          class="desktop"
          data-aos-duration="1000">Let's get ac quainted</h2>
        <h3 data-aos="fade-left"
            data-aos-duration="1000">I am cool frontend developer</h3>
        <p data-aos="fade-left"
           data-aos-duration="1000">When real users have a slow experience on mobile, they're much less likely to find
          what they are looking for or
          purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when
          more
          than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
        <div data-aos="fade-left"
             data-aos-duration="1000">
          <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience
            on
            the web.</p>
          <router-link
            @click.native="scrollToEl('signUp')"
            tag="button"
            to="#signUp">
            Sign Up
          </router-link>
        </div>
      </div>
    </div>
    <h2 class="text-center m-auto" id="relationships"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100">About my relationships with web-development</h2>
    <div class="blocks" data-aos="fade-up"
         data-aos-offset="50"
         data-aos-duration="1000">
      <div class="block">
        <img src="@/assets/img/imgs/html.svg" alt>
        <div>
          <h3>I'm in love with HTML</h3>
          <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web
            applications.</p>
        </div>
      </div>
      <div class="block">
        <img src="@/assets/img/imgs/css.svg" alt>
        <div>
          <h3>CSS is my best friend</h3>
          <p>
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation
            of a document written in a markup language
            like HTML.
          </p>
        </div>
      </div>
      <div class="block">
        <img src="@/assets/img/imgs/javascript.svg" alt>
        <div>
          <h3>JavaScript is my passion</h3>
          <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized
            as
            dynamic, weakly typed, prototype-based and multi-paradigm.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
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
  .container {
    padding: 130px 0 145px 0;
  }

  .text {
    background-repeat: no-repeat;
    background-position: 36px 96px;
    padding-bottom: 155px;
    display: flex;
  }

  img {
    padding: 0 80px 0 20px;
  }

  h2 {
    padding-bottom: 45px;
    max-width: 540px;
  }

  h3 {
    padding-left: 15px;
  }

  p {
    padding: 13px 0 13px 15px;
    font: 400 1em "Source Sans Pro", sans-serif;
    color: #4d4d4d;
  }

  button {
    font: 700 1.375em "Source Sans Pro", sans-serif;
    border: none;
    color: #d36c19;
    background: #fff;
    margin-left: 15px;
  }

  .blocks {
    display: flex;

    .block {
      flex: 1;
      margin-right: 80px;

      &:last-child {
        margin-right: 0;
      }
    }

    h3 {
      padding: 23px 0 0 0;
    }

    p {
      padding-left: 0;
    }
  }
</style>
