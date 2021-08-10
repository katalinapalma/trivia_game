<template>
  <div>
    <div class="imageWrapper">

    </div>
    <h1>Start view</h1>
    <Settings />
  </div>
</template>

<script>
import Settings from '../components/Settings.vue'
export default {
    components: {
      'Settings': Settings
    }
}
</script>

<style scoped>
    .imageWrapper {
      background-image: 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
      width: 100%;
      height: 100vh;
    }
</style>