<template>
  <div class="container-wrap">
    <div class="container">
      <h2>General requirements for the test task</h2>
      <p>
        Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.
      </p>
      <p>
        If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.
      </p>
      <p>
        Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  data: () => {
    return {}
  }
}
</script>

<style scoped lang="scss">
.container-wrap {
  background-image: url("../assets/img/imgs/bg-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding-top: 135px;
}
.container{
    background-image: url('../assets/img/imgs/man-laptop-v1.svg');
    background-repeat: no-repeat;
    background-position: right 20px top 97px;
    padding-bottom: 140px;
}
h2 {
  text-align: center;
  padding-bottom: 15px;
}
p {
  width: 555px;
  padding-top: 25px;
  font: 400 16px "Source Sans Pro", sans-serif;
}
button {
  font: 700 20px "Source Sans Pro", sans-serif;
  height: 40px;
  min-width: 290px;
  border-radius: 4px;
  background: #d36c19;
  border: none;
  color: #fff;
}
</style>
