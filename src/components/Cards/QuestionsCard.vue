<template>
  <div class="card">
    <h1 class="title">{{ title }}</h1>
    <input class="numberOfQuestionsInput" type="text" name="numberOfQuestions" @change="onChange($event) " v-model="numberOfQuestions">
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    name: 'QuestionsCard',
    props: {
      title: String,
    },
    methods: {
      ...mapMutations(['setSelectedNumberOfQuestions']),
      onChange() {
        this.setSelectedNumberOfQuestions(this.numberOfQuestions)
      }
    },
    
    data() {
      return {
        numberOfQuestions: ''
      }
    }
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
  .numberOfQuestionsInput {
    padding: 15px;
    width: 70%;
    border-radius: 10px;
    margin: 20px;
    font-size: 16px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
  }
</style>