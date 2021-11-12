<template>
  <div class="man">
      <h2>Todo App</h2>
    <div class="row">
        <p style='font-weight: bold' v-if='this.$store.getters.getName'>Welcome {{this.$store.getters.getName}}</p>
      <div style='display: flex; align-items:center'>
      <input @change="todoTextChange" v-bind:value="todoText" style='width: 200px; text-align:center;float:center' class='col form-control' type='text' placeholder="Ecrivez votre tache"/>
      <button @click="addTodoI" class='btn btn-primary mx-2'>Ajouter </button>
      <button @click="resetTodoI" class='btn btn-danger mx-2'>Reset</button>
    
      </div>
      </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex'
import { v1 } from 'uuid';

@Options({
    data (){
        return {
            todoText: ""
        }
    },
  components: {},
  props: {
  },
  methods: {
      ...mapActions(["addTodo", 'resetTodo']),
     ...mapGetters(['getName']),
      todoTextChange(e: any): void {
          this.todoText = e.target.value;

      },
      addTodoI():void {
          this.addTodo({
              id: v1(),
              title: this.todoText
          })
          this.todoText = '';
      },
      resetTodoI() {
          this.resetTodo()
      }
  }
})
export default class TodoInput extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}

</style>

function mapActions(arg0: string[]): any {
  throw new Error('Function not implemented.');
}
