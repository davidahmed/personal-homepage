<template>
  <div class='box'>
    <h2> 
      {{ book.title }} 
      <span v-if="book.type == 'Book'">📘</span> 
      <span v-else-if="book.type == 'Paper'">📄</span>
    </h2>
    <p> {{ book.author }} </p>
    <span class="tag has-text-white has-background-grey-dark" v-for="tag in book.field" :key="tag"> {{ tag }} </span>

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
.tag{
    margin-right:2em;
}
.display-card {
  padding-left:1em;
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
