<template>
  <div class='box is-shadowless'>
    <p> 
      <span class="has-text-weight-semibold">{{ book.title }} </span>
      <span class="tag is-primary is-light" v-if="book.type == 'Book'"> #Book</span> 
      <span class="tag is-primary is-light" v-else-if="book.type == 'Paper'">#Paper</span>
    </p>
    <p > {{ book.author }} </p>
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
.box{
  border-style: none none solid none;
  border-radius: 0px;
  border-color:green;
  border-width:1px;

}
.display-card {
  padding-left:1em;
  text-align:left;
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
