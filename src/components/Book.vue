<template>
  <div class='display-card'>
    <h2> {{ book.title }} </h2>
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

h2 {
  padding-left:2em;
  text-align:left;
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
