<template>
  <div class="card">
    <h1 class="title">{{ title }}</h1>
    <select class="select" name="category" v-for="(category, i) in categories" :key="i">
      <option value="category">{{ defaultOption }}</option>
      <option class="categoryName" v-for="(option, i) in category" :key="i" @click="saveId(option.id)">{{ option.name }}</option>
    </select> 
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    name: 'CategoryCard',
    props: {
      title: String,
      defaultOption: String,
      categories: Object
    },
    methods: {
      ...mapMutations(['setSelectedCategory']),
      saveId(id) {
        // Send selected category to vuex state
        this.setSelectedCategory(id)
      }
    },
  }
</script>

<style scoped>
  .card {
    width: 20%;
    height: 250px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.3s;
    margin: 40px;
    border-radius: 30px;
  }
  .title {
    color: #fff;
    margin-top: 50px;
    text-transform: uppercase;
    font-size: 22px;
  }
  .select {
    padding: 15px;
    width: 80%;
    border-radius: 10px;
    margin: 20px;
    font-size: 16px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
  }
  .categoryName {
    color: #000;
  }
</style>