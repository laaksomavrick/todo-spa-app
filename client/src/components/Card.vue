<template>
  <div class="card">
    <a>{{ card.title }}</a>
    <br></br>
    <a>{{ card.description }}</a>
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
  width: auto;
  height: 10em;
  margin: 0.5em;

  box-shadow: 0 1px 4px rgba(0,0,0,.05);
  border-radius: 5px;
}

</style>
