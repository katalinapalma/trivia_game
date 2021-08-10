<template>
	<div>
		<h1>Question screen</h1>
		<Question :question="question" :choices="choices"/>
	</div>
</template>

<script>
import Question from '../components/Question.vue'

export default {
	name: 'QuestionScreen',
	components: {
		'Question': Question
	},
	
	methods: {

	},
	beforeMount() {

	},
	data() {
		return {
			question: 'What do you choose?',
			choices: ['Option 1', 'Option 2', 'Option 3', 'Option 4']
		}
	}
}
</script>

<style>

</style>