<template>
<div>
<div v-for="todo in allTodos" :key="todo.id">
<TodoItem :todo='todo'/>
  </div>
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
      ...mapGetters(['allTodos'])
  }
})
export default class TodoLst extends Vue {

}
</script>

<style>

</style>