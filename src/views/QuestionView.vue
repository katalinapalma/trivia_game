<template>
	<div v-if="questions" class="questionWrapper">
		<!-- <h1>Question screen</h1> -->
		<Question :question="currentQuestion"/>
			
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
		...mapMutations(['setScore']),
		nextQuestion() {
			if(this.userAnswers[this.userAnswers.length-1] === this.questions[this.index].correct_answer) {
				console.log(this.questions[this.index].correct_answer);
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
		...mapState(['questions', 'userAnswers', 'score']),
		currentQuestion() {
			return this.questions[this.index]
		}
	},
	async created() {
		// fetch questions
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
		/* padding: 20px;
		border: none;
		background-color: #fff;
		width: 200px;
		font-size: 25px;
		border-radius: 10px;
		margin-top: 70px; */
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

