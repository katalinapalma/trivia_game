<template>
  <div>
    <h2>
      Question component
    </h2>
    <h2>
      {{question}}
    </h2>
    <ol>
      <li v-for="choice in choices" :key="choice">
        <button>X</button>
        {{choice}}
      </li>
    </ol>
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

<style>

</style>