<template>
  <div>
    <div class="questionContainer">
      <div class="questionHeader">
        <h2 class="question">
          {{decodeString(question.question)}}
        </h2>
      </div>
      <div class="questionChoices">
        <ol class="questionChoicesList">
          <li class="questionChoice" v-for="answer in answers" :key="answer">
            {{decodeString(answer)}}
            <label>
              <input @click="saveAnswer(answer)" name="answer" type="radio">
              <span class="checkmark"></span>
            </label>
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
                // hittade &Uuml; som måste göras om 
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
  .questionChoices {
    display: flex;
    justify-content: center;
    width: 550px;
    padding: 20px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.3s;
    border-radius: 30px;
    margin: auto;
  }
  .questionChoicesList {
    font-size: 25px;
    list-style-type: none;
  }
  .questionChoice {
      margin: 12px;
  }
  .question {
    margin: 200px 50px 20px 50px;
    color: #fff;
    font-size: 2em;
  }
  label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: -25px;
    left: -30px;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  label input:checked ~ .checkmark:after {
    display: block;
  }
  label .checkmark:after {
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgb(207 138 252);
  }
</style>