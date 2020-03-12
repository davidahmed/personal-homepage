<template>
  <div>
    <div v-bind:key="item.title" v-for="item in bookList">
      <Book v-bind:book="item" />
    </div>
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'Library',
  components: {
    Book
  },

  props: {
    name: String
  },

  data() {
    return {
      bookList: [
      { title: '1984', author: 'George Orwell', type: 'book', tags: ['literature']},
      { title: 'War and Peace', author: 'Leo Tolstoy', type: 'book', tags: ['literature']}
      ]
      }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
