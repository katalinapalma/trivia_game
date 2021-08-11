<template>
  <div>
    <div class="imageWrapper">
      <h1 class="title">Trivia Game</h1>
      <div class="cardWrapper">
        <Card title="Category" defaultOption="Choose category" />
        <Card title="Difficulty" defaultOption="Choose difficulty" />
        <Card title="Number of questions" defaultOption="Choose number of questions" />
      </div>
      <button class="startBtn" @click="startGame">Start</button>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },
  methods: {
    async getQuestions() {
      const response = await fetch('https://opentdb.com/api.php?amount=10')
      if(response.ok) {
        const questions = await response.json();
        console.log(questions);
        return questions;
      }
      else {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
    },
    startGame() {
      this.getQuestions().then(questions => {
        this.$router.push({ name: 'Question', params: { questions }})
      })
      
    }
  }
}
</script>

<style scoped>
  .title {
    font-size: 10em;
    color: #fff;
    top: 60px;
    width: 100%;
    position: absolute;
    text-transform: uppercase;
  }
  .imageWrapper {
    width: 100%;
    height: 100vh;
    background: rgb(114,225,209);
    background: radial-gradient(circle, rgba(114,225,209,1) 0%, rgba(207,138,252,1) 100%);
  }
  .overlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .cardWrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 280px;
  }
  .startBtn {
    width: 300px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 30px;
    margin-top: 660px;
    color: rgb(200 145 248);
    text-transform: uppercase;
    transition: 0.5s; 
    background-color: rgb(200 145 248);
    color: #fff;
  }
  .startBtn:hover {
    background-color: #fff;
    color: rgb(200 145 248);
    transition: 0.3s; 
    cursor: pointer;
  }
</style>