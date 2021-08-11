<template>
  <div>
    <div class="backgroundWrapper">

      <div class="yourResultDiv">
        <h1 class="yourResultTitle">Your Result</h1>
        <h2 class="result">7/10</h2>
      </div>

      <div class="cardWrapper">
        <h2 class="questionsTitle">Questions</h2>
        <LargeCard />
        <LargeCard />
      </div>

    </div>
  </div>
</template>

<script>
  import LargeCard from '../components/Cards/LargeCard.vue'

  export default {
    components: {
      LargeCard
    }
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
    color: #fff;
    font-size: 70px;
    text-transform: uppercase;
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
    color: #fff;
    text-transform: uppercase;
    margin-bottom: -20px;
    font-size: 25px;
    font-weight: 200;
  }
</style>
