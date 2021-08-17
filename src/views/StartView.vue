<template>
  <div>
    <div class="backgroundWrapper">
      <h1 class="title">Trivia Game</h1>
      <div class="cardWrapper">
        <CategoryCard title="Category" defaultOption="Choose category" :categories="this.categories" />
        <DifficultyCard title="Difficulty" defaultOption="Choose difficulty" :difficulties="this.difficulties" />
        <QuestionsCard title="Number of questions" />
      </div>
      <p class="error" v-if="error">{{error}}</p>
      <button class="startBtn" @click="startGame">Start</button>
      
    </div>
  </div>
</template>

<script>
import CategoryCard from '../components/Cards/CategoryCard.vue'
import DifficultyCard from '../components/Cards/DifficultyCard.vue'
import QuestionsCard from '../components/Cards/QuestionsCard.vue'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    CategoryCard,
    DifficultyCard,
    QuestionsCard
  },
	methods: {
		...mapMutations(['setCategories', 'setQuestionsFetched']),
		...mapActions(['fetchCategories', 'fetchToken','fetchQuestions']),
    async startGame() {
      if(this.selectedNumberOfQuestions > 0 && 
      this.selectedNumberOfQuestions <= 50 &&
      this.selectedDifficulty !== '' &&
      this.selectedCategory !== '') {
        await this.fetchQuestions()
        this.$router.push('question')
      }
      else {
        this.error = 'Please select game settings'
      }
     
    }
	},
	computed: {
		...mapState([
      'categories', 
      'selectedDifficulty', 
      'selectedCategory', 
      'selectedNumberOfQuestions'])
	},
  created() {
    this.fetchToken()
    this.fetchCategories()
  },
  data() {
    return {
      difficulties: ['Easy', 'Medium', 'Hard'],
      error: ''
    }
  }
}
</script>

<style scoped>
  .title {
    font-size: 8em;
    color: #fff;
    top: 60px;
    width: 100%;
    position: absolute;
    text-transform: uppercase;
  }
  .backgroundWrapper {
    width: 100%;
    min-height: 100vh;
  }
  .overlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  .cardWrapper {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 280px;
  }
  .startBtn {
    width: 220px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 28px;
    margin-top: 660px;
    color: rgb(200 145 248);
    text-transform: uppercase;
    transition: 0.5s; 
    background-color: rgb(200 145 248);
    color: #fff;
    font-weight: 600;
  }
  .startBtn:hover {
    background-color: #fff;
    color: rgb(200 145 248);
    transition: 0.3s; 
    cursor: pointer;
  }
  .error {
    position: absolute;
    top: 105%;
    left: 42%;
    color: red;
  }
</style>