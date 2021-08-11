<template>
  <div>
    <h2>
      Question component
    </h2>
    <div class="questionContainer">
      <div class="questionHeader">
        <h2>
          {{question.question}}
        </h2>
      </div>
      <div class="questionChoices">
        <ol class="questionChoicesList">
          <li class="questionChoice" v-for="option in composeAnswers" :key="option">
            <button>X</button>
            {{option}}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: Object,
  },
  computed: {
    composeAnswers() {
      return [...this.question.incorrect_answers, this.question.correct_answer]
    }
  }
}
</script>

<style scoped>

.questionContainer {
  background-color: red;
}
.questionHeader {
  background-color: blue;
}
.questionChoices {
  display: flex;
  justify-content: center;
  background-color: green;
}
.questionChoicesList {

  background-color: yellow;
}
.questionChoice {
    margin: 12px;
}

</style>