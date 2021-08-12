<template>
  <div class="card">
    <div class="questionsDiv">
      <p class="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum vitae quia nisi! Velit adipisci in?
      </p>
      <div class="answers" v-show="show">
        <p class="correctAnswer">
          Correct answer: Lorem ipsum dolor.
        </p>
        <p class="yourAnswer">
          Your answer: Lorem ipsum dolor.
        </p>
      </div>
      <!-- <button class="showAnswerBtn" @click="showAnswer"> {{ show ? 'Hide answers' : 'Show answers' }}</button> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LargeCard',
    data: () => {
      return {
        show: false,
      }
    },
    methods: {
      showAnswer() {
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped>
  .card {
    width: 60%;
    min-height: 120px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.3s;
    border-radius: 30px;
    padding: 10px;
    margin-top: 60px;
  }
  .title {
    color: #fff;
    text-transform: uppercase;
    margin-top: 30px;
  }
  .questionsDiv {
    width: 100%;
  }
  .question {
    text-align: center;
  }
  .question {
    font-size: 22px;
    margin-top: 20px;
    color: #fff;
  }
  .answers {
    margin-top: 20px;
    color: #fff;
  }
  .correctAnswer {
    color: #000000;
    margin-bottom: 10px;
  }
  .yourAnswer {
    font-style: italic;
  }
  .showAnswerBtn {
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 15px;
    color: rgb(200 145 248);
    transition: 0.5s; 
    background: rgb(99, 146, 177);
    color: #fff;
  }
  .showAnswerBtn:hover {
    background: rgb(152, 235, 222);
    background: rgb(132, 183, 218);
    transition: 0.3s; 
    cursor: pointer;
  }
</style>