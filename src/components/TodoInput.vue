<template>
  <div class="man">
      <h1>Todo App</h1>
    <div class="row">
      <input @change="todoTextChange" v-bind:value="todoText" class='col form-control mr-2' type='text' placeholder="Ecrivez votre tache"/>
      <button @click="addTodoI" class='btn btn-primary'>Ajouter </button>
      </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapActions} from 'vuex'
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
      ...mapActions(["addTodo"]),
      todoTextChange(e: any): void {
          this.todoText = e.target.value;

      },
      addTodoI():void {
          this.addTodo({
              id: v1(),
              title: this.todoText
          })
          this.todoText = '';
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
