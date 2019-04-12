<template>
  <div class="container">
    <h2>Our cheerful users</h2>
    <h4>Attention! Sorting users by registration date</h4>
    <div class="users">
      <div class="user">
        <div class="d-flex items-center">
          <img src="../assets/img/imgs/user-elizabeth-2x.jpg" alt>
          <span>Liamgrievescasey Smith Wiam</span>
        </div>
        <div>
          <p>Front-end developer</p>
          <p>elizabeth@gmail.com</p>
          <p>+38 (095) 924 66 37</p>
        </div>
      </div>
      <div class="user">
        <div class="d-flex items-center">
          <img src="../assets/img/imgs/user-elizabeth-2x.jpg" alt>
          <span>Liamgrievescasey Smith Wiam</span>
        </div>
        <div>
          <p>Front-end developer</p>
          <p>elizabeth@gmail.com</p>
          <p>+38 (095) 924 66 37</p>
        </div>
      </div>
      <div class="user">
        <div class="d-flex items-center">
          <img src="../assets/img/imgs/user-elizabeth-2x.jpg" alt>
          <span>Adolph Blaine Charles David Earl</span>
        </div>
        <div>
          <p>Front-end developer</p>
          <p>elizabeth@gmail.com</p>
          <p>+38 (095) 924 66 37</p>
        </div>
      </div>
      <div class="user">
        <div class="d-flex items-center">
          <img src="../assets/img/imgs/user-elizabeth-2x.jpg" alt>
          <span>Liamgrievescasey Smith Wiam</span>
        </div>
        <div>
          <p>Front-end developer</p>
          <p>elizabeth@gmail.com</p>
          <p>+38 (095) 924 66 37</p>
        </div>
      </div>
      <div class="user">
        <div class="d-flex items-center">
          <img src="../assets/img/imgs/user-elizabeth-2x.jpg" alt>
          <span>Elizabeth</span>
        </div>
        <div>
          <p>Front-end developer</p>
          <p>elizabeth@gmail.com</p>
          <p>+38 (095) 924 66 37</p>
        </div>
      </div>
      <div class="user">
        <div class="d-flex items-center">
          <img src="../assets/img/imgs/user-elizabeth-2x.jpg" alt>
          <span>Elizabeth</span>
        </div>
        <div>
          <p>Front-end developer</p>
          <p>elizabeth@gmail.com</p>
          <p>+38 (095) 924 66 37</p>
        </div>
      </div>
    </div>
    <button>Show more</button>
    <h2>Register to get a work</h2>
    <h4>Attention! After successful registration and alert, update the list of users in the block from the top</h4>
    <form action="post">
      <div class="inputs">
        <label for="name">
          <span>Name</span>
          <input type="text" placeholder="Your name" id="name">
        </label>
        <label for="email">
          <span>Email</span>
          <input type="email" placeholder="Your email" id="email">
        </label>
        <label for="phone">
          <span>Phone</span>
          <input type="text" value="+38(__) ___ __ __" id="name">
        </label>
      </div>
      <div class="selects">
        <div class="select" @click="isSelectOpen=!isSelectOpen" :class="{open: isSelectOpen}">
          <span>Front-end developer</span>
          <img src="../assets/img/icons/caret-down.svg" alt>
          <div class="options">
            <p>Front-end developer</p>
            <p>Back-end developer</p>
            <p>QA</p>
            <p>Designer</p>
            <p>Full-stack developer</p>
          </div>
        </div>
        <label class="file">
          <input type="file" id="file" aria-label="File browser example">
          <span class="file-custom"></span>
          <p>File format jpg up to 5 MB, the minimum size of 70x70px</p>
        </label>
      </div>
      <button class="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data: () => {
    return {
      isSelectOpen: false
    }
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
  .user {
    width: 30%;
    margin-right: 5%;
    margin-bottom: 60px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    img {
      border-radius: 50%;
      width: 70px;
    }
    span {
      font: 700 22px "Overpass", "sans-serif";
      padding-left: 5px;
    }
    div:last-child {
      padding-left: 75px;
      margin-top: -10px;
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
  .inputs {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
        color: #b5b5b5;
        &::placeholder {
          color: #b5b5b5;
        }
      }
    }
  }
  .selects {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 62px;
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
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        padding: 5px 0;
        border: 1px solid #b5b5b5;
        border-radius: 4px;
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
    p {
      position: absolute;
      bottom: -20px;
      left: 19px;
      font: 400 14px "Source Sans Pro", sans-serif;
      color: #b5b5b5;
    }
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
  .file-custom:after {
    font: 400 16px "Source Sans Pro", sans-serif;
    content: "Upload your photo";
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
  .submmit {
    font-size: 40px;
  }
}
</style>
