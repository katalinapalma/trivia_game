<template>
	<div v-if="questions" class="questionWrapper">
		<Question :question="currentQuestion" :index="index"/>
			
		<button class="nextQuestionBtn" @click="nextQuestion">{{ lastQuestion ? 'See result' : 'Next' }}</button>
	</div>
</template>

<script>
import Question from '../components/Question.vue'
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'QuestionScreen',
	components: {
		'Question': Question
	},
	methods: {
		...mapMutations(['setScore', 'setUserAnswers']),
		nextQuestion() {
			// Saves user answers for each question
			this.setUserAnswers([...this.userAnswers, this.selectedAnswer])
			// If answer is correct, add 10 points to score
			if(this.userAnswers[this.userAnswers.length-1] === this.questions[this.index].correct_answer) {
				this.setScore(10)
			}
			// Keep track of question #
			this.index += 1;
			// If user has chosen only to get 1 questions, set that questions as the last question
			if(this.questions.length === 1) {
				this.lastQuestion = true
			}
			// When on last question, go to results instead of next question.
			if(this.lastQuestion === true)
				this.$router.push('result')
			// If next question is the last one, mark it as last question
			if(this.index === this.questions.length-1 ) {
				this.lastQuestion = true
			}
		}
	},
	computed: {
		...mapState(['questions', 'userAnswers', 'score', 'selectedAnswer']),
		currentQuestion() {
			return this.questions[this.index]
		}
	},
	
	data() {
		return {
			index: 0,
			lastQuestion: false		
		}
	}
}
</script>

<style>
	.questionWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.nextQuestionBtn {
		width: 200px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 25px;
		margin-top: 70px;
    color: rgb(200 145 248);
    text-transform: uppercase;
    transition: 0.5s;
    background-color: rgb(200 145 248);
    color: #fff;
		font-weight: 600;
	}
	.nextQuestionBtn:hover {
    background-color: #fff;
    color: rgb(200 145 248);
    transition: 0.3s; 
    cursor: pointer;
	}
</style>

