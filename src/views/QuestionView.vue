<template>
	<div v-if="questions">
		<h1>Question screen</h1>
		<Question :question="currentQuestion"/>
			
		<button @click="nextQuestion">{{ lastQuestion ? 'See result' : 'Next' }}</button>
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

</style>

