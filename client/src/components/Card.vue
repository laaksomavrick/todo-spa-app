<template>
  <div class="card">
    <a>{{ card.id }}</a>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['card']
}

</script>

<style>

.card {
  background-color: white;
  width: 20em;
  height: 20em;
  margin: 1em;
}

</style>
