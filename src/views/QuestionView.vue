<template>
	<div v-if="questions" class="questionWrapper">
		<Question :question="currentQuestion" :index="index"/>
			
		<button class="nextQuestionBtn" @click="nextQuestion">{{ lastQuestion ? 'See result' : 'Next' }}</button>
	</div>
</template>

<script>
import Question from '../components/Question.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
	name: 'QuestionScreen',
	components: {
		'Question': Question
	},
	methods: {
		...mapActions(['fetchQuestions']),
		...mapMutations(['setScore', 'setUserAnswers']),
		nextQuestion() {
			this.setUserAnswers([...this.userAnswers, this.selectedAnswer])
			if(this.userAnswers[this.userAnswers.length-1] === this.questions[this.index].correct_answer) {
				this.setScore(10)
			}
			
			this.index += 1;

			if(this.lastQuestion === true)
				this.$router.push('Result')
			if(this.index === this.questions.length-1) {
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
	async created() {
		await this.fetchQuestions()
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

