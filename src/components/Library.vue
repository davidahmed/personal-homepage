<template>
  <div>
    <section class="section">
      <p> A collection of books, papers, courses and websites I have found to be especially invaluable 
      in various fields of my interest.</p>
      <br>
      <div>
        <label class="checkbox field-selection" v-bind:key="field" v-for="field in fields">
          <input type="checkbox" v-bind:value="field" v-model="selectedFields">
          {{ field }} 
        </label> 
      </div>
      <br>
    <div v-bind:key="item.title" v-for="item in filteredBookList">
      <Book v-bind:book="item" />
    </div>
    </section>
  </div>
</template>

<script>
import Book from './Book.vue'; 
import { libraryResources } from '../assets/library-resources.js';

export default {
  name: 'Library',
  components: {
    Book
  },

  props: [],

  data() {
    return {
      bookList: libraryResources,
      fields: ['CS', 'Mathematics', 'Psychology', 'History', 'Theology'],
      selectedFields: [],
    }
  },
  computed: {
        filteredBookList: function(){
          let selectedFields = this.selectedFields
          if (selectedFields.length == 0){
            selectedFields = this.fields
          }
          return this.bookList.filter(function(e){
            for (var i=0; i < e.field.length; i++){
              if (selectedFields.indexOf(e.field[i]) >= 0){
                return true;
              }
            }
            return false;
          });
        }
  },
  mounted() {
		window.gtag('config', 'UA-163385520-1', 
		{'page_path': '/bookshelf'});
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
.field-selection:not(:first-child){
    padding-left:2em;
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
