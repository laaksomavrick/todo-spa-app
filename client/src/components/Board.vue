<template>
  <div class="board">
    <router-link :to="{name: 'CardsForBoard', params: {id: board.id}}"> {{ board.name }} </router-link>
  </div>
</template>

<script>

export default {
  name: 'Board',
  props: ['board']
}

</script>

<style>

.board {
  color: red;
}

</style>
