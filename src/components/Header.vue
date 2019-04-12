<template>
  <header>
    <nav class="container">
      <img src="../assets/img/logo.svg" alt="abz agensy" height="24px">
      <ul>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Relationships</a>
        </li>
        <li>
          <a href="#">Requirments</a>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
      <div class="user">
        <div>
          <p>Superstar</p>
          <p>Superstar@gmail.com</p>
        </div>
        <img src="../assets/img/imgs/user-superstar-2x.jpg" alt class="avatar">
        <img src="../assets/img/icons/sign-out.svg" alt>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      // userName: '',
      // userEmail: '',
      // userPhone: ''
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/preset.scss";

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: 400 16px "Source Sans Pro", sans-serif;
  padding: 12px 0;
  .user {
    display: flex;
    align-items: center;
    text-align: right;
    .avatar {
      width: 40px;
      border-radius: 50%;
      margin: 0 16px 0 11px;
    }
    p:last-child {
      color: #8b8b8b;
    }
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
          margin-right: 0;
        }
      }
    }
  }
}
</style>
