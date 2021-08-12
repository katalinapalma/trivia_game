<template>
  <div class="card">
    <h1 class="title">{{ title }}</h1>
    <input type="text" class="numberOfQuestionsInput">
  </div>
</template>

<script>
  export default {
    name: 'QuestionsCard',
    props: {
      title: String,
    }
  }
</script>

<style scoped>
  .card {
    width: 20%;
    height: 250px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: 0.3s;
    margin: 40px;
    border-radius: 30px;
  }
  .title {
    color: #fff;
    margin-top: 50px;
    text-transform: uppercase;
    font-size: 22px;
  }
  .select {
    padding: 15px;
    width: 80%;
    border-radius: 10px;
    margin: 20px;
    font-size: 16px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
  }
  .numberOfQuestionsInput {
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    border: none;
  }
</style>