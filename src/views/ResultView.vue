<template>
  <div>
    <button class="startPageBtn" @click="startPage">Start page</button>
    <button class="replayGameBtn" @click="replayGame">Replay game</button>
    <div class="backgroundWrapper">
      <div class="yourResultDiv">
        <h1 class="yourResultTitle">Your Result</h1>
        <h2 class="result">{{ this.score }}</h2>
      </div>
      <div class="titleWrapper">
        <h2 class="questionsTitle">Questions & Answers</h2>
      </div>
      <div class="cardWrapper" v-for="(question, i) in questions" :key="question.id">
        <ResultCard :question="question" :index="i"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ResultCard from '../components/Cards/ResultCard.vue'
  import { mapState, mapMutations, mapActions } from 'vuex'

  export default {
    components: {
      ResultCard
    },
    methods: {
    ...mapMutations(['setScore', 'setUserAnswers']),
    ...mapActions(['resetScore']),
    startPage() {
      this.$router.push('/')
    },
    replayGame() {
      this.setUserAnswers('')
      this.resetScore()
      this.$router.push('question')
    }
    },
    computed: {
		...mapState(['score', 'questions']),
	},
  }
</script>

<style scoped>
  .backgroundWrapper {
    width: 100%;
    min-height: 100vh;
  }
  .yourResultDiv {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100px;
    width: 100%;
    flex-direction: column;
  }
  .yourResultTitle, .result {
    font-family: Raleway;
    font-size: 80px;
    letter-spacing: 0.1em;
    font-weight: 900;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #a4d881;
    text-shadow: 1px 0px #b7fc8a, 9px 4px 0px #737373;
    text-transform: uppercase;
  }
  .yourResultDiv .result {
    color: #b7fc8a;
    font-size: 70px;
    text-transform: uppercase;
  }
  .result {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .titleWrapper {
    width: 100%;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 300px;
  }
  .cardWrapper {
    width: 100%;
    position: relative;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 350px;
  }
  .questionsTitle {
    margin-top: 50px;
    margin-bottom: -20px;
    color: #fff;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 500;
  }
  .startPageBtn {
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgb(176, 214, 126);
    color:rgb(186, 62, 197);
    cursor: pointer;
    float:left ;
    letter-spacing: 0.1em;
    font-size: 16px;
    margin: 9px;
    padding: 12px;
    -webkit-text-stroke-color: #a4d881;
    text-shadow: 1px 0px #b7fc8a, 0px 0.5px 0px #737373;
  }
  
  .replayGameBtn {
    border: 2px solid none;
    border-radius: 5px;
    background-color: rgb(176, 214, 126);
    color:cornflowerblue;
    cursor: pointer;
    float:right;
    letter-spacing: 0.1em;
    font-size: 16px;
    margin: 9px;
    padding: 12px;
    -webkit-text-stroke-color: #a4d881;
    text-shadow: 0.5px 0px #b7fc8a, 0px 0.5px 0px #737373;
  }
  .replayGameBtn:hover, .startPageBtn:hover {
    padding: 12px;
    border: 2px solid rgb(38, 10, 160);
  }
</style>
