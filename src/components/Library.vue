<template>
  <div>
    
    <div>
      <label class="checkbox" v-bind:key="field" v-for="field in fields" >
        <input type="checkbox" v-bind:value="field" v-model="selectedFields">
        {{ field }}
      </label>
      <br>
      <span> Selected fields: {{ selectedFields }} </span>
    </div>

    <div v-bind:key="item.title" v-for="item in filteredBookList">
      <Book v-bind:book="item" />
    </div>

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
      fields: ['CS', 'Mathematics'],
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
