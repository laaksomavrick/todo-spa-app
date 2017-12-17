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
  width: 20em;
  height: 20em;
  margin: 1em;

  box-shadow: 0 3px 13px rgba(0,0,0,.06);
  border-radius: 5px;
}

</style>
