<template>
  <div class='box'>
    <h2> {{ book.title }} </h2>
    <p> {{ book.author }} </p>
    <span class="tag is-dark" v-for="tag in book.field" :key="tag"> {{ tag }} </span>

  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['book']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.display-card {
  padding-left:2em;
  text-align:left;
  border: 1px 1px 1px 1px;
}

h2 {
  color: black;
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
