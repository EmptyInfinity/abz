<template>
  <header data-aos="fade-down" data-aos-duration="500">
    <nav class="container">
      <router-link
        class="logo-wrap"
        to="/">
        <img src="@/assets/img/logo.svg" alt="abz agency" height="24px">
      </router-link>
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
      <div
        class="user-main" data-aos="fade-in-out"
        data-aos-duration="500">
        <div>
          <p>{{user.name}}</p>
          <p>{{user.email}}</p>
        </div>
        <img :src=user.photo alt class="avatar">
        <img src="@/assets/img/icons/sign-out.svg" alt>
      </div>
      <div v-if="isMenuOpen"
           class="menu"
           data-aos="fade-right"
           data-aos-duration="400">
        <div
          class="user-main">
          <img :src=user.photo alt class="avatar">
          <p>{{user.name}}</p>
          <p>{{user.email}}</p>
        </div>
        <ul>
          <li>
            <router-link to="#aboutMe" @click.native="scrollToEl('aboutMe')">About me</router-link>
          </li>
          <li>
            <router-link to="#relationships" @click.native="scrollToEl('relationships')">Relationships</router-link>
          </li>
          <li>
            <router-link to="#requirements" @click.native="scrollToEl('requirements')">Requirements</router-link>
          </li>
          <li>
            <router-link to="#users" @click.native="scrollToEl('users')">Users</router-link>
          </li>
          <li>
            <router-link to="#signUp" @click.native="scrollToEl('signUp')">Sign Up</router-link>
          </li>
          <li>
            <a href="#">Sign Out</a>
          </li>
        </ul>
      </div>
      <div class="menu-toggle" @click="isMenuOpen=!isMenuOpen"></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      user: {},
      isMenuOpen: false
    }
  },
  methods: {
    scrollToEl (e) {
      let to = document.getElementById(e).offsetTop - 100
      window.scrollTo({
        top: to,
        behavior: 'smooth'
      })
    }
  },
  async created () {
    await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
      .then(response => response.json()) // eslint-disable-next-line
      .then(data => this.user = data.user)
  }
}
</script>

<style lang="scss">
  .menu-toggle {
    display: none;
    width: 23px;
    height: 22px;
    background: url("../assets/img/icons/line-menu.svg");
    cursor: pointer;
  }

  .menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: #fff;

    ul {
      padding: 30px;
      border-top: 1px solid #f8f8f8;
      font-size: 18px;
    }

    li:not(:first-child) {
      padding-top: 20px;
    }

    .user-main {
      padding: 30px;
      text-align: left;

      p {
        font-size: 20px;
        width: 250px;
        padding-top: 5px;

        &:last-child {
          font-size: 16px;
        }
      }
    }

    .avatar {
      margin: 0;
      width: 80px;
    }
  }

  header {
    position: fixed;
    z-index: 3;
    width: 100%;
    top: 0;
    background: #fff;
  }

  .logo-wrap {
    margin-right: 10px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font: 400 16px "Source Sans Pro", sans-serif;
    padding: 12px 0;

    .user-main {
      display: flex;
      align-items: center;
      text-align: right;
      font-size: 14px;

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 200px;

        &:last-child {
          color: #8b8b8b;
        }
      }

    }

    .avatar {
      width: 40px;
      border-radius: 50%;
      margin: 0 16px 0 11px;
    }

    ul {
      display: flex;

      li {
        a {
          color: #000;
          margin-right: 30px;
        }

        &:last-child {
          a {
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>
