<template>
  <div>
    <h2>
      Question component
    </h2>
    <div class="questionContainer">
      <div class="questionHeader">
        <h2>
          {{decodeString(question.question)}}
        </h2>
      </div>
      <div class="questionChoices">
        <ol class="questionChoicesList">
          <li class="questionChoice" v-for="answer in answers" :key="answer">
            {{decodeString(answer)}}
            <input @click="saveAnswer(answer)" name="answer" type="radio">
            
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import shuffle from 'lodash.shuffle'

export default {
  name: 'Question',
  props: {
    question: Object,
  },
  methods: {
    ...mapMutations(['setUserAnswers']),
    saveAnswer(answer) {
      this.setUserAnswers([...this.userAnswers,answer])
    },
    decodeString(str){
            if (typeof(str) == "string") {
                str = str.replace(/&gt;/ig, ">");
                str = str.replace(/&lt;/ig, "<");
                str = str.replace(/&#039;/g, "'");
                str = str.replace(/&quot;/ig, '"');
                str = str.replace(/&amp;/ig, '&'); /* must do &amp; last */
            }
            return str;
        }
    
  },
  computed: {
    ...mapState(['userAnswers']),
    answers() {
      let shuffleArr = []

      this.question.incorrect_answers.map(q =>  {
        shuffleArr.push(q);
      })
      shuffleArr.push(this.question.correct_answer)

      let shuffleAnswer = shuffle(shuffleArr)

      return shuffleAnswer
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