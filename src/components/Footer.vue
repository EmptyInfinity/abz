<template>
  <footer>
    <div class="container">
      <nav>
        <img src="@/assets/img/logo-w.svg" width="131px" alt="">
        <ul>
          <li>
            <router-link to="/#aboutMe" @click.native="scrollToEl('aboutMe')">About me</router-link>
          </li>
          <li>
            <router-link to="/#relationships" @click.native="scrollToEl('relationships')">Relationships</router-link>
          </li>
          <li>
            <router-link to="/#requirements" @click.native="scrollToEl('requirements')">Requirements</router-link>
          </li>
          <li>
            <router-link to="/#users" @click.native="scrollToEl('users')">Users</router-link>
          </li>
          <li>
            <router-link to="/#signUp" @click.native="scrollToEl('signUp')">Sign Up</router-link>
          </li>
        </ul>
      </nav>
      <div class="ceo">
        <div>
          <p>
            <img src="@/assets/img/icons/mail.svg" alt="">
            work.of.future@gmail.com
          </p>
          <p>
            <img src="@/assets/img/icons/phone.svg" alt="">
            +38 (050) 789 24 98
          </p>
          <p>
            <img src="@/assets/img/icons/cellphone.svg" alt="">
            +38 (050) 543 14 98
          </p>
        </div>
        <div class="links">
          <div>
            <a href="#">News</a>
            <a href="#">Blogs</a>
            <a href="#">Partners</a>
            <a href="#">Shop</a>
          </div>
          <div>
            <a href="#">Overview</a>
            <a href="#">Design</a>
            <a href="#">Code</a>
            <a href="#">Collaborate</a>
          </div>
          <div>
            <a href="#">Tutorial</a>
            <a href="#">Resources</a>
            <a href="#">Guides</a>
            <a href="#">Examples</a>
          </div>
          <div>
            <a href="#">FAQ</a>
            <a href="#">Terms</a>
            <a href="#">Conditions</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span>abz.agency specially for the task</span>
        <div class="icons">
          <div class="f"></div>
          <div class="l"></div>
          <div class="i"></div>
          <div class="t"></div>
          <div class="p"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  methods:{
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

<style lang="scss" scoped>
  footer {
    background: #30388f;
    color: #fff;
    font: 400 1em "Source Sans Pro", sans-serif;

    a {
      color: #fff;
    }

    nav {
      padding: 30px 0;
      margin-bottom: 15px;
      border-bottom: 1px solid rgba(255,255,255, .2);
    }

    p {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      img {
        margin-right: 10px;
      }
    }

    .ceo {
      display: flex;
      justify-content: space-between;
      font-size: 1.25em;
    }

    .links {
      display: flex;
      font-size: 16px;
      a {
        margin-bottom: 15px;
      }
      div{
        display: flex;
        flex-direction: column;
        text-align: right;
      }
      div:not(:last-child){
        margin-right: 125px;
      }

    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      font-size: .75em;
    }
  }

  .icons {
    margin: 20px 0;
    display: flex;

    div {
      width: 25px;
      height: 25px;
      background-size: contain;
      &:not(:last-child){
        margin-right: 20px;
      }
    }
  }

  .f {
    background: url('~@/assets/img/icons/facebook.svg') no-repeat;
  }

  .l {
    background: url('~@/assets/img/icons/linkedin.svg') no-repeat;
  }

  .i {
    background: url('~@/assets/img/icons/instagram.svg') no-repeat;
  }
  .t {
    background: url('~@/assets/img/icons/twitter.svg') no-repeat;
  }
  .p {
    background: url('~@/assets/img/icons/pinterest.svg') no-repeat;
  }
</style>
