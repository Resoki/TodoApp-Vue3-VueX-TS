<template>
<div style='row mx-3 justify-content-between'>
    <h3 v-if='!editing'>{{ todo.title }}</h3>
    <input v-bind:value='todoText' @change='todoTextChange' v-else type='text' class='colr form-control'/>
    <div>
    <button @click='editTodoI(todo)' class='btn btn-primary mx-2'>{{editing ? 'Update': 'Edit'}}</button>
    <button @click='deleteTodo(todo.id)' class='btn btn-danger'> Delete </button>
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
      editing: false
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'editTodo']),
    todoTextChange(e: any): void {
      this.todoText = e.target.value;

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
    }
  }
})
export default class TodoItem extends Vue {

}
</script>

<style>

</style>