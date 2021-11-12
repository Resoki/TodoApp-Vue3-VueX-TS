<template>
<div style='row mx-3 justify-content-between'>
    <h3 v-if='!editing'>{{ todo.title }}</h3>
    <input v-bind:value='todoText' @change='todoTextChange' v-else type='text' class='colr form-control'/>
    <div>
      <button @click='editTodoI(todo)' class='btn btn-primary mx-2'>{{editing ? 'Update': 'Edit'}}</button>
      <button @click='deleteTodo(todo.id)' class='btn btn-danger'> Delete </button>
      <button @click="completedTask(todo)" v-bind:class="[activeClass ? 'btn btn-success mx-2' : 'btn btn-danger mx-2']">{{iscompletedText}}</button>
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions } from 'vuex';

@Options({
  props: {
    todo: {}
  },
  data(){
    return {
      todoText: '',
      editing: false,
      iscompletedText: 'Non fait',
      activeClass: false,
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'editTodo', 'completedTodo']),
    todoTextChange(e: any):string {
      return this.todoText = e.target.value;
    },
    editTodoI(todo: any): void {
      this.editing = this.editing == true ? false : true;
      if(this.editing) {
        this.todoText = todo.title
        this.editTodo(todo)
      }
      else{
        todo.title = this.todoText;
      }
    },
    completedTask(todo: any):string  {
         if(this.completedTodo(todo)){
           this.activeClass = true
           //if activeClass > display success green button
           return this.iscompletedText = 'Effectué !'
         }
         else {
           return this.iscompletedText = 'Non effectué !'
         }
    }
  }
})
export default class TodoItem extends Vue {

}
</script>

<style>

</style>