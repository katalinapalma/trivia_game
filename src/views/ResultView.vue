<template>
  <div>
    <div class="backgroundWrapper">

      <div class="yourResultDiv">
        <h1 class="yourResultTitle">Your Result</h1>
        <h2 class="result">{{ this.score }}</h2>
      </div>

      <div class="cardWrapper">
        <h2 class="questionsTitle">Questions</h2>
        <LargeCard />
      </div>

    </div>
  </div>
</template>

<script>
  import LargeCard from '../components/Cards/LargeCard.vue'
  import { mapState, mapMutations } from 'vuex'


  export default {
    components: {
      LargeCard
    },
    methods: {
    ...mapMutations(['setScore']),
    },
    computed: {
		...mapState(['score']),
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
  .cardWrapper {
    width: 100%;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 300px;
  }
  .questionsTitle {
    margin-top: 50px;
    margin-bottom: -20px;
    color: #fff;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 500;
  }
</style>
