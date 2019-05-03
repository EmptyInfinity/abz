<template>
  <div>
    <Welcome/>
    <About/>
    <Tasks/>
    <Users/>
    <Footer/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import About from '@/components/About.vue'
import Tasks from '@/components/Tasks.vue'
import Users from '@/components/Users.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Landing',
  components: {
    Welcome, About, Tasks, Users, Footer
  }
}
</script>

<style lang="scss">

</style>
