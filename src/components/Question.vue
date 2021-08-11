<template>
  <div>
    <h2>
      Question component
    </h2>
    <div class="questionContainer">
      <div class="questionHeader">
        <h2>
          {{question}}
        </h2>
      </div>
      <div class="questionChoices">
        <ol class="questionChoicesList">
          <li class="questionChoice" v-for="choice in choices" :key="choice">
            <button>X</button>
            {{choice}}
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
    question: String,
    choices: Array
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