<template>
  <div class="container">
    <div class="text">
      <h2>Let's get ac quainted</h2>
      <h3>I am cool frontend developer</h3>
      <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
      <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
      <button>Sign Up</button>
    </div>
    <h2 class="text-center m-auto">About my relationships with web development</h2>
    <div class="blocks">
      <div>
        <img src="../assets/img/imgs/html.svg" alt>
        <h3>I'm in love with HTML</h3>
        <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
      </div>
      <div>
        <img src="../assets/img/imgs/css.svg" alt>
        <h3>CSS is my best friend</h3>
        <p>
          Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation
          of a document written in a markup language
          like HTML.
        </p>
      </div>
      <div>
        <img src="../assets/img/imgs/javascript.svg" alt>
        <h3>JavaScript is my passion</h3>
        <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 130px 0 145px 0;
}
.text {
  padding-left: 375px;
  background-image: url("../assets/img/imgs/man-mobile.svg");
  background-repeat: no-repeat;
  background-position: 36px 96px;
  padding-bottom: 155px;
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
  font: 400 16px "Source Sans Pro", sans-serif;
  color: #4d4d4d;
}
button {
  font: 700 22px "Source Sans Pro", sans-serif;
  border: none;
  color: #d36c19;
  background: #fff;
  margin-left: 15px;
}
.blocks {
  display: flex;
  div {
    flex: 1;
    margin-right: 70px;
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
