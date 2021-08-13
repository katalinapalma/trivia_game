<template>
  <div class="card">
    <div class="questionsDiv">
      <p class="question">
        {{decodeBase64(question.question)}}
      </p>
      <div class="answers">
        <p class="correctAnswer">
          Correct answer: {{decodeBase64(question.correct_answer)}}
        </p>
        <p class="yourAnswer">
          Your answer: {{decodeBase64(userAnswers[index])}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import decodeBase64 from '../../decodeBase64'

  export default {
    name: 'ResultCard',
    props: {
      question: Object,
      index: Number,
    },
    methods: {
      decodeBase64
    },
    computed: {
      ...mapState(['userAnswers'])
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
</style>