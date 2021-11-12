<template>
<div>
    <div v-for="todo in allTodos" :key="todo.id">
    <TodoItem :todo='todo'/>
    </div>
        <p v-if='this.$store.getters.countTodo === 0'>Pas de tâche !</p>
        <p v-if='this.$store.getters.countTodo === 1'>Il y a un total de {{this.$store.getters.countTodo}} task !</p>
        <p v-if='this.$store.getters.countTodo > 0 && this.$store.getters.countTodo  != 1'>Il y a un total de {{this.$store.getters.countTodo}} tasks !</p>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TodoItem from '../components/TodoItem.vue';
import { mapGetters } from 'vuex'

@Options({
  components: { TodoItem },
  props: {
  },
  computed: {
      ...mapGetters(['allTodos', 'countTodo'])
  }
})
export default class TodoList extends Vue {

}
</script>

<style>

</style>