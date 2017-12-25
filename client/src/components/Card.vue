<template>
  <div class="card">
    <input v-if="editing">
    <a v-else>{{ card.title }}</a>
  </div>
</template>

<script>

//div v-if editing -> EditingCard
//else -> DisplayCard

export default {
  name: 'Card',
  props: ['card', 'editing']
}

</script>

<style>

.card {
  background-color: white;
  width: auto;
  height: 10em;
  margin: 0.5em;

  box-shadow: 0 1px 4px rgba(0,0,0,.05);
  border-radius: 5px;
}

</style>
